require('../aee')
numbers = [1, 2, 3, [4, 5, [6, 7, 8]]]
letters = ['a', 'b', ['c', 'd', 'e'], 'f', ['g'], 'h']

console.log(numbers.flatten())
// Output:
// [1, 2, 3, 4, 5, 6, 7, 8]

console.log(letters.flatten())
// Output:
// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

console.log([].flatten())
// Output:
// []

console.log([3, 1, 2].flatten())
// Output:
// [3, 1, 2]
