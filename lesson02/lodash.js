/**** Lesson 01 ****/
/* using LODASH LIBRARY */
const _ = require('lodash');

// this prints the array with unique values only
var numArray = [1,2,2,3,3,5,5,5,7];

var result = _.sortedUniq(numArray);

console.log(numArray);
console.log(result);
