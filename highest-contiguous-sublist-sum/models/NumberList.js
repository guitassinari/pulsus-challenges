const ContiguousSublistIterator = require('./ContiguousSublistIterator')

function validNumberArray(numbersArray) {
  // NaN = Not a Number
  return Array.isArray(numbersArray) && numbersArray.every(elem => isNaN(elem) === false)
}

class NumberList {
  constructor(numbersArray) {
    this.numbers = numbersArray.map(Number)
  }

  sum() {
    return this.numbers.reduce((acc, number) => acc + number, 0)
  }

  getSublist(startAtIndex = 0, finishAtIndex = this.numbers.length) {
    const sublist = this.numbers.slice(startAtIndex, finishAtIndex + 1)
    return new NumberList(sublist)
  }

  length() {
    return this.numbers.length
  }

  lastIndex() {
    return this.length() - 1
  }

  toArray() {
    return [...this.numbers]
  }

  getHighestSumSublistIndexes() {
    const contiguousSublistIterator = new ContiguousSublistIterator(this)

    let currentSublist = contiguousSublistIterator.next()
    let highestSumSublistIndexes = contiguousSublistIterator.getCurrentIndexes()
    let highestSum = currentSublist.sum()

    while (currentSublist !== null) {
      if (currentSublist.sum() > highestSum) {
        highestSumSublistIndexes = contiguousSublistIterator.getCurrentIndexes()
        highestSum = currentSublist.sum()
      }

      currentSublist = contiguousSublistIterator.next()
    }

    return highestSumSublistIndexes
  }
}

module.exports = NumberList