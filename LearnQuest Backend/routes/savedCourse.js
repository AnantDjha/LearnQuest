const express = require("express");
const { getSaveCourse, saveThisCourse, removeCourse } = require("../controller/savedCourse");

const router = express.Router();

router.get("/" , getSaveCourse)
router.post("/saveThisCourse" , saveThisCourse)
router.post("/remove-saved-course" , removeCourse)

module.exports = router