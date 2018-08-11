function validNumberArray(numbersArray) {
  // NaN = Not a Number
  return Array.isArray(numbersArray) && numbersArray.every(elem => isNaN(elem) === false)
}

class NumberList {
  constructor(numbersArray) {
    if(validNumberArray(numbersArray) === false) {
      throw new Error('NumberList: The passed array is invalid')
    }

    this.numbers = numbersArray.map(Number)
  }

  sum() {
    return this.numbers.reduce((acc, number) => acc + number, 0)
  }

  getSubgroup(startAtIndex = 0, finishAtIndex = this.numbers.length) {
    const subgroupArray = this.numbers.slice(startAtIndex, finishAtIndex)
    return new NumberList(subgroupArray)
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
}

module.exports = NumberList