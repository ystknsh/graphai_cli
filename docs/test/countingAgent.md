## countingAgent

### Description

Counting agent

### Samples

#### inputs

```json

[]

````

#### params

```json

{"count":4}

````

#### result

```json

{
  "list": [
    0,
    1,
    2,
    3
  ]
}

````

### Schema

#### inputs

```json

{
  "type": "array",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "",
  "minItems": 1,
  "uniqueItems": true,
  "items": {
    "type": "object",
    "required": [],
    "properties": {}
  }
}

````

### Input Format

```json

[
  ":agentId.list.$0",
  ":agentId.list.$1",
  ":agentId.list.$2",
  ":agentId.list.$3"
]

````

### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT

