const SublistIterator = require('../models/ContiguousSublistIterator')
const NumberList = require('../models/NumberList')

const expect = require('expect')

describe('Number List Sublist Iterator', () => {
  const originalNumbersArray = [1, 2, 3]
  const originalList = new NumberList(originalNumbersArray)
  let iterator

  beforeEach(() => {
    iterator = new SublistIterator(originalList)
  })

  describe('#next', () => {
    it('returns all contiguous sublists of the original list and returns null after that', () => {
      expect(iterator.next().toArray()).toEqual(originalNumbersArray.slice(0,2))
      expect(iterator.next().toArray()).toEqual(originalNumbersArray.slice(0,3))
      expect(iterator.next().toArray()).toEqual(originalNumbersArray.slice(0,4))
      expect(iterator.next().toArray()).toEqual(originalNumbersArray.slice(1,3))
      expect(iterator.next().toArray()).toEqual(originalNumbersArray.slice(1,4))
      expect(iterator.next().toArray()).toEqual(originalNumbersArray.slice(2,5))
      expect(iterator.next()).toEqual(null)
      expect(iterator.next()).toEqual(null)
    })
  })
})