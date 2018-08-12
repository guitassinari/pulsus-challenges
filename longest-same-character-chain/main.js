const Arguments = require('../helpers/arguments')
const mainFunction = require('./_main')

const arguments = Arguments.get()
const argumentWord = arguments[0]

const message = mainFunction(argumentWord)

console.log(message)
