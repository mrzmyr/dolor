Dolor [![Build Status](https://travis-ci.org/mrzmyr/dolor.svg?branch=master)](https://travis-ci.org/mrzmyr/dolor)
=========

NodeJS version of [the Frank project](https://github.com/blahed/frank) as a wonderful set of helpers for generating random text content like lorem ipsum.

### Installation

```bash
npm install dolor --save
```

### Usage

```js
var dolor = require('dolor');

dolor.sentence()      # returns a single sentence
dolor.sentences(3)    # returns 3 individual sentence

dolor.word()
dolor.words(5)        # returns 5 individual words

dolor.paragraph()
dolor.paragraphs(10)  # returns 10 paragraphs 

dolor.date()          # returns random instance of Date()

dolor.tweet()

dolor.name()          # returns first and last name
dolor.firstName()
dolor.lastName()
dolor.email()

dolor.country()       # example: { code: 'NZ', name: 'New Zealand' }
```
