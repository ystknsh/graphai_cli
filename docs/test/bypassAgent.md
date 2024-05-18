## bypassAgent

### Description

bypass agent

### Samples

#### inputs

```json

[
  {
    "a": "123"
  }
]

````

#### params

```json

{}

````

#### result

```json

[
  {
    "a": "123"
  }
]

````
#### inputs

```json

[
  [
    {
      "a": "123"
    },
    {
      "b": "abc"
    }
  ],
  [
    {
      "c": "987"
    },
    {
      "d": "xyz"
    }
  ]
]

````

#### params

```json

{}

````

#### result

```json

[
  [
    {
      "a": "123"
    },
    {
      "b": "abc"
    }
  ],
  [
    {
      "c": "987"
    },
    {
      "d": "xyz"
    }
  ]
]

````
#### inputs

```json

[
  [
    {
      "a": "123"
    },
    {
      "b": "abc"
    }
  ],
  [
    {
      "c": "987"
    },
    {
      "d": "xyz"
    }
  ]
]

````

#### params

```json

{"firstElement":true}

````

#### result

```json

[
  {
    "a": "123"
  },
  {
    "b": "abc"
  }
]

````
#### inputs

```json

[
  [
    {
      "a": "123"
    },
    {
      "b": "abc"
    }
  ],
  [
    {
      "c": "987"
    },
    {
      "d": "xyz"
    }
  ]
]

````

#### params

```json

{"flat":1}

````

#### result

```json

[
  {
    "a": "123"
  },
  {
    "b": "abc"
  },
  {
    "c": "987"
  },
  {
    "d": "xyz"
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
      "a"
    ],
    "properties": {
      "a": {
        "type": "string",
        "minLength": 1
      }
    }
  }
}

````
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
      "0",
      "1"
    ],
    "properties": {
      "0": {
        "type": "array",
        "uniqueItems": true,
        "minItems": 1,
        "items": {
          "required": [
            "a"
          ],
          "properties": {
            "a": {
              "type": "string",
              "minLength": 1
            }
          }
        }
      },
      "1": {
        "type": "array",
        "uniqueItems": true,
        "minItems": 1,
        "items": {
          "required": [
            "c"
          ],
          "properties": {
            "c": {
              "type": "string",
              "minLength": 1
            }
          }
        }
      }
    }
  }
}

````
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
      "0",
      "1"
    ],
    "properties": {
      "0": {
        "type": "array",
        "uniqueItems": true,
        "minItems": 1,
        "items": {
          "required": [
            "a"
          ],
          "properties": {
            "a": {
              "type": "string",
              "minLength": 1
            }
          }
        }
      },
      "1": {
        "type": "array",
        "uniqueItems": true,
        "minItems": 1,
        "items": {
          "required": [
            "c"
          ],
          "properties": {
            "c": {
              "type": "string",
              "minLength": 1
            }
          }
        }
      }
    }
  }
}

````
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
      "0",
      "1"
    ],
    "properties": {
      "0": {
        "type": "array",
        "uniqueItems": true,
        "minItems": 1,
        "items": {
          "required": [
            "a"
          ],
          "properties": {
            "a": {
              "type": "string",
              "minLength": 1
            }
          }
        }
      },
      "1": {
        "type": "array",
        "uniqueItems": true,
        "minItems": 1,
        "items": {
          "required": [
            "c"
          ],
          "properties": {
            "c": {
              "type": "string",
              "minLength": 1
            }
          }
        }
      }
    }
  }
}

````

### Input Format

```json

[
  ":agentId.$0.a"
]

````
```json

[
  ":agentId.$0.$0.a",
  ":agentId.$0.$1.b",
  ":agentId.$1.$0.c",
  ":agentId.$1.$1.d"
]

````
```json

[
  ":agentId.$0.a",
  ":agentId.$1.b"
]

````
```json

[
  ":agentId.$0.a",
  ":agentId.$1.b",
  ":agentId.$2.c",
  ":agentId.$3.d"
]

````

### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT

