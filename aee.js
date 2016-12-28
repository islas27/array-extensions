Array.prototype.each = function (callback) {
  const len = this.length
  for (let i = 0; i < len; i += 1) {
    callback(this[i], i)
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
    result.push(spec(this[i], i))
  }
  return result
}

Array.prototype.take = function (howMany, spec) {
  const result = []
  if (howMany <= 0) return result
  if (typeof spec !== 'function') return this.slice(0, howMany)
  const len = this.length
  for (let i = 0; i < len; i += 1) {
    if (spec(this[i], i)) result.push(this[i])
    if (result.length === howMany) break
  }
  return result
}

Array.prototype.skip = function (howMany) {
  const len = this.length
  if (howMany <= 0) return this
  if (howMany >= len) return []
  return this.slice(howMany - len)
}

Array.prototype.first = function (spec) {
  const len = this.length
  if (len === 0) return null
  if (typeof spec !== 'function') return this[0]
  for (let i = 0; i < len; i += 1) {
    if (spec(this[i], i)) return this[i]
  }
  return null
}

Array.prototype.last = function (spec) {
  const len = this.length
  if (len === 0) return null
  if (typeof spec !== 'function') return this[len - 1]
  for (let i = len - 1; i >= 0; i -= 1) {
    if (spec(this[i], i)) return this[i]
  }
  return null
}

Array.prototype.count = function (spec) {
  const len = this.length
  let result = 0
  if (typeof spec !== 'function') return len
  for (let i = 0; i < len; i += 1) {
    if (spec(this[i], i)) result += 1
  }
  return result
}

Array.prototype.pluck = function (property) {
  if (property === undefined) throw new ReferenceError('property is undefined')
  const len = this.length
  let result = []
  for (let i = 0; i < len; i += 1) {
    let value = this[i]
    result.push(value && value[property] ? value[property] : null)
  }
  return result
}

Array.prototype.sum = function (spec) {
  const len = this.length
  let sumSpec = (typeof spec === 'function') ? spec : value => value
  let result = (!isNaN(sumSpec(this[0], 0)) || this[0] === undefined) ? 0 : ''
  for (let i = 0; i < len; i += 1) {
    result += sumSpec(this[i], i)
  }
  return result
}

Array.prototype.max = function (comparer) {
  const len = this.length
  if (len === 0) return null
  let result = this[0]
  let comparerSpec = comparer
  if (typeof comparerSpec !== 'function') {
    if (typeof result === 'object') {
      throw new ReferenceError('comparer undefined')
    }
    comparerSpec = !isNaN(this[0])
    ? (a, b) => a - b
    : (a, b) => a.localeCompare(b)
  }
  for (let i = 1; i < len; i += 1) {
    if (comparerSpec(result, this[i]) < 0) result = this[i]
  }
  return result
}

Array.prototype.min = function (comparer) {
  const len = this.length
  if (len === 0) return null
  let result = this[0]
  let comparerSpec = comparer
  if (typeof comparerSpec !== 'function') {
    if (typeof result === 'object') {
      throw new ReferenceError('comparer undefined')
    }
    comparerSpec = !isNaN(this[0])
    ? (a, b) => a - b
    : (a, b) => a.localeCompare(b)
  }
  for (let i = 1; i < len; i += 1) {
    if (comparerSpec(result, this[i]) > 0) result = this[i]
  }
  return result
}

Array.prototype.flatten = function () {
  let copy = this.slice()
  let len = copy.length
  for (let i = 0; i < len; i += 1) {
    if (Array.isArray(copy[i])) {
      len += copy[i].length - 1
      copy.splice(i, 1, ...copy[i])
    }
  }
  return copy
}
