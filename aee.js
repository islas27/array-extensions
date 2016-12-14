Array.prototype.each = function (callback) {
  for (var index = 0; index < this.length; index += 1) {
    callback(this[index], index)
  }
  return this
}
