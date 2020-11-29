const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const PORT = 5000;

// Middleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    const items = [
        {first:"David", last:"Warner"},
        {first:"Jose", last:"Bros"},
        {first:"Cristiano", last:"Ronaldo"}
    ]
    res.render("index",{title:"Home", items});
})


app.use((req, res) => {
    res.sendFile(__dirname+"/error.html");
})

app.listen(PORT, () =>
console.log(`Server running on PORT: ${PORT}`));