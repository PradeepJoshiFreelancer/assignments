const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require('jsonwebtoken');
let adminServerCount = 0
const jwtPassword = "password"

const zod = require("zod");
const { Admin, Course } = require("../db");

const schema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
});

// Admin Routes
app.post('/signup', async(req, res) => {
    // Implement admin signup logic
    let username = req.body.username
    let password = req.body.password

    const response = schema.safeParse({ username, password })
    if (!response.success) {
        res.status(404).json({ message: "username/password invalid" })
    }
    await Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({ message: "Admin created successfully!" })
});

app.post('/signin', async(req, res) => {
    // Implement admin signup logic
});

app.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    await Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink,
        published: true
    })
    res.json({ message: "New Cource Created!" })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then((cources) => {
        res.json(cources)
    })
});

module.exports = router