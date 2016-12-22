require('../aee.js')
let children = [
  {'name': 'ana', 'sex': 'f'},
  {'name': 'fosto', 'sex': 'm'},
  {'name': 'jane', 'sex': 'f'},
  {'name': 'yadi', 'sex': 'f'},
  {'name': 'lili', 'sex': 'f'},
  {'name': 'bany', 'sex': 'm'},
  {'name': 'rod', 'sex': 'm'},
  {'name': 'nuria', 'sex': 'f'},
  {'name': 'martin', 'sex': 'm'}
]

console.log(children.take(2))
// Output:
// [{'name': 'ana', 'sex': 'f'}, {'name': 'fosto', 'sex': 'm'}]

console.log(children.take(1, child => child.sex === 'm'))
// Output:
// [{'name': 'fosto', 'sex': 'm'}]

children
  .take(2, child => child.name.length > 4 && child.sex === 'f')
  .each(child => console.log(child.name))
// Output:
// nuria
