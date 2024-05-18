## sortByValuesAgent

### Description

sortByValues Agent

### Samples

#### inputs

```json

[
  [
    "banana",
    "orange",
    "lemon",
    "apple"
  ],
  [
    2,
    5,
    6,
    4
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
  "lemon",
  "orange",
  "apple",
  "banana"
]

````
#### inputs

```json

[
  [
    "banana",
    "orange",
    "lemon",
    "apple"
  ],
  [
    2,
    5,
    6,
    4
  ]
]

````

#### params

```json

{"assendant":true}

````

#### result

```json

[
  "banana",
  "apple",
  "orange",
  "lemon"
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
      "0",
      "1"
    ],
    "properties": {
      "0": {
        "type": "array",
        "uniqueItems": true,
        "items": {
          "required": [],
          "properties": {}
        }
      },
      "1": {
        "type": "array",
        "uniqueItems": true,
        "items": {
          "required": [],
          "properties": {}
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
        "items": {
          "required": [],
          "properties": {}
        }
      },
      "1": {
        "type": "array",
        "uniqueItems": true,
        "items": {
          "required": [],
          "properties": {}
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

