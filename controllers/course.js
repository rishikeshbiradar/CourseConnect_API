const Course = require("../models/course")

const getAllCourses = async (req, res) => {
    const Courses = await Course.find(req.query)
    res.status(200).json({ Courses })
}

module.exports = getAllCourses;
