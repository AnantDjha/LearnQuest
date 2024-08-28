const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    email:String,
    courses:[Object],
    checkedModule:[String],
    
})

const allCoursesBuyedByUser = mongoose.model("allCoursesBuyedByUser",courseSchema)

module.exports = allCoursesBuyedByUser;