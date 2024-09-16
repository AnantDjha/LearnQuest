const userDetailForLearnQuest = require("../model/UserModel");

const getSaveCourse = async (req , res)=>{
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
}


const saveThisCourse = async (req , res)=>{
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
}

const removeCourse = async (req , res)=>{
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
}

module.exports = {
    getSaveCourse,
    saveThisCourse,
    removeCourse,
}