var assert = require('assert');
var dolor = require('../index');

console.log(dolor.word().split(' ').length);

describe('dolor', function () {
  it('should return a word', function () {
    assert.equal(dolor.word().split(' ').length, 1);
  });

  it('should return 3 words', function () {
    assert.equal(dolor.words(3).split(' ').length, 3);
  });

  it('should return a sentence', function () {
    var s = dolor.sentence();
    assert.equal(s.split('. ').length, 1);
    assert.equal(s[0], s[0].toUpperCase());
  });

  it('should return 5 sentences', function () {
    assert.equal(dolor.sentences(3).split('. ').length, 3);
  });

  it('should return a tweet', function () {
    assert.equal(dolor.tweet().split(' ').length < 140, true);
  });

  it('should return a date', function () {
    assert.equal(dolor.date() instanceof Date, true);
  });

  it('should return a name', function () {
    assert.equal(dolor.name().split(' ').length, 2);
  });

  it('should return email address', function () {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    assert.equal(re.test(dolor.email()), true);
  });

  it('should return a country', function () {
    var country = dolor.country();

    assert.equal(country.code.length, 2);
    assert.equal(country.name.length > 0, true);
  });
});