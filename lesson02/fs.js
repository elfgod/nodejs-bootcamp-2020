// fs -file system
const fs = require('fs');

/*
// read files 
// this read a files from another place
fs.readFile('./first.txt', (err, data) => {
    if(err){
        console.log("Error and file cant be read");
    }else{
        console.log(data.toString());
    }
}); */

/*
// write files
// if the file doesnt exists it will create the file or folder
fs.writeFile('./first.txt', 'this is modified line of file', (err, data) => {
    if(err){
        console.log("Error");
    }else{
        console.log("Succesfully overwritten");
    }
}); */

/*
// delete files 
if(fs.existsSync('./second.txt')){
    fs.unlink('./second.txt', (err, data) => {
        if(err) {
        console.log("Error");
        }else {
        console.log("Deleted message");
        }
    })
} */

/*
// directories
// this checks if the file exists if not it will create it
if(!fs.existsSync('./docs')){
    fs.mkdir('./docs', (err, data) => { 
        if(err){
            console.log("Error");
        }else{
            console.log("Succesfully created");
        }
    })
// if the files exists this  will delete it
}else{ 
    fs.rmdir('./docs', (err, data) => {
        if(err) console.log("Error")
        else {console.log("Successfully Deleted")}
    })
} */