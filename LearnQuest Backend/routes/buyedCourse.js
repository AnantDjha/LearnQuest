const express = require("express")
const { getCourseDetail, buyCourse, checkTheBox, getModule } = require("../controller/buyedCourse")
const router = express.Router()

router.get("/" , getCourseDetail);
router.post("/buy-course" , buyCourse )
router.post("/checkTheBox" , checkTheBox)
router.get("/getModule" , getModule)

module.exports = router