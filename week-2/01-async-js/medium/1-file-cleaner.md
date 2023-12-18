<!-- ## File cleaner -->
<!-- Read a file, remove all the extra spaces and write it back to the same file. -->

<!-- For example, if the file input was -->
<!-- ``` -->
<!-- hello     world    my    name   is       raman -->
<!-- ``` -->

<!-- After the program runs, the output should be -->

<!-- ``` -->
<!-- hello world my name is raman -->
<!-- ``` -->

let fs = require('fs')

fs.readFile("./static/dummy.txt", "utf-8", (err, data) => {
    if (err) {
        throw err
    }

    data = data.replace(/\s+/g, " ")
    fs.writeFile("./static/clean-file.txt", data, (err) => {
        if (err) {
            throw err
        }
        console.log("Clean data written")
    })
})