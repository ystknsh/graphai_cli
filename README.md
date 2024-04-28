# graphai cli

graphai command line tool

## Usage

```
graphai_cli.ts <yaml_file>

run GraphAI with yaml GraphAI file.

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -l, --list     agents list
  -s, --sample   agents list
  -d, --detail   agent detail                                           [string]
  -v, --verbose  verbose log               [boolean] [required] [default: false]
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
