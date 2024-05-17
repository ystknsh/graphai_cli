## dataObjectMergeTemplateAgent

### Description

Merge object

### Samples

#### inputs

```json

[
          {
                    "content1": "hello"
          },
          {
                    "content2": "test"
          }
]

````

#### params

```json

{}

````

#### result

```json

{"content1":"hello","content2":"test"}

````
#### inputs

```json

[
          {
                    "content1": "hello"
          }
]

````

#### params

```json

{}

````

#### result

```json

{"content1":"hello"}

````
#### inputs

```json

[
          {
                    "content": "hello1"
          },
          {
                    "content": "hello2"
          }
]

````

#### params

```json

{}

````

#### result

```json

{"content":"hello2"}

````
#### inputs

```json

[
          {
                    "a": 1,
                    "b": 1
          },
          {
                    "a": 2,
                    "b": 2
          },
          {
                    "a": 3,
                    "b": 0,
                    "c": 5
          }
]

````

#### params

```json

{}

````

#### result

```json

{"a":3,"b":0,"c":5}

````
#### inputs

```json

[
          {
                    "a": {
                              "b": {
                                        "c": {
                                                  "d": "e"
                                        }
                              }
                    }
          },
          {
                    "b": {
                              "c": {
                                        "d": {
                                                  "e": "f"
                                        }
                              }
                    }
          },
          {
                    "b": {
                              "d": {
                                        "e": {
                                                  "f": "g"
                                        }
                              }
                    }
          }
]

````

#### params

```json

{}

````

#### result

```json

{"a":{"b":{"c":{"d":"e"}}},"b":{"c":{"d":{"e":"f"}},"d":{"e":{"f":"g"}}}}

````

### Author

Satoshi Nakajima

### Repository

https://github.com/receptron/graphai


### License

MIT
