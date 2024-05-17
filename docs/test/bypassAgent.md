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

### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT

