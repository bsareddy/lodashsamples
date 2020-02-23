// Load the full build.
var _ = require('lodash')

// _.differenceWith(array, [values], [comparator])

// This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values.
// The order and references of result values are determined by the first array.
// The comparator is invoked with two arguments: (arrVal, othVal).

var objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }]
var diffWith = _.differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual)
console.log(diffWith)
// ==> [ { x: 2, y: 1 } ]
