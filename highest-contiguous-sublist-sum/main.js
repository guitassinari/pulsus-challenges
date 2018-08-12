const NumberList = require('./models/NumberList')
const ContiguousSublistIterator = require('./models/ContiguousSublistIterator')
const Arguments = require('./helpers/arguments')

const arguments = Arguments.get()
const argumentNumbers = arguments.map(Number)

const numberList = new NumberList(argumentNumbers)
const contiguousSublistIterator = new ContiguousSublistIterator(numberList)

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

console.log(`\nThe contiguous sublist with highest begins at: ${highestSumSublistIndexes.start}`)
console.log(`\nAnd ends at: ${highestSumSublistIndexes.finish}`)
console.log(`\nIt's sum is: ${highestSum}`)




