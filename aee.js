Array.prototype.each = function (callback) {
  const len = this.length
  for (var index = 0; index < len; index += 1) {
    callback(this[index], index)
  }
  return this
}

Array.prototype.where = function (spec) {
  const len = this.length
  var result = []
  for (var i = 0; i < len; i += 1) {
    if (spec(this[i], i)) result.push(this[i])
  }
  return result
}

Array.prototype.any = function (spec) {
  const len = this.length
  var searchSpec = (typeof spec === 'function') ? spec : value => value === spec
  for (var i = 0; i < len; i++) {
    if (searchSpec(this[i], i)) return true
  }
  return false
}

Array.prototype.take = function (howMany, spec) {
  let result = []
  if (howMany <= 0) return result
  const len = this.length
  const searchSpec = (typeof spec === 'function') ? spec : () => true
  for (let i = 0; i < len; i += 1) {
    if (searchSpec(this[i], i)) result.push(this[i])
    if (result.length === howMany) break
  }
  return result
}
