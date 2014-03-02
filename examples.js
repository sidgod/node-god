var fs = require("fs");
fs.readFile('./README.md', function(err, data){
    if(err) console.log("Failed to load the damn file!");
    else console.log(data.toString());
});

var stream = fs.createReadStream('./README.md')
stream.on('data', function(chunk){
    console.log(chunk.toString())
})
stream.on('end', function() {
    console.log("File read has finished")
})