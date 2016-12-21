require('../aee.js')
const letters = ['a', 'b', 'c']
const people = [
  { 'name': 'Pedro', 'age': 19 },
  { 'name': 'Juan', 'age': 15 },
  { 'name': 'Pablo', 'age': 16 },
  { 'name': 'Pancho', 'age': 20 },
  { 'name': 'Topo', 'age': 18 },
  { 'name': 'Jonathan', 'age': 24 }
]

console.log(letters.first())
// Output:
// a

let result = people.first(dev => dev.age === 16)
console.log(result.name)
// Output:
// Pablo

result = people.first((dev, index) => dev.age < 20 && dev.age > 16 && index > 3)
console.log(result.name)
// Output:
// Topo
