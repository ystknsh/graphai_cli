import yargs from "yargs";

export const hasOption = ["-l", "--list", "-d", "--detail", "-s", "--sample"].some((o) => process.argv.includes(o));

export const args = yargs
  .option("list", {
    alias: "l",
    description: "agents list",
  })
  .option("sample", {
    alias: "s",
    description: "agents list",
    type: "string",
  })
  .option("d", {
    alias: "detail",
    describe: "agent detail",
    type: "string",
  })
  .option("v", {
    alias: "verbose",
    describe: "verbose log",
    demandOption: true,
    default: false,
    type: "boolean",
  })
  .option("log", {
    description: "output log",
    demandOption: false,
    type: "string",
  })
  .command(hasOption ? "* [yaml_or_json_file]" : "* <yaml_or_json_file>", "run GraphAI with GraphAI file.")
  .positional("yaml_or_json_file", {
    describe: "yaml or json file",
    type: "string",
    demandOption: hasOption,
  })
  .parseSync();
