const repeatedCharsRegex = new RegExp(/(.)\1+/g)

class Word {
  constructor(wordString) {
    this.string = wordString
  }

  getRepeatedCharChains() {
    let allMatches = []
    let matches
    while((matches = repeatedCharsRegex.exec(this.string)) != null) {
      allMatches = allMatches.concat(matches)
    }
    return allMatches.filter(match => match.length > 1)
  }

  getLongestRepeatedCharChain() {
    const repeatedCharChains = this.getRepeatedCharChains()
    if(repeatedCharChains.length === 0) {
      return null
    }

    return repeatedCharChains.reduce((longest, curr) => {
      if(curr.length > longest.length) {
        return curr
      }
      return longest
    }, '')
  }
}

module.exports = Word