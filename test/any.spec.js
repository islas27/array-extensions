require('../aee.js')
const expect = require('chai').expect
const sinon = require('sinon')
const data = require('./data')

describe('#any', () => {
  it('checks if any() is true when spec is a function and a match was found', () => {
    var specSpy = sinon.spy(element => element.age === 20)
    expect(data.people.any(specSpy)).to.equal(true)
    expect(specSpy.callCount).to.equal(4)
  })

  it('checks if any() is false when spec is a function and no matches found', () => {
    var specSpy = sinon.spy(element => element.age === 80)
    expect(data.people.any(specSpy)).to.equal(false)
    expect(specSpy.callCount).to.equal(6)
  })

  it('checks if any() is true when spec is a value and it matched something', () => {
    expect(data.letters.any('b')).to.equal(true)
  })

  it('checks if any() is false when spec is a value and no matches found', () => {
    expect(data.letters.any('z')).to.equal(false)
  })
})
