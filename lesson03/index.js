// Modules in NodeJS
const PORT = 5000;
// 1.Internal module or inbuilt packages - fs, os, http
const http = require('http');

/*
const server = http.createServer((req, res) => {
    console.log("First statement in server");
    res.end();
}) */

const server = http.createServer((req, res) =>{
    res.write("<h1>Hello world NodeJS server</h1>");
    res.write("<h2>Thank you for learning this course</h2>")
    res.end()
})

server.listen(PORT, () => 
console.log(`Server has started on port: ${PORT}`));


// 2.External module or npm packages

// 3.User Defined module require exports

