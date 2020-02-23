// Load the full build.
var _ = require('lodash')

// Creates an array of elements split into groups the length of size.
// If array can't be split evenly, the final chunk will be the remaining elements.
// _.chunk(array, [size=1])

var splitIntoTwo = _.chunk(['a', 'b', 'c', 'd'], 2)
var splitIntoThree = _.chunk(['a', 'b', 'c', 'd', 'e'], 3)
console.log(splitIntoTwo)
console.log(splitIntoThree)
