const allCoursesBuyedByUser  = require("../model/CourcesBuyed")

const getCourseDetail = async (req , res )=>{
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
}


const buyCourse = async (req , res )=>{
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
}

const checkTheBox = async (req , res)=>{
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
}

const getModule = async (req , res )=>{
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
}
module.exports = {
    getCourseDetail,
    buyCourse,
    checkTheBox,
    getModule,
}