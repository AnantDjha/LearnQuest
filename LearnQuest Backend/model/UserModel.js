const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    saved:[Number]
})

const userDetailForLearnQuest = mongoose.model("userDetailForLearnQuest", userSchema);

module.exports = userDetailForLearnQuest;