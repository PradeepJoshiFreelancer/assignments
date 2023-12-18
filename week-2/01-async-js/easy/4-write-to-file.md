<!-- ## Write to a file -->
<!-- Using the fs library again, try to write to the contents of a file. -->
<!-- You can use the fs library to as a black box, the goal is to understand async tasks. -->

const { log } = require("console")
let fs = require("fs")

fs.writeFile("./static/new-file.txt",  "Data written to a new file", err => {
    if (err){
        throw err
    }
    console.log("Data written");

})