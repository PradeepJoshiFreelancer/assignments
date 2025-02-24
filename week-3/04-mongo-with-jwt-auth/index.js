const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const PORT = 3000
// let count = 0

// function counterIncrement(req, res, next){
//     count++
//     log(`Number of server hits = ${count}`)
//     next()
//   }
// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});
