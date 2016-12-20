require('../aee.js')

devs = [
    { 'name': 'pedro', 'age': 21, 'skills': ['C#', 'Asp.Net', 'Sports'] },
    { 'name': 'juan', 'age': 23, 'skills': ['PHP', 'C#', 'Drink tea'] },
    { 'name': 'pablo', 'age': 26, 'skills': ['RoR', 'JS', 'Sports'] },
    { 'name': 'Jonathan', 'age': 24, 'skills': ['JS', 'HTML/CSS', 'Gaming'] }
]

console.log(devs.select(dev => dev.age))
// Output:
// [21, 23, 26, 24]

console.log(devs.select(dev => dev.skills[0]))
// Output:
// ['C#', 'PHP', 'RoR', 'JS']

devs
  .select(dev => dev.age)
  .where(age => age < 24)
  .each(age => console.log(age))
// Output:
// 21
// 23
