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

console.log(people.index(person => person.name.length === 6))
// Output:
// 3

console.log(letter.index('b'))
// Output:
// 1

console.log(people.index({ 'name': 'Juan', 'age': 15 }))
// Output:
// 1
