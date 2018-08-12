
function getArguments() {
  return process.argv.slice(2)
}

module.exports = {
  get: getArguments
}