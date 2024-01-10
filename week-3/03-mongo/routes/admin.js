const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();


// Admin Routes
app.post('/signup', async (req, res) => {
    // Implement admin signup logic
    await Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({ message: "Admin created successfully!" })
});

app.post('/courses', adminMiddleware, async (req, res) => {
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

module.exports = router;