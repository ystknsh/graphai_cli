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
const packages = __importStar(require("graphai/lib/experimental_agents"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const agentAttribute = (agentInfo, key) => {
    if (key === "samples") {
        return agentInfo.samples.map((sample) => {
            return [
                "#### inputs",
                "```json",
                JSON.stringify(sample.inputs, null, 10),
                "````",
                "#### params",
                "```json",
                JSON.stringify(sample.params),
                "````",
                "#### result",
                "```json",
                JSON.stringify(sample.result),
                "````",
            ].join("\n\n");
            // return JSON.stringify(agentInfo.samples, null, 2);
        }).join("\n");
    }
    return agentInfo[key];
};
const readTemplate = (file) => {
    return fs_1.default.readFileSync(path_1.default.resolve(__dirname) + "/../templates/" + file, "utf8");
};
const agentMd = (agentInfo) => {
    const template = readTemplate("agent.md");
    const md = ["name", "description", "author", "repository", "license", "samples"].reduce((tmp, key) => {
        tmp = tmp.replace("{" + key + "}", agentAttribute(agentInfo, key));
        return tmp;
    }, template);
    return md;
};
const main = () => {
    console.log(packages);
    Object.values(packages).map(agent => {
        const md = agentMd(agent);
        agent.category.map(async (cat) => {
            const dir = path_1.default.resolve(__dirname + "/../docs/" + cat);
            if (!fs_1.default.existsSync(dir)) {
                await fs_1.default.promises.mkdir(dir);
            }
            fs_1.default.writeFileSync(dir + "/" + agent.name + ".md", md);
        });
        // console.log(md);
    });
};
main();
