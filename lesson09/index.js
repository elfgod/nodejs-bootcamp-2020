const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/alienjobs',{
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
/*
const mongoDB = 'mongodb://localhost:27017/alienJobs'
mongoose
.connect(`${mongoDB}`,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
},
(err) => {
    if(err)
    console.log("Connected to MongoDb");
    else
    console.log("No Not connected");
}); */

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "No Blank Name is encouraged"],
    },
    gender: String,
    age: {
        type: Number,
        min: 18,
        max: 60
    }
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Josue",
    gender: "Male",
    age: "18"
});

const person2 = new Person({
    name: "Yarelis",
    gender: "Women",
    age: "30"
});

// this creates the data
person.save();
//person2.save();


// this find the data
/*
Person.find((err, data) =>{
    if(err)
    console.log("Some error ocured");
    else
    console.log(data);
}); */


// this update the data using the ID
/*
Person.updateOne({_id:"5fc3e24c536cb01498bb6e2b"}, {age:31},
(err) =>{
    if(err)
    console.log("Error updating data");
    else
    console.log("Data updated");
})*/


// this deletes data
/*
Person.deleteOne({name:"Yarelis"}, (err) => {
    if(err)
    console.log("Error deleting data");
    else
    console.log("Succesfully deleted");
})
*/

