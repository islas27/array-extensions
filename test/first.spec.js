require('../aee.js')
const expect = require('chai').expect
const sinon = require('sinon')
const data = require('./data')

describe('#first', () => {
  it('returns first element when no spec () defined', () => {
    expect(data.letters.first()).to.be.equal('a')
    expect(data.peopleAge.first()).to.be.equal(19)
  })

  it('returns first element that matches spec()', () => {
    let result = data.devs
      .first(dev => dev.age > 25 && dev.age < 28)
    expect(result.name).to.equal('pablo')
    result = data.devs
      .first(dev => dev.skills.any('Drink tea'))
    expect(result.name).to.equal('juan')
  })

  it('traverses only the necessary elements until it gets a match', () => {
    let specSpy = sinon.spy(dev => dev.age < 24)
    let result = data.devs.first(specSpy)
    expect(specSpy.callCount).to.equal(2)
    expect(result.name).to.equal('juan')
    specSpy = sinon.spy(person => person.name.length === 5 && person.age < 18)
    result = data.people.first(specSpy)
    expect(specSpy.callCount).to.equal(3)
    expect(result.name).to.equal('Pablo')
  })

  it('is capable of using index in spec()', () => {
    let specSpy = sinon.spy((people, index) => index % 2 === 1)
    let result = data.people.first(specSpy)
    expect(result).to.eql(data.people[1])
    specSpy = sinon.spy((dev, index) => index >= 3)
    result = data.devs.first(specSpy)
    expect(result).to.eql(data.devs[3])
    specSpy = sinon.spy((letter, index) => index === 0)
    result = data.letters.first(specSpy)
    expect(result).to.eql(data.letters[0])
  })

  it('return null when array is empty', () => {
    expect([].first()).to.be.null
  })

  it('returns null when no element matches spec()', () => {
    const result = data.devs.first(dev => dev.age > 30)
    expect(result).to.be.null
  })
})
