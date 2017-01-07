// require(mocha);
import {expect} from 'chai'
import scoreWord from '../lib/index.js'

describe('countword', () => {
  it('should scoreWord', () => {
    expect(scoreWord('hello')).to.equal(8);
  });

  it('should scoreWord', () => {
    expect(scoreWord('')).to.equal(0);
  });

  it('should remove whitespace', () => {
    expect(scoreWord(' hello ')).to.equal(8);
  });

  it('should multiply the value of the word', () => {
    expect(scoreWord('hello', 2)).to.equal(16);
  });

})

// scoreWord() takes a word and returns the total score of the word.
// scoreWord('hello') should return 8.
// An empty string or any non-string (e.g. scoreWord('') or scoreWord(null)) should return 0.
// The function should strip any whitespace before or after the word. scoreWorld(' hello ') should be the same as scoreWord('hello').
// Score word should take an optional second argument for the word multiplier. scoreWord('hello', 2) should return 16.
