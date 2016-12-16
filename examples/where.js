require('../aee.js')
devs = [
    { 'name': 'Pedro', 'age': 29, 'skills': ['C#', 'Asp.Net', 'Sports'] },
    { 'name': 'Juan', 'age': 23, 'skills': ['PHP', 'C#', 'Drink tea'] },
    { 'name': 'Pablo', 'age': 26, 'skills': ['RoR', 'JS', 'Sports'] },
    { 'name': 'Jonathan', 'age': 24, 'skills': ['JS', 'HTML/CSS', 'Gaming'] }
]

newArray = devs.where(dev => dev.skills.indexOf('Gaming') > -1)
console.log(newArray)
// Outputs:
// [{ 'name': 'Jonathan', 'age': 24, 'skills': ['JS', 'HTML/CSS', 'Gaming'] }]

function spec (element) {
  return element.name === 'Pedro'
}
newArray = devs.where(spec).each(element => console.log(element.age))
// Outputs:
// 29
