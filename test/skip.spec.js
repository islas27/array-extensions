require('../aee.js')
const expect = require('chai').expect
const data = require('./data')

describe('#skip', () => {
  it('returns the correct array', () => {
    let result = data.letters.skip(2)
    expect(result).to.have.length(1)
    expect(result).to.eql(['c'])

    result = data.people.skip(3)
    expect(result).to.have.length(3)
    expect(result).to.eql(data.people.slice(-3))
  })

  it('returns an empty array when howMany > array.length', () => {
    expect(data.people.skip(100)).to.be.empty
    expect(data.people.skip(6)).to.be.empty
  })

  it('returns the same array if howMany <= 0', () => {
    expect(data.letters.skip(0)).to.eql(data.letters)
  })
})
