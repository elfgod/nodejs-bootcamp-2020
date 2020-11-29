const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Pizza = require('./models/pizza');

const PORT = 5000;
const MONGO_URI = 'mongodb://localhost/DbPizzaStore';

mongoose
    .connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
        })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    Pizza.find().sort({createdAt: -1})
    .then((data) => {
        res.render("index",{title:"Home", orders: data})
    })
    .catch((err) => {
        console.log(err);
    })
})

app.get("/about", (req, res) => {
    res.render("about",{title:"About"});
})

app.get("/orders", (req, res) => {
    res.render("order",{title:"Order Pizza"});
})

app.post('/orders', (req, res) =>{
    // { name, pizza, location } = req.body.params;
    
    const pizza = new Pizza(req.body)

    pizza.save()

    .then(() => {
        res.redirect("/")
        console.log("succesfully placed order");
    })
    .catch((err) => {
        console.log("Error while placing order");
    })
})

app.use((req, res) => {
    res.render("404",{title:"Error page"});
})
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));