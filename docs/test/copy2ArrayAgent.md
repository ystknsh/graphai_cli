## copy2ArrayAgent

### Description

Copy2Array agent

### Samples

#### inputs

```json

[
  {
    "message": "hello"
  }
]

````

#### params

```json

{"count":10}

````

#### result

```json

[
  {
    "message": "hello"
  },
  {
    "message": "hello"
  },
  {
    "message": "hello"
  },
  {
    "message": "hello"
  },
  {
    "message": "hello"
  },
  {
    "message": "hello"
  },
  {
    "message": "hello"
  },
  {
    "message": "hello"
  },
  {
    "message": "hello"
  },
  {
    "message": "hello"
  }
]

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
    "required": [
      "message"
    ],
    "properties": {
      "message": {
        "type": "string",
        "minLength": 1
      }
    }
  }
}

````

### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT

