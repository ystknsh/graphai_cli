#!/usr/bin/env node

import { GraphAI } from "graphai";
import { AgentFunctionDictonary } from "graphai/lib/type";
import * as packages from "graphai/lib/experimental_agents/packages";
import "dotenv/config";

import fs from "fs";
import path from "path";
import yaml from "yaml";

import { hasOption, args } from "./args";
import { callbackLog } from "./utils";
import { readGraphaiData, mkdirLogDir } from "./file_utils";
import { option } from "./options";
import { mermaid } from "./mermaid";

const fileFullPath = (file: string) => {
  return path.resolve(process.cwd() + "/" + file) || "";
};

const main = async () => {
  if (hasOption) {
    option(args, packages);
    return;
  }
  const file_path = fileFullPath(args.yaml_or_json_file as string);
  if (!fs.existsSync(file_path)) {
    console.log("no file exist: " + file_path);
    return;
  }
  if (args.log) {
    const logfile = fileFullPath(args.log);
    mkdirLogDir(path.dirname(logfile));
  }
  try {
    const graph_data = readGraphaiData(file_path);

    if (args.mermaid) {
      mermaid(graph_data);
      return;
    }
    if (args.json) {
      console.log(JSON.stringify(graph_data, null, 2));
      return;
    }
    if (args.yaml) {
      console.log(yaml.stringify(graph_data, null, 2));
      return;
    }

    const agents = Object.entries(packages).reduce((tmp: AgentFunctionDictonary, current) => {
      const [__k, v] = current;
      tmp[v.name] = v.agent;
      return tmp;
    }, {});
    const graph = new GraphAI(graph_data, agents);

    if (args.verbose) {
      graph.onLogCallback = callbackLog;
    }
    try {
      const results = await graph.run();
      console.log(JSON.stringify(results, null, 2));
    } catch (e) {
      console.log("error", e);
    }

    if (args.log) {
      const logfile = fileFullPath(args.log);
      fs.writeFileSync(logfile, JSON.stringify(graph.transactionLogs(), null, 2));
    }
  } catch (e) {
    console.log("error", e);
  }
};

main();
