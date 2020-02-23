// Load the full build.
var _ = require('lodash')

// _.differenceBy(array, [values], [iteratee=_.identity])

// This method is like _.difference except that it accepts iteratee which is invoked for each element of array 
// and values to generate the criterion by which they're compared.
// The order and references of result values are determined by the first array.
// The iteratee is invoked with one argument:

var diffBy = _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
console.log(diffBy)

// The '.property' iteratee shorthand.
var ex2 = _.differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x')
console.log(ex2)

var ex3 = _.differenceBy([{ y: 2 }, { x: 2 }, { x: 1 }], [{ x: 1 }], 'x')
console.log(ex3)
