#!/usr/bin/env node

import { GraphAI } from "graphai";
import * as agents from "graphai/lib/experimental_agents";
import yargs from "yargs";

import fs from "fs";
import path from "path";
import YAML from "yaml";

const hasOption = process.argv.includes("-l") || process.argv.includes("--list");

const args = yargs
  .option("list", {
    alias: "l",
    description: "agents list",
  })
  .command(hasOption ? "* [yaml_file]" : "* <yaml_file>", "run GraphAI with yaml GraphAI file.")
  .parseSync();

const main = async () => {
  if (args.list) {
    console.log("Available Agents");
    console.log(
      Object.keys(agents)
        .sort()
        .map((a) => "- " + a)
        .join("\n"),
    );
    return;
  }
  const file = args.yaml_file;
  const file_path = path.resolve(process.cwd() + "/" + file);
  if (!fs.existsSync(file_path)) {
    console.log("no file exist: " + file_path);
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
