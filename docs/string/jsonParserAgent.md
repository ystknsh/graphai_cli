## jsonParserAgent

### Description

Template agent

### Samples

#### inputs

```json

[
  {
    "apple": "red",
    "lemon": "yellow"
  }
]

````

#### params

```json

{"stringify":true}

````

#### result

```json

"{\n  \"apple\": \"red\",\n  \"lemon\": \"yellow\"\n}"

````
#### inputs

```json

[
  "{\n  \"apple\": \"red\",\n  \"lemon\": \"yellow\"\n}"
]

````

#### params

```json

{}

````

#### result

```json

{
  "apple": "red",
  "lemon": "yellow"
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