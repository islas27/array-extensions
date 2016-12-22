require('../aee.js')
devs = [
    { 'name': 'pedro', 'age': 21, 'skills': ['C#', 'Asp.Net', 'Sports'] },
    { 'name': 'juan', 'age': 23, 'skills': ['PHP', 'C#', 'Drink tea'] },
    { 'name': 'pablo', 'age': 26, 'skills': ['RoR', 'JS', 'Sports'] },
    { 'name': 'Jonathan', 'age': 24, 'skills': ['JS', 'HTML/CSS', 'Gaming'] }
]

console.log(devs.count())
// Output:
// 4

console.log(devs.count(dev => dev.age < 24))
// Output:
// 2

console.log(devs.count(dev => dev.skills.any('JS')))
// Output:
// 2
