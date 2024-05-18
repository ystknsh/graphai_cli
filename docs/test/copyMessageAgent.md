## copyMessageAgent

### Description

CopyMessage agent

### Samples

#### inputs

```json

[]

````

#### params

```json

{"count":4,"message":"hello"}

````

#### result

```json

{
  "messages": [
    "hello",
    "hello",
    "hello",
    "hello"
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

### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT

