const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require('jsonwebtoken');
const zod = require('zod');
const { User, Course } = require("../db");
const jwtPassword = "password"

const schema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
});

// User Routes
app.post('/signup', (req, res) => {
    // Implement user signup logic
    let username = req.body.username
    let password = req.body.password

    const response = schema.safeParse({ username, password })
    if (!response.success) {
        res.status(404).json({message: "username/password invalid"})
    }
    await User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({ message: "Admin created successfully!" })
});

app.post('/signin', (req, res) => {
    // Implement admin signup logic
});

app.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

app.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

app.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic

    let token = req.headers.authorization
    const decodedToken = jwt.decode(token)
    const user = await User.find({ username: decodedToken.username });
    if (user.length == 1) {
        let cources = await Course.find({ _id: { $in: user[0].coursesPurchased } })
        res.json(cources)
        return
    }
    res.json({ message: "Unable to resolve to a single person" })
});

module.exports = router