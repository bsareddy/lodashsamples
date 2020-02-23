// Load the full build.
var _ = require('lodash')

// Creates an array with all the falsey values removed.
// The values false, null, 0, '', undefined and NaN are falsey.

var falseyValRemoved = _.compact([0, 1, false, 2, '', 3])
console.log(falseyValRemoved)
