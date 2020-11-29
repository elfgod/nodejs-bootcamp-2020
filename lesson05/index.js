const express = require('express');
const app = express();
const PORT = 5000;
app.get('/', (req, res) => {
    // this shows the full req method
    //console.log(req);

    // this shows the url used in the request ( / )
    //console.log(req.url);

    // this shows the method used in the request ( GET )
    // console.log(req.url, req.method);
    res.send("<h1>Installed ExpressJS</h1>");

})

app.get('/contact', (req, res) => {
    res.send("<h1>This is the contact page</h1>");
})

app.get('/about', (req, res) => {
    res.send("<h1>This is ElfGod</h1>");
})

app.get('/users/:id?', (req, res) => {
    if(req.params.id === undefined)
    res.send("<h1>This is the list of all the users</h1>")
    else
    res.send("<h1>The user number:</h1>"+req.params.id);
})


app.listen(PORT, () => 
console.log(`Server running on PORT: ${PORT}`));

