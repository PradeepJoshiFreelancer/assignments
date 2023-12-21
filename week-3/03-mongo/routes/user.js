const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username: req.body.username,
        password: req.body.password,
        coursesPurchased: []
    })
    res.json({ message: "User created successfully!" })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then((cources) => {
        res.json(cources)
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    let courseId = req.params.courseId
    let username = req.headers.username
    try {
        await User.updateOne(
            { username: username },
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
    let username = req.headers.username
    const user = await User.find({ username: username });
    if (user.length == 1) {
        let cources = await Course.find({ _id: { $in: user[0].coursesPurchased } })
        res.json(cources)
        return
    }
    res.json({ message: "Unable to resolve to a single person" })
});


module.exports = router;