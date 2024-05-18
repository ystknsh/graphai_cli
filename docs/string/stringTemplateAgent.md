## stringTemplateAgent

### Description

Template agent

### Samples

#### inputs

```json

[
  "hello",
  "test"
]

````

#### params

```json

{"template":"${0}: ${1}"}

````

#### result

```json

"hello: test"

````
#### inputs

```json

[
  "hello",
  "test"
]

````

#### params

```json

{"template":["${0}: ${1}","${1}: ${0}"]}

````

#### result

```json

[
  "hello: test",
  "test: hello"
]

````
#### inputs

```json

[
  "hello",
  "test"
]

````

#### params

```json

{"template":{"apple":"${0}","lemon":"${1}"}}

````

#### result

```json

{
  "apple": "hello",
  "lemon": "test"
}

````
#### inputs

```json

[
  "hello",
  "test"
]

````

#### params

```json

{"template":[{"apple":"${0}","lemon":"${1}"}]}

````

#### result

```json

[
  {
    "apple": "hello",
    "lemon": "test"
  }
]

````
#### inputs

```json

[
  "hello",
  "test"
]

````

#### params

```json

{"template":{"apple":"${0}","lemon":["${1}"]}}

````

#### result

```json

{
  "apple": "hello",
  "lemon": [
    "test"
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

Satoshi Nakajima

### Repository

https://github.com/receptron/graphai


### License

MIT

