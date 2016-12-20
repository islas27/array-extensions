require('../aee.js')
const expect = require('chai').expect
const sinon = require('sinon')
const data = require('./data')

describe('#take', () => {
  it('returns zero elements when howMany =< 0', () => {
    const resultWhenNegative = data.children.take(-100)
    const resultWhenZero = data.children.take(0)
    expect(resultWhenNegative).to.be.empty
    expect(resultWhenZero).to.be.empty
  })

  it('returns howMany-elements when array.length > howMany and no spec defined', () => {
    const result = data.children.take(3)
    expect(result.length).to.equal(3)
    expect(result).to.eql(data.children.slice(0, 3))
  })

  it('returns howMany-elements when array.length > howMany and spec defined', () => {
    let callbackSpy = sinon.spy(child => child.sex === 'f')
    const result = data.children.take(3, callbackSpy)
    expect(callbackSpy.callCount).to.equal(4)
    expect(result).to.have.length(3)
    expect(result).to.eql(data.femaleChildren.slice(0, 3))
  })

  it('returns less than howMany-elements when spec() matching elements < than howMany', () => {
    let callbackSpy = sinon.spy(child => child.sex === 'm')
    const result = data.children.take(9, callbackSpy)
    expect(callbackSpy.callCount).to.equal(data.children.length)
    expect(result).to.have.length(4)
    expect(result).to.eql(data.maleChildren)
  })

  it('returns the same array when howMany >= array.length and no spec defined', () => {
    const resultWhenSameSize = data.children.take(9)
    expect(resultWhenSameSize).to.have.length(data.children.length)
    expect(resultWhenSameSize).to.eql(data.children)
    const resultWhenBigger = data.children.take(100)
    expect(resultWhenBigger).to.have.length(data.children.length)
    expect(resultWhenBigger).to.eql(data.children)
  })
})
