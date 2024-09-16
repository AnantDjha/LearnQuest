const userDetailForLearnQuest = require("../model/UserModel")

const signUpHandler  = async (req , res)=>{
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
        res.json({status:false , message:"something went wrong"})
    }
}

const loginHandler = async (req, res)=>{
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
        res.json({status:false , message:"something went wrong"})
        
    }
}

const logoutHandler = async (req , res)=>{
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
}

const getUserHandler = async (req , res)=>{
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
}

module.exports = {
    signUpHandler,
    loginHandler,
    logoutHandler,
    getUserHandler
}