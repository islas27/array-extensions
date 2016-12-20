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

### select
**Sintax**: `myArray.()`

**Inputs**:

**Outputs**:

**Example**: [.js](examples/.js)

----

### take(howMany, spec)
**Sintax**: `myArray.take(howMany, spec)`

**Inputs**: `howMany`: indicates how many elements should be taken to form a new array; `spec`: a function that takes `element` & `index` as arguments, and returns true if the element matches a desired rule.

**Outputs**: Array: composed of the howMany-elements that matched `spec()` or the first howMany-elements of the original array if no `spec()` is sent. It could return less elements than `howMany` if the array length is less than it, or the number of elements that match `spec()` are not enough. In case `howMany =< 0` it will return an empty array, regardless of `spec()`.

**Example**: [take.js](examples/take.js)

----

### skip
**Sintax**: `myArray.()`

**Inputs**:

**Outputs**:

**Example**: [.js](examples/.js)

----

### first
**Sintax**: `myArray.()`

**Inputs**:

**Outputs**:

**Example**: [.js](examples/.js)

----

### last
**Sintax**: `myArray.()`

**Inputs**:

**Outputs**:

**Example**: [.js](examples/.js)

----

### count
**Sintax**: `myArray.()`

**Inputs**:

**Outputs**:

**Example**: [.js](examples/.js)

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
