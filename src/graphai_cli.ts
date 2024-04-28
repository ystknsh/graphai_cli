#!/usr/bin/env node

import { GraphAI } from "graphai";
import * as agents from "graphai/lib/experimental_agents";
import yargs from 'yargs';

import fs from "fs";
import path from "path";
import YAML from "yaml";

const args = yargs
  .command("* <yaml_file>", "run GraphAI with yaml GraphAI file.")
  .parseSync()

const main = async () => {
  const file = args.yaml_file;
  const file_path = path.resolve(process.cwd() + "/" + file);
  if (!fs.existsSync(file_path)) {
    console.log("no file");
    return;
  }
  try {
    const graph_data_file = fs.readFileSync(file_path, "utf8");
    const graph_data = YAML.parse(graph_data_file);

    const graph = new GraphAI(graph_data, agents);
    const results = await graph.run();
    console.log(results);
  } catch (e) {
    console.log("error", e);
  }
};

main();
