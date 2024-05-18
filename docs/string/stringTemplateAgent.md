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

### Author

Satoshi Nakajima

### Repository

https://github.com/receptron/graphai


### License

MIT


### Link

{link}