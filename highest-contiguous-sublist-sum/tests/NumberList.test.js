const NumberList = require('../models/NumberList')

const expect = require('expect')

describe('Number List Sublist Iterator', () => {
  const originalNumbersArray = [1, 2, 3, 6, 8, 9]
  let numberList
  beforeEach(() => {
    numberList = new NumberList(originalNumbersArray)
  })


  describe('#sum', () => {
    it('sums all numbers in the original array', () => {
      expect(numberList.sum()).toEqual(originalNumbersArray.reduce((acc, num) => acc + num), 0)
    })
  })

  describe('#length', () => {
    it('returns the length of the original array', () => {
      expect(numberList.length()).toEqual(originalNumbersArray.length)
    })
  })

  describe('#lastIndex', () => {
    it('returns the last possible index for iteration', () => {
      expect(numberList.lastIndex()).toEqual(originalNumbersArray.length - 1)
    })
  })

  describe('#toArray', () => {
    it('returns a copy the original array', () => {
      expect(numberList.toArray()).toEqual(originalNumbersArray)
    })
  })

  describe('#getSubgroup', () => {
    describe('with startIndex and finishIndex received', () => {
      it('returns a NumberList of the subarray of the original array defined by startIndex and finishIndex', () => {
        const startIndex = 2, finishIndex = 4
        expect(numberList.getSubgroup(2, 4).toArray()).toEqual(originalNumbersArray.slice(startIndex, finishIndex))
      })
    })

    describe('whithout any parameter received', () => {
      it('returns a NumberList of a copy of the original array', () => {
        const subgroup = numberList.getSubgroup()
        expect(subgroup).toBeInstanceOf(NumberList)
        expect(subgroup.toArray()).toEqual(originalNumbersArray)
      })
    })
  })
})