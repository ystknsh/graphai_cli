## propertyFilterAgent

### Description

Filter properties based on property name either with 'include' or 'exclude'

### Samples

#### inputs

```json

[
  {
    "color": "red",
    "model": "Model 3",
    "type": "EV",
    "maker": "Tesla",
    "range": 300
  }
]

````

#### params

```json

{"include":["color","model"]}

````

#### result

```json

{
  "color": "red",
  "model": "Model 3"
}

````
#### inputs

```json

[
  [
    {
      "color": "red",
      "model": "Model 3",
      "type": "EV",
      "maker": "Tesla",
      "range": 300
    },
    {
      "color": "blue",
      "model": "Model Y",
      "type": "EV",
      "maker": "Tesla",
      "range": 400
    }
  ],
  "Tesla Motors"
]

````

#### params

```json

{"include":["color","model"]}

````

#### result

```json

[
  {
    "color": "red",
    "model": "Model 3"
  },
  {
    "color": "blue",
    "model": "Model Y"
  }
]

````
#### inputs

```json

[
  [
    {
      "color": "red",
      "model": "Model 3",
      "type": "EV",
      "maker": "Tesla",
      "range": 300
    },
    {
      "color": "blue",
      "model": "Model Y",
      "type": "EV",
      "maker": "Tesla",
      "range": 400
    }
  ],
  "Tesla Motors"
]

````

#### params

```json

{"exclude":["color","model"]}

````

#### result

```json

[
  {
    "type": "EV",
    "maker": "Tesla",
    "range": 300
  },
  {
    "type": "EV",
    "maker": "Tesla",
    "range": 400
  }
]

````
#### inputs

```json

[
  [
    {
      "color": "red",
      "model": "Model 3",
      "type": "EV",
      "maker": "Tesla",
      "range": 300
    },
    {
      "color": "blue",
      "model": "Model Y",
      "type": "EV",
      "maker": "Tesla",
      "range": 400
    }
  ],
  "Tesla Motors"
]

````

#### params

```json

{"alter":{"color":{"red":"blue","blue":"red"}}}

````

#### result

```json

[
  {
    "color": "blue",
    "model": "Model 3",
    "type": "EV",
    "maker": "Tesla",
    "range": 300
  },
  {
    "color": "red",
    "model": "Model Y",
    "type": "EV",
    "maker": "Tesla",
    "range": 400
  }
]

````
#### inputs

```json

[
  [
    {
      "color": "red",
      "model": "Model 3",
      "type": "EV",
      "maker": "Tesla",
      "range": 300
    },
    {
      "color": "blue",
      "model": "Model Y",
      "type": "EV",
      "maker": "Tesla",
      "range": 400
    }
  ],
  "Tesla Motors"
]

````

#### params

```json

{"inject":[{"propId":"maker","from":1}]}

````

#### result

```json

[
  {
    "color": "red",
    "model": "Model 3",
    "type": "EV",
    "maker": "Tesla Motors",
    "range": 300
  },
  {
    "color": "blue",
    "model": "Model Y",
    "type": "EV",
    "maker": "Tesla Motors",
    "range": 400
  }
]

````
#### inputs

```json

[
  [
    {
      "color": "red",
      "model": "Model 3",
      "type": "EV",
      "maker": "Tesla",
      "range": 300
    },
    {
      "color": "blue",
      "model": "Model Y",
      "type": "EV",
      "maker": "Tesla",
      "range": 400
    }
  ],
  "Tesla Motors"
]

````

#### params

```json

{"inject":[{"propId":"maker","from":1,"index":0}]}

````

#### result

```json

[
  {
    "color": "red",
    "model": "Model 3",
    "type": "EV",
    "maker": "Tesla Motors",
    "range": 300
  },
  {
    "color": "blue",
    "model": "Model Y",
    "type": "EV",
    "maker": "Tesla",
    "range": 400
  }
]

````
#### inputs

```json

[
  [
    {
      "color": "red",
      "model": "Model 3",
      "type": "EV",
      "maker": "Tesla",
      "range": 300
    },
    {
      "color": "blue",
      "model": "Model Y",
      "type": "EV",
      "maker": "Tesla",
      "range": 400
    }
  ],
  "Tesla Motors"
]

````

#### params

```json

{"swap":{"maker":"model"}}

````

#### result

```json

[
  {
    "color": "red",
    "model": "Tesla",
    "type": "EV",
    "maker": "Model 3",
    "range": 300
  },
  {
    "color": "blue",
    "model": "Tesla",
    "type": "EV",
    "maker": "Model Y",
    "range": 400
  }
]

````
#### inputs

```json

[
  [
    {
      "color": "red",
      "model": "Model 3",
      "type": "EV",
      "maker": "Tesla",
      "range": 300
    },
    {
      "color": "blue",
      "model": "Model Y",
      "type": "EV",
      "maker": "Tesla",
      "range": 400
    }
  ],
  "Tesla Motors"
]

````

#### params

```json

{"inspect":[{"propId":"isTesla","equal":"Tesla Motors"},{"propId":"isGM","notEqual":"Tesla Motors","from":1}]}

````

#### result

```json

[
  {
    "color": "red",
    "model": "Model 3",
    "type": "EV",
    "maker": "Tesla",
    "range": 300,
    "isTesla": true,
    "isGM": false
  },
  {
    "color": "blue",
    "model": "Model Y",
    "type": "EV",
    "maker": "Tesla",
    "range": 400,
    "isTesla": true,
    "isGM": false
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
      "color",
      "model",
      "type",
      "maker",
      "range"
    ],
    "properties": {
      "color": {
        "type": "string",
        "minLength": 1
      },
      "model": {
        "type": "string",
        "minLength": 1
      },
      "type": {
        "type": "string",
        "minLength": 1
      },
      "maker": {
        "type": "string",
        "minLength": 1
      },
      "range": {
        "type": "number"
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
      "0"
    ],
    "properties": {
      "0": {
        "type": "array",
        "uniqueItems": true,
        "minItems": 1,
        "items": {
          "required": [
            "color",
            "model",
            "type",
            "maker",
            "range"
          ],
          "properties": {
            "color": {
              "type": "string",
              "minLength": 1
            },
            "model": {
              "type": "string",
              "minLength": 1
            },
            "type": {
              "type": "string",
              "minLength": 1
            },
            "maker": {
              "type": "string",
              "minLength": 1
            },
            "range": {
              "type": "number"
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
      "0"
    ],
    "properties": {
      "0": {
        "type": "array",
        "uniqueItems": true,
        "minItems": 1,
        "items": {
          "required": [
            "color",
            "model",
            "type",
            "maker",
            "range"
          ],
          "properties": {
            "color": {
              "type": "string",
              "minLength": 1
            },
            "model": {
              "type": "string",
              "minLength": 1
            },
            "type": {
              "type": "string",
              "minLength": 1
            },
            "maker": {
              "type": "string",
              "minLength": 1
            },
            "range": {
              "type": "number"
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
      "0"
    ],
    "properties": {
      "0": {
        "type": "array",
        "uniqueItems": true,
        "minItems": 1,
        "items": {
          "required": [
            "color",
            "model",
            "type",
            "maker",
            "range"
          ],
          "properties": {
            "color": {
              "type": "string",
              "minLength": 1
            },
            "model": {
              "type": "string",
              "minLength": 1
            },
            "type": {
              "type": "string",
              "minLength": 1
            },
            "maker": {
              "type": "string",
              "minLength": 1
            },
            "range": {
              "type": "number"
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
      "0"
    ],
    "properties": {
      "0": {
        "type": "array",
        "uniqueItems": true,
        "minItems": 1,
        "items": {
          "required": [
            "color",
            "model",
            "type",
            "maker",
            "range"
          ],
          "properties": {
            "color": {
              "type": "string",
              "minLength": 1
            },
            "model": {
              "type": "string",
              "minLength": 1
            },
            "type": {
              "type": "string",
              "minLength": 1
            },
            "maker": {
              "type": "string",
              "minLength": 1
            },
            "range": {
              "type": "number"
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
      "0"
    ],
    "properties": {
      "0": {
        "type": "array",
        "uniqueItems": true,
        "minItems": 1,
        "items": {
          "required": [
            "color",
            "model",
            "type",
            "maker",
            "range"
          ],
          "properties": {
            "color": {
              "type": "string",
              "minLength": 1
            },
            "model": {
              "type": "string",
              "minLength": 1
            },
            "type": {
              "type": "string",
              "minLength": 1
            },
            "maker": {
              "type": "string",
              "minLength": 1
            },
            "range": {
              "type": "number"
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
      "0"
    ],
    "properties": {
      "0": {
        "type": "array",
        "uniqueItems": true,
        "minItems": 1,
        "items": {
          "required": [
            "color",
            "model",
            "type",
            "maker",
            "range"
          ],
          "properties": {
            "color": {
              "type": "string",
              "minLength": 1
            },
            "model": {
              "type": "string",
              "minLength": 1
            },
            "type": {
              "type": "string",
              "minLength": 1
            },
            "maker": {
              "type": "string",
              "minLength": 1
            },
            "range": {
              "type": "number"
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
      "0"
    ],
    "properties": {
      "0": {
        "type": "array",
        "uniqueItems": true,
        "minItems": 1,
        "items": {
          "required": [
            "color",
            "model",
            "type",
            "maker",
            "range"
          ],
          "properties": {
            "color": {
              "type": "string",
              "minLength": 1
            },
            "model": {
              "type": "string",
              "minLength": 1
            },
            "type": {
              "type": "string",
              "minLength": 1
            },
            "maker": {
              "type": "string",
              "minLength": 1
            },
            "range": {
              "type": "number"
            }
          }
        }
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

