#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphai_1 = require("graphai");
const agents = __importStar(require("graphai/lib/experimental_agents"));
const yargs_1 = __importDefault(require("yargs"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const yaml_1 = __importDefault(require("yaml"));
const hasOption = process.argv.includes("-l") || process.argv.includes("--list");
const args = yargs_1.default
    .option("list", {
    alias: "l",
    description: "agents list",
})
    .command(hasOption ? "* [yaml_file]" : "* <yaml_file>", "run GraphAI with yaml GraphAI file.")
    .parseSync();
const main = async () => {
    if (args.list) {
        console.log("Available Agents");
        console.log(Object.keys(agents)
            .sort()
            .map((a) => "- " + a)
            .join("\n"));
        return;
    }
    const file = args.yaml_file;
    const file_path = path_1.default.resolve(process.cwd() + "/" + file);
    if (!fs_1.default.existsSync(file_path)) {
        console.log("no file exist: " + file_path);
        return;
    }
    try {
        const graph_data_file = fs_1.default.readFileSync(file_path, "utf8");
        const graph_data = yaml_1.default.parse(graph_data_file);
        const graph = new graphai_1.GraphAI(graph_data, agents);
        const results = await graph.run();
        console.log(results);
    }
    catch (e) {
        console.log("error", e);
    }
};
main();
