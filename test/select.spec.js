require('../aee.js')
const expect = require('chai').expect
const sinon = require('sinon')
const data = require('./data')

describe('#select', () => {
  it('checks if select() returns an array according to spec()', () => {
    const list = data.devs.select((dev) => dev.name)
    expect(list).to.eql(['pedro', 'juan', 'pablo', 'Jonathan'])
  })

  it('checks if the callback count matches the number of elements', () => {
    let callbackSpy = sinon.spy((dev) => dev.skils)
    const result = data.devs.where((dev) => dev.age > 25).select(callbackSpy)
    expect(result.length).to.equal(2)
    expect(callbackSpy.callCount).to.equal(2)
  })

  it('checks if correct behaviour when spec is not a function', () => {
    const result = data.devs.select('a')
    expect(result).to.eql(data.devs)
  })

  it('checks behaviour when spec selects an inexisting property', () => {
    const result = data.devs.select((dev) => dev.client)
    expect(result).to.eql([ undefined, undefined, undefined, undefined ])
  })
})
