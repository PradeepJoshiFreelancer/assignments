const jwt = require('jsonwebtoken');
const { Admin } = require('../db');
const jwtPassword = "password"


// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization
    jwt.verify(token, jwtPassword, async (err, token) => {
        if(err){
            res.status(404).json({message: "Unable to convert the JWT token"})
            return
        }
        const adminUserList = await Admin.find({username: token.username})
        if(adminUserList.length !== 1){
            res.status(404).json({message: "Unable to resolve to a single person"})
            return
        }
        next()
    })



}

module.exports = adminMiddleware;