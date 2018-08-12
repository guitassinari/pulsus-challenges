const Word = require('../models/Word')
const expect = require('expect')

describe('Number List Sublist Iterator', () => {
  const originalString = 'Guiiiilheerrme'
  let word
  beforeEach(() => {
    word = new Word(originalString)
  })

  describe('#getRepeatedCharChains', () => {
    it('returns all repeated characters chains in the string', () => {
      expect(word.getRepeatedCharChains()).toEqual(['iiii', 'ee', 'rr'])
    })
  })

  describe('#getLongestRepeatedCharChain', () => {
    it('returns the longest repeated character chain in the string', () => {
      expect(word.getLongestRepeatedCharChain()).toEqual('iiii')
    })

    describe('when there are no repeated character chains', () => {
      it('returns null', () => {
        word = new Word('')
        expect(word.getLongestRepeatedCharChain()).toEqual(null)
      })
    })
  })
})