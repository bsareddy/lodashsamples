// Load the full build.
var _ = require('lodash')

// Creates a new array concatenating array with any additional arrays and/or values.
// Returns (Array): Returns the new concatenated array.

var array = [1]
var other = _.concat(array, 2, [3], [[4]])

console.log(array)
console.log(other)
