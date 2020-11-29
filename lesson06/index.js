const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const PORT = 5000;

// Middleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/main', (req, res) => {
    res.send("<h1>This is a GET request</h1>");

})

app.get('/heros', (req, res) => {
    const heros = ["spiderman", "batman", "wolverine", "catwomen", "wonderwoman"];
    res.send(heros);

})

app.post("/birthday", async (req, res) => {
    //let bday = req.body.bday; 
    //let bmonth = req.body.bmonth;

    const { bday, bmonth } = req.body;

    if (bday == "24" && bmonth == "december")
    res.send("Hey! Today is your birthday");
    else
    res.send("Today is not your birthday");
    
})

app.listen(PORT, () => 
console.log(`Server running on PORT: ${PORT}`));

