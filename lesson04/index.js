// NodeJS has two types of ways to work
// Async or Sync
// Async runs after Sync code
// Sync runs before Async code

//const fs = require('fs');
//console.log(fs);

/*
fs.readFile(__dirname+"/mytext.txt", (err, data) => {
    console.log(data.toString());
})

console.log("Async Execution"); */

// we need try catch to use Synchro
/*
try{
    const data = fs.readFileSync(__dirname+"/mytext.txt", "utf-8");
        console.log(data);
}
catch(err){
    console.log(err);
}

console.log("Sync Execution"); */