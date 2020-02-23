// Load the full build.
var _ = require('lodash')

const name = {
  firstName: 'Bharath',
  middleName: 'Reddy',
  lastName: 'Sareddy'
}
const address = {
  village: 'Singaram'
}
_.merge(name, address)
console.log(_.merge(name, address))
