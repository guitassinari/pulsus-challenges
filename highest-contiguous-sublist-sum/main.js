const Arguments = require('../helpers/arguments')

//Main function has been separated for testing purposes
const mainFunction = require('./_main')

const arguments = Arguments.get()

//Executes application
const message = mainFunction(arguments)
console.log(message)


