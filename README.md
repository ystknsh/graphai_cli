# graphai cli🤖

graphai command line tool

## Install 🚀

npm i -g  @receptron/graphai_cli

## Usage

```
graphai_cli.ts <yaml_or_json_file>

run GraphAI with GraphAI file.

Positionals:
  yaml_or_json_file  yaml or json file                                  [string]

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -l, --list     agents list
  -s, --sample   agents list                                            [string]
  -d, --detail   agent detail                                           [string]
  -v, --verbose  verbose log               [boolean] [required] [default: false]
      --log      output log                                             [string]
```

### Run graphai

```
graphai test_yaml/test_base.yml 
```

### Get Agents List

```
graphai -l

Available Agents
- bypassAgent
- copyMessageAgent
- countingAgent
- dataObjectMergeTemplateAgent
- dataSumTemplateAgent
- dotProductAgent
- echoAgent
- mapAgent
- mergeNodeIdAgent
- nestedAgent
- popAgent
- pushAgent
- shiftAgent
- slashGPTAgent
- sleeperAgent
- sleeperAgentDebug
- sortByValuesAgent
- stringEmbeddingsAgent
- stringSplitterAgent
- stringTemplateAgent
- tokenBoundStringsAgent
- totalAgent
```
