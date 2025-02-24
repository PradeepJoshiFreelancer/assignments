const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let username = req.headers.username
    let password = req.headers.password

    const user = await User.find({ username: username, password: password });
    if (user.length !== 1)
        res.status(404).send("Invalid username or password");
    else
        next();
}

module.exports = userMiddleware;