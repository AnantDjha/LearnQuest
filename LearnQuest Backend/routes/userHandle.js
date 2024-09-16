const express = require("express");
const { signUpHandler, loginHandler, logoutHandler, getUserHandler } = require("../controller/userHandle");


const router = express.Router()

router.post("/" , signUpHandler)
router.post("/login" , loginHandler)
router.get("/logout" , logoutHandler)
router.get("/getUser" , getUserHandler)

module.exports = router;