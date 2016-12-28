require('../aee.js')
letters = ['a', 'b', 'c']
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

console.log(numbers.sum())
// Output:
// 45

console.log(evenNumbers.sum(number => number * number))
// Output:
// 1545

console.log(letters.sum((letter, index) => index % 2 === 0 ? letter : ''))
// Output:
// ac
