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

console.log(letters.last())
// Output:
// c

console.log(people.last(person => person.age < 24).name)
// Output:
// Topo

console.log(
  people
    .last((person, index) => person.name.length === 4 && index % 2 === 1)
    .name
)
// Output:
// Juan
