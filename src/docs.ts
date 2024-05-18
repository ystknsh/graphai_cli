import { AgentFunctionInfo } from "graphai/lib/type";

import jsonSchemaGenerator from "json-schema-generator";

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
  if (key === "schemas") {
    return agentInfo.samples.map((sample) => {
      return [
        "#### inputs",
        "```json",
        JSON.stringify(jsonSchemaGenerator(sample.inputs), null, 2),
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
  const md = ["name", "description", "author", "repository", "license", "samples", "schemas" ].reduce((tmp, key) => {
    tmp = tmp.replace("{" + key + "}", agentAttribute(agentInfo, key))
    return tmp;
  }, template);
  return md;
};
const IndexMd = (ret: Record<string, Record<string, string>>) => {
  const templates = [];
  for (const cat of Object.keys(ret)) {
    templates.push("## " + cat)
    for (const agentName of Object.keys(ret[cat])) {
      templates.push("### [" + agentName +"](./" + cat + "/" + agentName + ".md)")
    }
    templates.push("")
  }
  return templates.join("\n");
};
const main = () => {
  const ret: Record<string, Record<string, string>> = {};
  Object.values(packages).map(agent => {
    const md = agentMd(agent);
    agent.category.map(async (cat) => {
      if (!ret[cat]) {
        ret[cat] = {};
      }
      ret[cat][agent.name] = agent.name;
      const catDir = path.resolve(__dirname + "/../docs/" + cat);
      await fs.promises.mkdir(catDir, { recursive: true })
      fs.writeFileSync(catDir + "/" + agent.name + ".md", md);
      
    });
  });
  // console.log(ret);
  const index = IndexMd(ret)
  fs.writeFileSync(__dirname + "/../docs/README.md", index);

};

main();
