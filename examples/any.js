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

console.log(people.any(person => person.name === 'Topo'))
// Output:
// true

function spec (person) {
  return person.age === 80
}

console.log(people.any(spec))
// Output:
// false

console.log(letters.any('b'))
// Output:
// true

console.log(letters.any('z'))
// Output:
// false
