#!/usr/bin/env node

import { GraphAI } from "graphai";
import * as agents from "graphai/lib/experimental_agents";
import * as packages from "graphai/lib/experimental_agents/packages";
import yargs from "yargs";

import fs from "fs";
import path from "path";
import YAML from "yaml";

const hasOption = ["-l", "--list", "-d", "--detail", "-s", "--sample"].some((o) => process.argv.includes(o));

const args = yargs
  .option("list", {
    alias: "l",
    description: "agents list",
  })
  .option("sample", {
    alias: "s",
    description: "agents list",
  })
  .option("d", {
    alias: "detail",
    describe: "agent detail",
    type: "string",
  })
  .command(hasOption ? "* [yaml_file]" : "* <yaml_file>", "run GraphAI with yaml GraphAI file.")
  .parseSync();

const main = async () => {
  if (hasOption) {
    option();
    return;
  }
  const file = args.yaml_file;
  const file_path = path.resolve(process.cwd() + "/" + file) || "";
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

const list = () => {
  console.log("Available Agents");
  console.log(
    Object.entries(packages)
      .map(([k, v]) => "* " + k + " - " + v.description)
      .join("\n"),
  );
};

const getAgent = (agentId: string) => {
  return Object.entries(packages).find(([k, v]) => k === agentId);
};
const detail = () => {
  const agent = getAgent(args.detail as string);
  if (!agent) {
    console.log("no agent: " + args.detail);
    return;
  }
  console.log("* " + agent[0]);
  const detail = agent[1];
  console.log([detail.name, " - ", detail.description].join(""));
  console.log("Author " + detail.author);
  console.log("Repository " + detail.repository);
  console.log("Licence " + detail.license);
};
const sample = () => {
  const agent = getAgent(args.sample as string);
  if (!agent) {
    console.log("no agent: " + args.detail);
    return;
  }
  const detail = agent[1];
  console.log("* " + agent[0]);
  console.log(JSON.stringify(detail.samples, null, 2));
};

const option = () => {
  if (args.list) {
    list();
  }
  if (args.detail) {
    detail();
  }
  if (args.sample) {
    sample();
  }
};

main();
