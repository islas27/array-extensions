Array.prototype.each = function (callback) {
  const len = this.length
  for (var index = 0; index < len; index += 1) {
    callback(this[index], index)
  }
  return this
}

Array.prototype.any = function (spec) {
  const len = this.length
  if (typeof spec !== 'function') {
    searchedValue = spec
    spec = function (element, index) {
      return element === searchedValue
    }
  }
  for (var i = 0; i < len; i++) {
    if (spec(this[i], i)) return true
  }
  return false
}
