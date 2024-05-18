## stringSplitterAgent

### Description

This agent strip one long string into chunks using following parameters

### Samples

#### inputs

```json

[
  "Here's to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes ... the ones who see things differently -- they're not fond of rules, and they have no respect for the status quo. ... You can quote them, disagree with them, glorify or vilify them, but the only thing you can't do is ignore them because they change things. ... They push the human race forward, and while some may see them as the crazy ones, we see genius, because the people who are crazy enough to think that they can change the world, are the ones who do."
]

````

#### params

```json

{"chunkSize":64}

````

#### result

```json

{
  "contents": [
    "Here's to the crazy ones, the misfits, the rebels, the troublema",
    "roublemakers, the round pegs in the square holes ... the ones wh",
    " ones who see things differently -- they're not fond of rules, a",
    "rules, and they have no respect for the status quo. ... You can ",
    "You can quote them, disagree with them, glorify or vilify them, ",
    "y them, but the only thing you can't do is ignore them because t",
    "ecause they change things. ... They push the human race forward,",
    "forward, and while some may see them as the crazy ones, we see g",
    "we see genius, because the people who are crazy enough to think ",
    "o think that they can change the world, are the ones who do.",
    " do."
  ],
  "count": 11,
  "chunkSize": 64,
  "overlap": 8
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