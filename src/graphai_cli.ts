#!/usr/bin/env node

import { GraphAI } from "graphai";
import { AgentFunctionDictonary } from "graphai/lib/type";
import * as packages from "graphai/lib/experimental_agents/packages";


import fs from "fs";
import path from "path";

import { hasOption, args } from "./args";
import { callbackLog } from "./utils";
import { readGraphaiData } from "./file_utils";
import { option } from "./options";

const main = async () => {
  if (hasOption) {
    option(args, packages);
    return;
  }
  const file = args.yaml_file;
  const file_path = path.resolve(process.cwd() + "/" + file) || "";
  if (!fs.existsSync(file_path)) {
    console.log("no file exist: " + file_path);
    return;
  }
  try {
    const graph_data = readGraphaiData(file_path);

    const agents = Object.entries(packages).reduce((tmp: AgentFunctionDictonary, current) => {
      const [k, v] = current
      tmp[v.name] = v.agent
      return tmp;
    }, {})
    const graph = new GraphAI(graph_data, agents);

    if (args.verbose) {
      graph.onLogCallback = callbackLog;
    }
    const results = await graph.run();
    console.log(results);
  } catch (e) {
    console.log("error", e);
  }
};


main();
