const express = require("express");
const session  = require('express-session');
const cookie = require("cookie-parser")
require("dotenv").config()
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Razorpay = require("razorpay")



const app = express();
app.use(cookie())
app.use(cors({
    origin: "http://localhost:5173",
    // origin: "https://havelearnquest.netlify.app",
    credentials: true,
}))

// creating a session 
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret: process.env.SECRET_SESSION_KEY,
    
    cookie:{
        secure:false,
        maxAge: 1000* 60 * 60*60,
        domain:"https://havelearnquest.netlify.app",
        sameSite:"lax"
    }
}));
app.use(bodyParser.json())

const conn = mongoose.connect(process.env.MONGO_URL);



// routes for the request 
const userRoute = require("./routes/userHandle")
const courseRoute = require("./routes/buyedCourse")
const savedCouseRoute = require ("./routes/savedCourse")


//making request with specific routers
app.use("/register" , userRoute)
app.use("/course" , courseRoute)
app.use("/save" , savedCouseRoute)




app.get("/session", async (req, res)=>{
    if(!req.session.user)
    {
        res.json({valid:false})
    }
    else{
        res.json({valid:true, value:req.session.user})
    }
})

//rasorpay integration
const razorpay = new Razorpay({
    key_id: "rzp_test_gI00jflkRvp85R",
    key_secret: "GJAHUj7atKa2sc57EOoj1c5W"
})

app.post("/razorpay", async (req, res) => {
    try {
        const options = {
            amount: req.body.amount * 100,  // Make sure req.body.amount is defined
            currency: "INR",
            receipt: "sudhfshdihisdhcugsucsdycgusdcu",
            payment_capture: 1
        };

        const response = await razorpay.orders.create(options);
        res.json(response);

    } catch (error) {
        console.error('Error creating Razorpay order:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// starting the process
app.listen(process.env.PORT , (()=>{
    console.log("Listning on port "+ process.env.PORT )
}))