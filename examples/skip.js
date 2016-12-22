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

letters.skip(2).each(letter => console.log(letter))
// Output:
// c

console.log(people.skip(3).select(person => person.age))
// Output:
// [20, 18, 24]
