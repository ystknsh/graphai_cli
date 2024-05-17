## fetchAgent

### Description

Retrieves JSON data from the specified URL

### Samples

#### inputs

```json

[
  "https://www.google.com",
  {
    "foo": "bar"
  },
  {
    "x-myHeader": "secret"
  }
]

````

#### params

```json

{"debug":true}

````

#### result

```json

{
  "method": "GET",
  "url": "https://www.google.com/?foo=bar",
  "headers": {
    "x-myHeader": "secret"
  }
}

````
#### inputs

```json

[
  "https://www.google.com",
  null,
  null,
  {
    "foo": "bar"
  }
]

````

#### params

```json

{"debug":true}

````

#### result

```json

{
  "method": "POST",
  "url": "https://www.google.com/",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": "{\"foo\":\"bar\"}"
}

````

### Author

Receptron

### Repository

https://github.com/receptron/graphai


### License

MIT

