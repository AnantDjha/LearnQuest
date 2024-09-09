const express = require("express");
const session  = require('express-session');
const cookie = require("cookie-parser")
require("dotenv").config()
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userDetailForLearnQuest  = require("./model/UserModel.js")
const cors = require("cors");
const allCoursesBuyedByUser = require("./model/CourcesBuyed.js");
const Razorpay = require("razorpay")

const app = express();

app.use(cookie())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

// creating a session 
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret: process.env.SECRET_SESSION_KEY,

    cookie:{
        secure:true,
        domain: "http://localhost:5173",
        maxAge: 1000* 60 * 60*60,
        httpOnly:true
    }
}));
app.use(bodyParser.json())

const conn = mongoose.connect(process.env.MONGO_URL);

app.post("/register", async (req,res)=>{
    try{

        const result = await userDetailForLearnQuest.find({email:req.body.email});

        if(result.length > 0)
        {
            res.json({status:false, message:"The User with given email alredy exists"})
            return;
        }
        
        const data = new userDetailForLearnQuest({
            name: req.body.name,
            email:req.body.email,
            password:req.body.password,
            saved:[]
        })

        data.save();
        res.json({status:true,message:"Registered successfully"})
    }
    catch(e)
    {
        console.log(e);
        
    }
})

app.post("/getUser", async (req, res)=>{
    try{
        const data = await userDetailForLearnQuest.find({email:req.body.email})
        if(data.length > 0)
        {
            res.json({name:data[0].name})
        }
        else{
            res.json({message:"No result found"})
        }
    }
    catch(e)
    {
        console.log(e);
        
    }
})

app.get("/session", async (req, res)=>{
    if(!req.session.user)
    {
        res.json({valid:false})
    }
    else{
        res.json({valid:true, value:req.session.user})
    }
})

app.post("/login", async (req, res)=>{
    try{
        const data = await userDetailForLearnQuest.find({email:req.body.email})

        if(data.length>0)
        {
            if(data[0].password == req.body.password)
            {
                req.session.user = data[0];
                res.json({status:true, message:"Successfully Logged In",user:{valid:true, value:data[0]}})
            }
            else{
                res.json({status:false,message:"Incorrect password"})
            }
        }
        else{
            res.json({status:false,message:"No user found"})
        }
    }
    catch(e)
    {
        console.log(e);
        
    }
})

// logout method

app.get("/logout" , async (req, res)=>{
    try{
        if(!req.session.user)
        {
            return res.json({completed:false})
        }
        
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
                return res.json({completed:false});
            }
            res.status(200).json({completed:true});
        });
    }
    catch(e)
    {
        console.log(e);
        res.json({completed:false});
    }
},[])


// course buyed collection 

app.post("/buy-course",async (req,res)=>{
    try {
        if(!req.session.user)
        {
            return;
        }
        const courseId = req.body.id;
        const date = new Date()

        const updatedDoc = await allCoursesBuyedByUser.findOneAndUpdate(
            { email: req.session.user.email },
            { $push: { courses: {id:courseId, module:0, date:date.getDate(),month:date.getMonth(),year:date.getFullYear()} } },
            { new: true, upsert: true } 
        );

        if (updatedDoc) {
            res.json({ completed: true });
        } else {
            res.json({ completed: false });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ completed: false, error: e.message });
    }
})

// Get course deatail
app.get("/get-course-detail", async(req,res)=>{
    try{
        if(!req.session.user)
        {
            return res.json({completed:false})
        }
        const data = await allCoursesBuyedByUser.find({email:req.session.user.email})  
        if(data.length > 0)
        res.json({completed:true,courses:data[0].courses,module:data[0].checkedModule})
        
        else
        res.json({completed:true,courses:[],module:[]})

    }
    catch(e)
    {
        console.log(e);
        res.status(500).json({completed:false,error:e})
        
    }
})

app.post("/checkTheBox" ,async (req,res)=>{
    try{
        if(!req.session.user)
        {
            
            return res.json({completed:false});
        }

        const data = await allCoursesBuyedByUser.findOne({email:req.session.user.email});
        
        
        if(data == null)
        {
            return res.json({completed:false})
        }

        const arr = data.checkedModule;
        const courseArr = data.courses;

        if(arr.find(a => a === req.body.value) != null)
        {
            let i = arr.indexOf(req.body.value)
            arr.splice(i,1);
            courseArr.map(a => {
                if(a.id == req.body.id)
                {
                    return a.module -= 1;
                }
            })
        }
        else{
            arr.push(req.body.value);
            courseArr.map(a => {
                if(a.id == req.body.id)
                {
                    return a.module += 1;
                }
            })
        }

        await allCoursesBuyedByUser.updateOne(
            { email: req.session.user.email },
            {
                $set: {
                    checkedModule: arr,
                    courses: courseArr
                }
            }
        );
        res.json({completed:true})
    }
    catch(e)
    {
        console.log(e)
        res.json({completed:false})
    }
})

app.get("/getModule" , async (req,res)=>{
    try{
        if(!req.session.user)
        {
            return res.json([]);
        }

        const data = await allCoursesBuyedByUser.findOne({email:req.session.user.email});
        if(data == null)
        {
            return res.json([])
        }

        let arr = data.checkedModule
        res.json(arr);
        
    }
    catch(e){
        console.log(e);
        res.json([])
        
    }
})



// get the saved courses

app.get("/get-saved-courses", async (req, res)=>{
    try{
        if(!req.session.user)
        {
            return res.json({noSession:true, dataArr:[]})
        }

        const data = await userDetailForLearnQuest.findOne({email:req.session.user.email})
        if(!data)
        {
            return res.json({dataArr:[]})
        }
        else{
            return res.json({dataArr:data.saved})
        }
    }
    catch(e)
    {
        console.log(e);
        res.json({dataArr:[]})
        
    }
})

app.post("/saveThisCourse" ,async (req, res)=>{
    try{
        if(!req.session.user)
        {
            return res.json({completed:false})
        }
        const data = await userDetailForLearnQuest.findOne({email:req.session.user.email})
        if(!data)
        {
            return res.json({completed:false})
        }

        let arr = data.saved
        arr.push(req.body.id);

        await userDetailForLearnQuest.updateOne({email:req.session.user.email},{
            $set:{saved:arr}
        })

        return res.json({completed:true})
    }
    catch(e)
    {
        res.json({completed:false})
        console.log(e);
    }
})

// Remove the course from the saved
app.post("/remove-saved-course", async (req, res)=>{
    try{
        if(!req.session.user)
        {
            return res.json({completed:false})
        }
        const data = await userDetailForLearnQuest.findOne({email: req.session.user.email})

        if(!data)
        {
            return res.json({completed:false})
        }

        let arr = data.saved
        let index = arr.indexOf(req.body.id)

        arr.splice(index, 1);

        await userDetailForLearnQuest.updateOne({email:req.session.user.email},{
            $set:{saved:arr}
        })

        res.json({completed:true})
    }
    catch(e)
    {
        console.log(e);
        res.json({completed:false})
    }
})


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