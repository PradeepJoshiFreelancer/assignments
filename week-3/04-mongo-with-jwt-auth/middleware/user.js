const jwt = require('jsonwebtoken');
const { User } = require('../db');
const jwtPassword = "password"

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization
    jwt.verify(token, jwtPassword, async (err, token) => {
        if (err) {
            res.status(404).json({ message: "Unable to convert the JWT token" })
            return
        }

        const userList = await User.find({ username: token.username })
        if (userList.length !== 1) {
            res.status(404).json({ message: "Unable to resolve to a single person" })
            return
        }

        next()
    })

}

module.exports = userMiddleware;