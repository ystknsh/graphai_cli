#!/usr/bin/env node

import { GraphAI } from "graphai";
import { AgentFunctionDictonary } from "graphai/lib/type";
import * as packages from "graphai/lib/experimental_agents/packages";

import fs from "fs";
import path from "path";

import { hasOption, args } from "./args";
import { callbackLog } from "./utils";
import { readGraphaiData, mkdirLogDir } from "./file_utils";
import { option } from "./options";

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

    const agents = Object.entries(packages).reduce((tmp: AgentFunctionDictonary, current) => {
      const [k, v] = current;
      tmp[v.name] = v.agent;
      return tmp;
    }, {});
    const graph = new GraphAI(graph_data, agents);

    if (args.verbose) {
      graph.onLogCallback = callbackLog;
    }
    const results = await graph.run();
    console.log(results);

    if (args.log) {
      const logfile = fileFullPath(args.log);
      fs.writeFileSync(logfile, JSON.stringify(graph.transactionLogs(), null, 2));
    }
  } catch (e) {
    console.log("error", e);
  }
};

main();
