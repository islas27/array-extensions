Array.prototype.each = function (callback) {
  const len = this.length
  for (var index = 0; index < len; index += 1) {
    callback(this[index], index)
  }
  return this
}

Array.prototype.where = function (spec) {
  const len = this.length
  var newArray = []
  for (var i = 0; i < len; i += 1) {
    if (spec(this[i], i)) newArray.push(this[i])
  }
  return newArray
}
