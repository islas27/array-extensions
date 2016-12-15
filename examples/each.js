var outputAge = []
const people = [
  {name: 'Pedro', age: 19},
  {name: 'Juan', age: 15},
  {name: 'Pablo', age: 16},
  {name: 'Pancho', age: 20},
  {name: 'Topo', age: 18},
  {name: 'Jonathan', age: 24}
]

// Example 1
people.each(function (element) {
  outputAge.push(element.age)
})
console.log(outputAge)
// Console output:
// [19, 15, 16, 20, 18, 24]

// Example 2
people.each(function (element, index) {
  console.log(element.name + ' is student #' + (index + 1))
})
// Console output:
// Pedro is student #1
// ...

// Example 3

var myFunc = function (element, i) {
  console.log((i + 1) + ': ' + element.name)
}

people.each(myFunc(e, i))
// Console output:
// 1: Pedro
// ...
