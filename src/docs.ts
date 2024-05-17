import { AgentFunctionInfo } from "graphai/lib/type";

import * as packages from "graphai/lib/experimental_agents";

import fs from "fs";
import path from "path";


const agentAttribute = (agentInfo: AgentFunctionInfo, key: string) => {
  if (key === "samples") {
    return agentInfo.samples.map((sample) => {
      return [
        "#### inputs",
        "```json",
        JSON.stringify(sample.inputs, null, 2),
        "````",
        "#### params",
        "```json",
        JSON.stringify(sample.params),
        "````",
        "#### result",
        "```json",
        JSON.stringify(sample.result, null, 2),
        "````",
      ].join("\n\n");
        // return JSON.stringify(agentInfo.samples, null, 2);
    }).join("\n");
  }
  return agentInfo[key as keyof AgentFunctionInfo] as string;
}

const readTemplate = (file: string) => {
  return fs.readFileSync(path.resolve(__dirname) + "/../templates/" + file, "utf8");
};

const agentMd = (agentInfo: AgentFunctionInfo) => { 
  const template = readTemplate("agent.md");
  const md = ["name", "description", "author", "repository", "license", "samples" ].reduce((tmp, key) => {
    tmp = tmp.replace("{" + key + "}", agentAttribute(agentInfo, key))
    return tmp;
  }, template);
  return md;
};
const main = () => {
  console.log(packages);
  Object.values(packages).map(agent => {
    const md = agentMd(agent);
    agent.category.map(async (cat) => {
      const dir = path.resolve(__dirname + "/../docs/" + cat);
      if (!fs.existsSync(dir)) {
        await fs.promises.mkdir(dir)
      }
      fs.writeFileSync(dir + "/" + agent.name + ".md", md);
    });
    // console.log(md);
  });
};

main();
