require('../aee.js')
devs = [
    { 'name': 'pedro', 'age': 21, 'skills': ['C#', 'Asp.Net', 'Sports'] },
    { 'name': 'juan', 'age': 23, 'skills': ['PHP', 'C#', 'Drink tea'] },
    { 'name': 'pablo', 'age': 26, 'skills': ['RoR', 'JS', 'Sports'] },
    { 'name': 'Jonathan', 'age': 24, 'skills': ['JS', 'HTML/CSS', 'Gaming'] }
]
randomNumbers = [741, 3, 801, 510, 444, 492, 610, 429, 101, 713]
randomLetters = ['b', 'd', 'b', 'z', 'm', 's', 't', 'z', 'e', 'u']

console.log(randomNumbers.max())
// Output:
// 801

console.log(randomLetters.max())
// Output:
// z

console.log([].max())
// Output:
// null

console.log(devs.max((a, b) => a.age - b.age).name)
// Output:
// pablo

console.log(devs.max((a, b) => b.name.localeCompare(a.name)).name)
// Output: (this comparer is in ASC order)
// Jonathan
