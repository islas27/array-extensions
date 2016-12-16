require('../aee.js')
const expect = require('chai').expect
const sinon = require('sinon')
const data = require('./data')

describe('#any', () => {
  it('checks if any() is true when spec is a function and a match was found', () => {
    function spec (element, index) {
      return element.age === 24
    }
    var specSpy = sinon.spy(spec)
    expect(data.people.any(specSpy)).to.equal(true)
    expect(specSpy.callCount).to.equal(6)
  })

  it('checks if any() is false when spec is a function and no matches found', () => {
    function spec (element, index) {
      return element.age === 80
    }
    var specSpy = sinon.spy(spec)
    expect(data.people.any(specSpy)).to.equal(false)
    expect(specSpy.callCount).to.equal(6)
  })

  it('checks if any() is true when spec is a value and it matched something', () => {
    const spec = 'b'
    expect(data.letters.any(spec)).to.equal(true)
  })

  it('checks if any() is false when spec is a value and no matches found', () => {
    const spec = 'z'
    expect(data.letters.any(spec)).to.equal(false)
  })
})
