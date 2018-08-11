const NumberList = require('./NumberList')

class NumberListContiguousSublistIterator {
  constructor(numberList) {
    if(numberList instanceof NumberList === false) {
      throw new Error('NumberListContiguousSublistIterator: the received parameter is not a NumberList')
    }

    this.numberList = numberList
    this.controls = {
      startIndex: 0,
      finishIndex: 0,
    }
  }

  next() {
    this._updateControlsForNextSubgroup()
    if(this._iteratedAllSubgroups()) {
      return null
    }
    return this.numberList.getSubgroup(this.controls.startIndex, this.controls.finishIndex)
  }

  _updateControlsForNextSubgroup() {
    if (this._finishIndexReachedEndOfList()) {
      this.controls.startIndex += 1
      this.controls.finishIndex = this.controls.startIndex + 1
    } else {
      this.controls.finishIndex += 1
    }
  }

  _finishIndexReachedEndOfList() {
    return this.controls.finishIndex === this.numberList.length()
  }

  _iteratedAllSubgroups() {
    return this.controls.startIndex === this.numberList.length()
  }
}

module.exports = NumberListContiguousSublistIterator