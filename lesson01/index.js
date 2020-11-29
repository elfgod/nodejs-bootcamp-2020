// **** Lesson 01 ****

// const data = require('./data')

/* this will take all data in the data.js file
console.log(data); */

/* like this i can print data individualy
console.log(data.myarray);
console.log(data.myarray2); */

/* destructuring
const { myarray, myarray2 } = require('./data');
console.log(myarray);
console.log(myarray2); */


// **** Lesson 02 ****/

/* the path of where the application resides
console.log(__dirname);*/

/* the file name and path of this file
console.log(__filename); */

/* setTimeout(cb, ms) this will print after this time
function fun1() {
    console.log('This is output of setTimeout');
}
setTimeout(fun1, 2000); */

/* setInterval(cb, ms) this will print many times
function fun2() {
    console.log('this is setInterval method');
}
setInterval(fun2, 3000); */

/* OS Model
const os = require('os');
//this prints the hostname of the user PC
const host = os.hostname();
console.log(host);
//this prints the available memory in the PC
const mem = os.freemem();
console.log(mem);
this prints the OS Operating System the user using
const pt = os.platform();
console.log(pt) */


// **** Lesson 03 ****/

