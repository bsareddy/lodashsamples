// Load the full build.
var _ = require('lodash')

// _.difference(array, [values])

// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
// The order and references of result values are determined by the first array.

// Note: Unlike _.pullAll, this method returns a new array.

var differenceArray = _.difference([2, 3], [2, 4])
console.log(differenceArray)
// ==> [3]
