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
router.post('/signup', async (req, res) => {
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

router.get('/signin', async (req, res) => {
    // Implement admin signup logic
    let username = req.headers.username
    let password = req.headers.password
    const response = schema.safeParse({ username, password })

    if (!response.success) {
        res.status(404).json({message: "username/password invalid"})
    }  
    const persons = await User.find({ username: username, password: password });
    if (persons.length !== 1) {
        res.status(404).json({ message: "Invalid user or password" });
        return
    }  
    const token = jwt.sign({username: username}, jwtPassword)
    res.json({ token: token })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    let token = req.headers.authorization
    const decodedToken = jwt.decode(token)
    const user = await User
    .find({ username: decodedToken.username });
    if (user.length == 1) {
        let cources = await Course.find({ _id: { $in: user[0].coursesPurchased } })
        res.json(cources)
        return
    }
    res.json({ message: "Unable to resolve to a single person" })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    let courseId = req.params.courseId
    let token = req.headers.authorization
    const decodedToken = jwt.decode(token)
    try {
        await User.updateOne(
            { username: decodedToken.username },
            { $push: { coursesPurchased: courseId } }
        );
        res.json({
            message: "Course purchased successfully"
        });
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
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