Array.prototype.each = function (callback) {
  const len = this.length
  for (let index = 0; index < len; index += 1) {
    callback(this[index], index)
  }
  return this
}

Array.prototype.where = function (spec) {
  const len = this.length
  let result = []
  for (let i = 0; i < len; i += 1) {
    if (spec(this[i], i)) result.push(this[i])
  }
  return result
}

Array.prototype.any = function (spec) {
  const len = this.length
  let searchSpec = (typeof spec === 'function') ? spec : value => value === spec
  for (let i = 0; i < len; i += 1) {
    if (searchSpec(this[i], i)) return true
  }
  return false
}

Array.prototype.select = function (spec) {
  const len = this.length
  let result = []
  if (typeof spec !== 'function') return this
  for (let i = 0; i < len; i += 1) {
    result.push(spec(this[i]))
  }
  return result
}
