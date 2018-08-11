const NumberList = require('./models/NumberList')
const ContiguousSublistIterator = require('./models/NumberListContiguousSublistIterator')

const arguments = process.argv
const numbersAsStrings = arguments.slice(2)
const numbers = numbersAsStrings.map(Number)

const numberList = new NumberList(numbers)
const sublistIterator = new ContiguousSublistIterator(numberList)

let currentSublist = sublistIterator.next()
let highestSumSublist = currentSublist
let highestSum = currentSublist.sum()

while (currentSublist !== null) {
  if (currentSublist.sum() > highestSum) {
    highestSumSublist = currentSublist
    highestSum = currentSublist.sum()
  }

  currentSublist = sublistIterator.next()
}

console.log('\nThe contiguous sublist with highest sum is:')
console.log(highestSumSublist.toArray())
console.log('\nWhich sum is:')
console.log(highestSum)






