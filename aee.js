Array.prototype.each = function (callback) {
  const len = this.length
  for (var index = 0; index < len; index += 1) {
    callback(this[index], index)
  }
  return this
}
