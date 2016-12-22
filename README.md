# Array extension exercise [![Build Status](https://travis-ci.org/islas27/array-ext-exercise.svg?branch=dev)](https://travis-ci.org/islas27/array-ext-exercise)
A set of methods that extend the Array prototype in JavaScript.

Examples of each method can be found in the `examples` folder with a comment of the expected output, and can be executed with node in any terminal: `node examples/[method-name].js`

---

### each(callback)
The each method will receive a callback function to execute on each element of the array.

**Sintax**: `myArray.each(callback) `

**Inputs**: `callback`: a function that has two arguments: `element` & `index`

**Outputs**: the original Array, so its capable of chainable actions.

**Example**: [examples/each.js](examples/each.js)

----

### where(spec)
**Sintax**: `myArray.where(spec)`

**Inputs**: `spec`: a function that defines if an element is included or not in the new array, it takes two arguments: `element` & `index`.

**Outputs**: Array: composed of the selected elements through `spec`

**Example**: [where.js](examples/where.js)

----

### any(spec)
**Sintax**: `myArray.any(spec)`

**Inputs**: `spec`: a function that takes `element` & `index` as arguments, and returns true if the element matches a desired rule. It can also be a single value; the whole element will be matched against it.

**Outputs**: `true` when a match is found, `false` when no match was found in the array.

**Example**: [examples/any.js](examples/any.js)

----

### select(spec)
**Sintax**: `myArray.select(spec)`

**Inputs**: `spec`: a function that takes `element` & `index` as arguments, and returns the desired part of the element to form a new array

**Outputs**: Array, composed of the selected members of the elements that form the original array. In case the `spec()` function does not match any part of the element, it will return an array of `undefined`. If no function is sent, it will return the original array.

**Example**: [select.js](examples/select.js)

----

### take(howMany, spec)
**Sintax**: `myArray.take(howMany, spec)`

**Inputs**: `howMany`: indicates how many elements should be taken to form a new array; `spec`: a function that takes `element` & `index` as arguments, and returns true if the element matches a desired rule.

**Outputs**: Array: composed of the howMany-elements that matched `spec()` or the first howMany-elements of the original array if no `spec()` is sent. It could return less elements than `howMany` if the array length is less than it, or the number of elements that match `spec()` are not enough. In case `howMany =< 0` it will return an empty array, regardless of `spec()`.

**Example**: [take.js](examples/take.js)

----

### skip(howMany)
**Sintax**: `myArray.skip(howMany)`

**Inputs**: `howMany`: indicates how many elements should be taken to form a new array.

**Outputs**: Array. If `howMany <= 0`, `skip()` will return the original array, while if bigger than the array, it will return an empty array.

**Example**: [skip.js](examples/skip.js)

----

### first(spec)
**Sintax**: `myArray.first(spec)`

**Inputs**: `spec`: a function that takes `element` & `index` as arguments, and returns true when the element matches the desired criteria.

**Outputs**: One element of the array if something matches `spec()`, or the first element if no `spec()` is used. It will return null when no match was found or the Array is empty.

**Example**: [first.js](examples/first.js)

----

### last
**Sintax**: `myArray.()`

**Inputs**:

**Outputs**:

**Example**: [.js](examples/.js)

----

### count(spec)
**Sintax**: `myArray.count(spec)`

**Inputs**: `spec`: a function that takes `element` & `index` as arguments, and returns true when the element matches the desired criteria.

**Outputs**: The number of elements that matched `spec()`. In case spec was not defined, it will return the length of the array by default.

**Example**: [count.js](examples/count.js)

----

### index
**Sintax**: `myArray.()`

**Inputs**:

**Outputs**:

**Example**: [.js](examples/.js)

----

### pluck
**Sintax**: `myArray.()`

**Inputs**:

**Outputs**:

**Example**: [.js](examples/.js)

----

### sum
**Sintax**: `myArray.()`

**Inputs**:

**Outputs**:

**Example**: [.js](examples/.js)

----

### max
**Sintax**: `myArray.()`

**Inputs**:

**Outputs**:

**Example**: [.js](examples/.js)

----

### min
**Sintax**: `myArray.()`

**Inputs**:

**Outputs**:

**Example**: [.js](examples/.js)

----

### flatten
**Sintax**: `myArray.()`

**Inputs**:

**Outputs**:

**Example**: [.js](examples/.js)
