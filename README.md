Dolor
=========

NodeJS version of [the Frank project](https://github.com/blahed/frank) as a wonderful set of helpers for generating random text content like lorem ipsum.

### Installation

  npm install lorem --save

### Usage

  var lorem = require('lorem');

  lorem.sentence      # returns a single sentence
  lorem.words 5       # returns 5 individual words
  lorem.word
  lorem.paragraphs 10 # returns 10 paragraphs 
  lorem.paragraph
  lorem.date          # accepts a strftime format argument
  lorem.name
  lorem.first_name
  lorem.last_name
  lorem.email

### Tests

  npm test