const NumberList = require('./models/NumberList')

// Main function has been separated into this file for testing purposes
function findHighestSumSublistAndDisplayResult (numbers) {
  if(!numbers || numbers.length === 0) {
    throw new Error('You mast pass a list of numbers as argument.')
  }

  const argumentIsNotANumber = numbers.find(isNaN)
  if(argumentIsNotANumber) {
    throw new Error(`'${argumentIsNotANumber}' is not a number.`)
  }

  const argumentNumbers = numbers.map(Number)

  const numberList = new NumberList(argumentNumbers)
  const highestSumSublistIndexes = numberList.getHighestSumSublistIndexes()

  return `The contiguous sublist with highest begins at ${highestSumSublistIndexes.start} and ends at ${highestSumSublistIndexes.finish}`
}

module.exports = findHighestSumSublistAndDisplayResult