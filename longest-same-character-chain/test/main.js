const main = require('../_main')
const expect = require('expect')

describe('Longest repeated character chain', () => {
  describe('when no argument is passed', () => {
    it('throws an error', () => {
      expect(() => main()).toThrow()
    })
  })

  describe('when argument is not a string', () => {
    it('throws and error', () => {
      expect(() => main(2)).toThrow()
    })
  })

  describe('when argument is a string', () => {
    it('returns a message containing the longest repeated characte chain in the string', () => {
      expect(main('guiiilheeermeeeee')).toEqual(`The longest repeated char chain is: eeeee`)
    })
  })
})