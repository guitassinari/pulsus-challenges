const main = require('../_main')
const expect = require('expect')

describe('Highest contiguous sublist sum', () => {
  const argumentNumbers = [1, 2, 3, -10, 10, 20, 30]
  describe('when no arguments are passed', () => {
    it('throws an error', () => {
      expect(() => main()).toThrow()
    })
  })

  describe('when empty arguments are passed', () => {
    it('throws an error', () => {
      expect(() => main([])).toThrow()
    })
  })

  describe('when any passed argument is not a number', () => {
    it('throws an error', () => {
      expect(() => main(['i am not a number'])).toThrow()
    })
  })

  describe('when all arguments are possible numbers (String or Number)', () => {
    it('returns a result message containing the indexes of the highest sum sublist', () => {
      expect(main(argumentNumbers)).toEqual(`The contiguous sublist with highest begins at 4 and ends at 6`)
    })
  })
})