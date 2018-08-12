const Word = require('./models/Word')

function getResultMessage(wordString) {
  if(!wordString) {
    throw new Error('You mast pass a string as argument')
  }

  if(typeof wordString !== 'string') {
    throw new Error('Argument must be a string')
  }

  const word = new Word(wordString)
  const longestRepeatedCharChain = word.getLongestRepeatedCharChain()
  return `The longest repeated char chain is: ${longestRepeatedCharChain}`
}

module.exports = getResultMessage
