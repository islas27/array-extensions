# Array extensions [![Build Status](https://travis-ci.org/islas27/array-extensions.svg?branch=master)](https://travis-ci.org/islas27/array-extensions)
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

### last(spec)
**Sintax**: `myArray.last(spec)`

**Inputs**: `spec`: a function that takes `element` & `index` as arguments, and returns true when the element matches the desired criteria.

**Outputs**: One element of the array if something matches `spec()`, or the last element if no `spec()` is used. It will return null when no match was found or the Array is empty.

**Example**: [last.js](examples/last.js)

----

### count(spec)
**Sintax**: `myArray.count(spec)`

**Inputs**: `spec`: a function that takes `element` & `index` as arguments, and returns true when the element matches the desired criteria.

**Outputs**: The number of elements that matched `spec()`. In case spec was not defined, it will return the length of the array by default.

**Example**: [count.js](examples/count.js)

----

### index(spec)
**Sintax**: `myArray.index(spec)`

**Inputs**: `spec`: a function that takes `element` & `index` as arguments, and returns true when the element matches the desired criteria. It could also be a single value or an object to search in the array.

**Outputs**: The zero-based index of the first element matched to `spec`

**Example**: [index.js](examples/index.js)

----

### pluck(property)
**Sintax**: `myArray.pluck(property)`

**Inputs**: `property`, a string containing the name of the property to substract from every element in the array

**Outputs**: Array, containing all the element's selected property. The array will contain `null` values where the property selected was not found or an element was null or undefined.

**Example**: [pluck.js](examples/pluck.js)

----

### sum(spec)
**Sintax**: `myArray.sum(spec)`

**Inputs**: `spec`: a function that takes `element` & `index` as arguments, and returns a value to be added to the final result.

**Outputs**: Number or String, depending on what was selected to add.

**Example**: [sum.js](examples/sum.js)

----

### max(comparer)
**Sintax**: `myArray.max(comparer)`

**Inputs**: `comparer`: a function that takes `a` & `b` as arguments, and returns a negative number when `b > a`, a positive number when `a > b`, and a 0 when `a === b`.

**Outputs**: An element of the array, that holds the maximum according to the comparer specified. If no `comparer` is sent, it will return the bigger number when the array holds only numbers, the alphabetically last string if the array holds strings and the first object if the array has objects (So it will not throw an error). It will return a null when the array is empty

**Example**: [max.js](examples/max.js)

**Notes**: The default behaviour uses `a.localeCompare(b)` when the array contains strings and no comparer is defined. While there exists libraries that try to make the best comparer of strings, `localeCompare` was chosen to reduce the overhead of adding more libraries. Beware as this function is dependent on vendor implementation, which means every environment behaves differently (Mozilla Firefox, Google Chrome, Opera, Safari, etc.) on uncommon languages or symbols.

Consult the following pages for more information on string comparation:
- [[Sept 2008] Stack Overflow - How do you do string comparison in JavaScript?](http://stackoverflow.com/questions/51165/how-do-you-do-string-comparison-in-javascript)
- [[Jan 2016] JSTips - Sorting strings with accented characters](http://www.jstips.co/en/sorting-strings-with-accented-characters/) (While it is not about comparators, it gives a few tips to write them)
- [Mozilla Developer Network - String.prototype.localeCompare()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

----

### min(comparer)
**Sintax**: `myArray.min(comparer)`

**Inputs**: `comparer`: a function that takes `a` & `b` as arguments, and returns a negative number when `b > a`, a positive number when `a > b`, and a 0 when `a === b`.

**Outputs**: An element of the array, the smaller one according to the comparer specified. If no `comparer` is sent, it will return the smaller number when the array holds only numbers, the alphabetically first string if the array holds strings and the first object if the array has objects (So it will not throw an error). It will return a null when the array is empty.

**Example**: [min.js](examples/max.js)

**Notes**: The same notes as `max(comparer)` apply here.

----

### flatten()
**Sintax**: `myArray.flatten()`

**Outputs**: A flattened array, when elements of the original array are arrays too. If not, it will return the original array. In case it is applied on an empty array, it will return an empty array too.

**Example**: [flatten.js](examples/flatten.js)

----
