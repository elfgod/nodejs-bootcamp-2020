const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const PORT = 5000;

// Middleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
/* this creates a virtual path to public to
// enter as files/style.css
app.use("/files",express.static("public")); */

// Middleware
// this shows a code you can run before showing the webstie
app.use((req, res, next) => {
    console.log("Details of the request")
    console.log("host:", req.hostname);
    console.log("path:", req.path);
    console.log("Method:", req.method);
    next();
})


app.get('/main', (req, res) => {
    res.write("<h1>This is a GET request</h1>");
    res.write("<h2>Welcome</h2>");
    res.end();
})

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

app.post('/', (req, res) => {
    //console.log(req.body);

    //console.log(req.body.one);
    //console.log(req.body.two);

    const num1 = Number(req.body.one);
    const num2 = Number(req.body.two);
    const result = num1+num2;
    const mul = num1*num2;

    res.send(`Addition of this numbers is: ${result}, 
    multiplication of this two numbers is: ${mul}`);
})

// this handles broken links to a 404 page
// 404 errors should go at the end of the routes
app.use((req, res) => {
    res.sendFile(__dirname+"/error.html");
})

app.listen(PORT, () =>
console.log(`Server running on PORT: ${PORT}`));