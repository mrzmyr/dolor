var assert = require('assert');
var lorem = require('../index');

console.log(lorem.word().split(' ').length);

describe('lorem', function () {
  it('should return a word', function () {
    assert.equal(lorem.word().split(' ').length, 1);
  });

  it('should return 3 words', function () {
    assert.equal(lorem.words(3).split(' ').length, 3);
  });

  it('should return a sentence', function () {
    var s = lorem.sentence();
    assert.equal(s.split('. ').length, 1);
    assert.equal(s[0], s[0].toUpperCase());
  });

  it('should return 5 sentences', function () {
    assert.equal(lorem.sentences(3).split('. ').length, 3);
  });

  it('should return a tweet', function () {
    assert.equal(lorem.tweet().split(' ').length < 140, true);
  });

  it('should return a name', function () {
    assert.equal(lorem.name().split(' ').length, 2);
  });

  it('should return email address', function () {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    assert.equal(re.test(lorem.email()), true);
  });
});