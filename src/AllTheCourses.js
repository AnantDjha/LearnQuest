import dataScience from "./assets/dataScienceProgram.png"
import webDevProgram from "./assets/webDevProgram.png"
import androidDevProgram from "./assets/androidDevProgram.jpg"
import dsa from "./assets/dsaProgram.png"
import javaProgram from "./assets/javaProgram.jpg"
import pythonProgram from "./assets/pythonProgram.webp"
import profile from "./assets/profile.jpg"
import phone from "./assets/iconOfPhone.png"
import email from "./assets/logoOfEmail.png"
import microsoft from "./assets/microsoft.png"
import lohikatash from "./assets/lohitaksh.jpeg"
import aditya from "./assets/aditya.jpeg"
import manjot from "./assets/manjot.jpeg"
import ola from "./assets/ola.png"
import lauren from "./assets/lauren.png"
import aman from "./assets/amanpreet.jpeg"
import karan from "./assets/karan.jpeg"
import vishmita from "./assets/vishmita.jpeg"
import upstox from "./assets/upstops.png"
import amazon from "./assets/amazon.png"


export const courses = [
    {
        id:1,
        name:"Web Development",
        skillToGain: "HTML, CSS, javascript, React.js, Node.js and MongoDB",
        star:4.6,
        type:"Beginner",
        duration: 6,
        src:webDevProgram,
        heading:"Learn Web Development from level zero to Expert",
        instructor:{
            name:"Manjot Singh",
            img:manjot,
            company:lauren,
            companyName:"lauren"
        },
        skill:["HTML","CSS","Javascript","React.js","Node.js","Express.js","MongoDB"],
        modules:[
            {
                heading:"Introduction to HTML5",
                notesToDownload:"https://www.tutorialspoint.com/html/html_tutorial.pdf",
                content:[
                    {
                        url:"NAEHbzXMNpA",
                        nameOfContent:"HTML - Introduction",
    
                    },
                    {
                        url:"uoMCY2FhPAE",
                        nameOfContent:"Get started with html",
    
                    },
                    {
                        url:"uMIjPKUXEEE",  // https://www.youtube.com/watch?v=uMIjPKUXEEE&list=PLWPirh4EWFpFI-w62QiV62FOVHcXnynon&index=3&pp=iAQB
                        nameOfContent:"Tags in html",
    
                    },
                    {
                        url:"jlpkV3oY5-A",// https://www.youtube.com/watch?v=jlpkV3oY5-A&list=PLWPirh4EWFpFI-w62QiV62FOVHcXnynon&index=4&t=9s&pp=iAQB
                        nameOfContent:"HTML - formating tags",
    
                    },
                    {
                        url:"4ZunanytE88",// https://www.youtube.com/watch?v=4ZunanytE88&list=PLWPirh4EWFpFI-w62QiV62FOVHcXnynon&index=5&pp=iAQB
                        nameOfContent:"HTML - Phrase tag",
    
                    },
                    {
                        url:"nurQlBDhFLY",// https://www.youtube.com/watch?v=nurQlBDhFLY&list=PLWPirh4EWFpFI-w62QiV62FOVHcXnynon&index=6&pp=iAQB
                        nameOfContent:"HTML - Meta tag",
                    },
                    {
                        url:"u0WYSDbmoj8",// https://www.youtube.com/watch?v=u0WYSDbmoj8&list=PLWPirh4EWFpFI-w62QiV62FOVHcXnynon&index=8&pp=iAQB
                        nameOfContent:"HTML - Comments",
                    },
                    {
                        url:"GuOb9t1zeQg",// https://www.youtube.com/watch?v=GuOb9t1zeQg&list=PLWPirh4EWFpFI-w62QiV62FOVHcXnynon&index=10&pp=iAQB
                        nameOfContent:"HTML - Tables",
                    },
                    {
                        url:"1Pv3dlO8KWw",// https://www.youtube.com/watch?v=1Pv3dlO8KWw&list=PLWPirh4EWFpFI-w62QiV62FOVHcXnynon&index=11&pp=iAQB
                        nameOfContent:"HTML - List tags",
                    },
                ]
            },
            {
                heading:"Start With the CSS",
                notesToDownload:"https://goalkicker.com/CSSBook/CSSNotesForProfessionals.pdf",
                content:[
                    {
                        url:"0W6qz0-aDaM",//https://www.youtube.com/watch?v=0W6qz0-aDaM&list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&index=1&pp=iAQB
                        nameOfContent:"CSS Introduction"
                    },
                    {
                        url:"QgxkYbGr2II",//https://www.youtube.com/watch?v=QgxkYbGr2II&list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&index=2&pp=iAQB
                        nameOfContent:"CSS Selectors Tutorial "
                    },
                    {
                        url:"Ddc-IIrIot0",//https://www.youtube.com/watch?v=Ddc-IIrIot0&list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&index=3&pp=iAQB
                        nameOfContent:"CSS Colors Tutorial for Beginners"
                    },
                    {
                        url:"_ybQREu-NU0",//https://www.youtube.com/watch?v=_ybQREu-NU0&list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&index=4&pp=iAQB
                        nameOfContent:"CSS units and size"
                    },
                    {
                        url:"L9khsrjMwKw",//https://www.youtube.com/watch?v=L9khsrjMwKw&list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&index=5&pp=iAQB
                        nameOfContent:"CSS Box model "
                    },
                    {
                        url:"klXyJWlIzuY",//https://www.youtube.com/watch?v=klXyJWlIzuY&list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&index=6&pp=iAQB
                        nameOfContent:"CSS Text and font "
                    },
                    {
                        url:"jcThx0U066w",//https://www.youtube.com/watch?v=jcThx0U066w&list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&index=8&pp=iAQB
                        nameOfContent:"CSS List style "
                    },
                    {
                        url:"naTAFo2Gyus",//https://www.youtube.com/watch?v=naTAFo2Gyus&list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&index=10&pp=iAQB
                        nameOfContent:"CSS Display property"
                    },
                    {
                        url:"zqg4A6g9GfA",//https://www.youtube.com/watch?v=zqg4A6g9GfA&list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&index=13&pp=iAQB
                        nameOfContent:"CSS Position property"
                    },
                    {
                        url:"B8BFVzbKmPI",//https://www.youtube.com/watch?v=B8BFVzbKmPI&list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&index=14&pp=iAQB
                        nameOfContent:"Flex Box in CSS"
                    },
                    {
                        url:"EaWj2AWI5Es",//https://www.youtube.com/watch?v=EaWj2AWI5Es&list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&index=15&pp=iAQB
                        nameOfContent:"Grid in  CSS"
                    },
                    {
                        url:"69IbzTWg5PM",//https://www.youtube.com/watch?v=69IbzTWg5PM&list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&index=17&pp=iAQB
                        nameOfContent:"CSS Media queries and Web Design"
                    },
                    {
                        url:"GNmz5dYjdcQ",//https://www.youtube.com/watch?v=GNmz5dYjdcQ&list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&index=19&pp=iAQB
                        nameOfContent:"CSS Psuedo selectors"
                    },
                ]
                
            },
            {
                heading:"Complete Javascript",
                notesToDownload:"https://goalkicker.com/JavaScriptBook/JavaScriptNotesForProfessionals.pdf",
                content:[
                    {
                        url:"uxWO8Sd8PoY",//https://www.youtube.com/watch?v=uxWO8Sd8PoY&list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV&index=2&pp=iAQB
                        nameOfContent:"What is Javascipt? Why to learn"
                    },
                    {
                        url:"_GxpmQ54aqg",//https://www.youtube.com/watch?v=_GxpmQ54aqg&list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV&index=3&pp=iAQB
                        nameOfContent:"What is Document object model"
                    },
                    {
                        url:"I5xesmmiREU",//https://www.youtube.com/watch?v=I5xesmmiREU&list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV&index=4&pp=iAQB
                        nameOfContent:"Start with first program"
                    },
                    {
                        url:"vWX2eoi3bOc",//https://www.youtube.com/watch?v=vWX2eoi3bOc&list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV&index=5&pp=iAQB
                        nameOfContent:"Statements and Comments"
                    },
                    {
                        url:"Hrd3SfCCXZw",//https://www.youtube.com/watch?v=Hrd3SfCCXZw&list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV&index=7&pp=iAQB
                        nameOfContent:"Variables and Datatypes"
                    },
                    {
                        url:"Hrd3SfCCXZw",//https://www.youtube.com/watch?v=Hrd3SfCCXZw&list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV&index=7&pp=iAQB
                        nameOfContent:"Javascript Operators"
                    },
                    {
                        url:"p-JoZ_UxwB8",//https://www.youtube.com/watch?v=p-JoZ_UxwB8&list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV&index=10&pp=iAQB
                        nameOfContent:"Control Statement"
                    },
                    {
                        url:"OWQUBfWaxBw",//https://www.youtube.com/watch?v=OWQUBfWaxBw&list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV&index=12&pp=iAQB
                        nameOfContent:"Switch case statement"
                    },
                    {
                        url:"DIA0J4vJBHQ",//https://www.youtube.com/watch?v=DIA0J4vJBHQ&list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV&index=13&pp=iAQB
                        nameOfContent:"Loops in javascript"
                    },
                    {
                        url:"eL0RGZ0GddE",//https://www.youtube.com/watch?v=eL0RGZ0GddE&list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV&index=16&pp=iAQB
                        nameOfContent:"Function in javascript"
                    },
                    {
                        url:"SrT8-9I4WnE",//https://www.youtube.com/watch?v=SrT8-9I4WnE&list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV&index=18&pp=iAQB
                        nameOfContent:"Introduction to Array"
                    },
                    {
                        url:"s0IdE51JE80",//https://www.youtube.com/watch?v=s0IdE51JE80&list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV&index=19&pp=iAQB
                        nameOfContent:"Object in javascript"
                    },
                ]
            },
            {
                heading:"Start with the Node.js",
                notesToDownload:"https://goalkicker.com/NodeJSBook/NodeJSNotesForProfessionals.pdf",
                content:[
                    {
                        url:"zb3Qk8SG5Ms",//https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=1&pp=iAQB
                        nameOfContent:"Introducton and Setup"
                    },
                    {
                        url:"OIBIXYLJjsI",//https://www.youtube.com/watch?v=OIBIXYLJjsI&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=2&pp=iAQB
                        nameOfContent:"Deep dive into node.js"
                    },
                    {
                        url:"-HPZ1leCV8k",//https://www.youtube.com/watch?v=-HPZ1leCV8k&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=3&pp=iAQB
                        nameOfContent:"Client and Server"
                    },
                    {
                        url:"DQD00NAUPNk",//https://www.youtube.com/watch?v=DQD00NAUPNk&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=4&pp=iAQB
                        nameOfContent:"Request and Response"
                    },
                    {
                        url:"bdHE2wHT-gQ",//https://www.youtube.com/watch?v=bdHE2wHT-gQ&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=5&pp=iAQB
                        nameOfContent:"Node Package Manager - NPM"
                    },
                    {
                        url:"yXEesONd_54",//https://www.youtube.com/watch?v=yXEesONd_54&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=7&pp=iAQB
                        nameOfContent:"Node View Engine"
                    },
                    {
                        url:"_GJKAs7A0_4",//https://www.youtube.com/watch?v=_GJKAs7A0_4&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=8&pp=iAQB
                        nameOfContent:"Middleware"
                    },
                    {
                        url:"VVGgacjzc2Y",//https://www.youtube.com/watch?v=VVGgacjzc2Y&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=10&pp=iAQB
                        nameOfContent:"Get, Post, Delete and Update request"
                    },
                ]
            },
           
            {
                heading:"Understanding the React.js package",
                notesToDownload:"https://goalkicker.com/ReactJSBook/ReactJSNotesForProfessionals.pdf",
                content:[
                    {
                        url:"j942wKiXFu8",//https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=1&pp=iAQB
                        nameOfContent:"Introduction to React.js"
                    },
                    {
                        url:"kVeOpcw4GWY",//https://www.youtube.com/watch?v=kVeOpcw4GWY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=2&pp=iAQB
                        nameOfContent:"Creating React Application"
                    },
                    {
                        url:"9D1x7-2FmTA",//https://www.youtube.com/watch?v=9D1x7-2FmTA&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=3&pp=iAQB
                        nameOfContent:"Dynamic Value in Template"
                    },
                    {
                        url:"0sSYmRImgRY",//https://www.youtube.com/watch?v=0sSYmRImgRY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=5&pp=iAQB
                        nameOfContent:"Multiple Component"
                    },
                    {
                        url:"4pO-HcG2igk",//https://www.youtube.com/watch?v=4pO-HcG2igk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=8&pp=iAQB
                        nameOfContent:"Use State Hooks in React.js"
                    },
                    {
                        url:"PHaECbrKgs0",//https://www.youtube.com/watch?v=PHaECbrKgs0&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=11&pp=iAQB
                        nameOfContent:"Props passing"
                    },
                    {
                        url:"aZGzwEjZrXc",//https://www.youtube.com/watch?v=aZGzwEjZrXc&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=21&pp=iAQB
                        nameOfContent:"React Router and Dynamic routing"
                    },
                ]
            },
            {
                heading:"Begin with the NoSQL Database",
                notesToDownload:"https://goalkicker.com/MongoDBBook/MongoDBNotesForProfessionals.pdf",
                content:[
                    {
                        url:"ExcRbA7fy_A",//https://www.youtube.com/watch?v=ExcRbA7fy_A&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA&index=1&pp=iAQB
                        nameOfContent:"What is MongoDB"
                    },
                    {
                        url:"ojKJqNQYaOI",//https://www.youtube.com/watch?v=ojKJqNQYaOI&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA&index=3&pp=iAQB
                        nameOfContent:"Collection and Documents"
                    },
                    {
                        url:"bJSj1a84I20",//https://www.youtube.com/watch?v=bJSj1a84I20&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA&index=4&pp=iAQB
                        nameOfContent:"Using MongoDB compass"
                    },
                    {
                        url:"g3Z0Av9yRSs",//https://www.youtube.com/watch?v=g3Z0Av9yRSs&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA&index=6&pp=iAQB
                        nameOfContent:"Adding New Documents"
                    },
                    {
                        url:"FLl9m4XwbqQ",//https://www.youtube.com/watch?v=FLl9m4XwbqQ&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA&index=7&pp=iAQB
                        nameOfContent:"Finding Document"
                    },
                    {
                        url:"hq7gGo-1CgM",//https://www.youtube.com/watch?v=hq7gGo-1CgM&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA&index=13&pp=iAQB
                        nameOfContent:"Deleting Document"
                    },
                    {
                        url:"s8YG0GvQInY",//https://www.youtube.com/watch?v=s8YG0GvQInY&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA&index=14&pp=iAQB
                        nameOfContent:"Updating Document"
                    },
                    {
                        url:"NRKGZdJTf48",//https://www.youtube.com/watch?v=NRKGZdJTf48&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA&index=10&pp=iAQB
                        nameOfContent:"Complex Queries and Operators"
                    },
                ]
            }
          
           
        ]


    },
    {
        id:2,
        name:"Android Development",
        skillToGain: "Java, Kotlin, Android SDK, firebase and SQLite",
        star:4.3,
        type:"Beginner",
        duration: 4,
        src:androidDevProgram,
        heading:"Become the Android Developer avail learning from the scratch",
        instructor:{
            name:"Aditya Srivastava",
            img:aditya,
            company:ola,
            companyName:"Ola Electric"
        },
        skill:["Java","Kotlin","XML","Android SDK","SQLite","Firebase"],
        modules:[
          
            {
                heading:"Introduction to Kotlin",
                notesToDownload:"",
                content:[
                    {

                    }
                ]
            },
            {
                heading:"GUI with XML",
                notesToDownload:"",
                content:[
                    {

                    }
                ]
            },
            {
                heading:"Start with Development",
                content:[
                    {
                        nameOfContent:"Building first Android Appliction",
                        url:"7pcKH0cQE6Y"//https://www.youtube.com/watch?v=7pcKH0cQE6Y&list=PLVTsfY7Kr9qimoaNmBCQQcvNi49EoKTWS&index=1&pp=iAQB
                    },
                    {
                        nameOfContent:"Activity and Layout file structure",
                        url:"ggOBMRTWlhQ"//https://www.youtube.com/watch?v=ggOBMRTWlhQ&list=PLVTsfY7Kr9qimoaNmBCQQcvNi49EoKTWS&index=3&pp=iAQB
                    },
                    {
                        nameOfContent:"Text, String and View Binding",
                        url:"pPl2dq3vLfg"       //https://www.youtube.com/watch?v=pPl2dq3vLfg&list=PLVTsfY7Kr9qimoaNmBCQQcvNi49EoKTWS&index=5&pp=iAQB
                    },
                    {
                        nameOfContent:"Working with Images in Kotlin",
                        url:"qFUWC3dA3JE"       //https://www.youtube.com/watch?v=qFUWC3dA3JE&list=PLVTsfY7Kr9qimoaNmBCQQcvNi49EoKTWS&index=6&pp=iAQB
                    },
                    {
                        nameOfContent:"Styles and Themes",
                        url:"ynOUzHFFMeg"       //https://www.youtube.com/watch?v=ynOUzHFFMeg&list=PLVTsfY7Kr9qimoaNmBCQQcvNi49EoKTWS&index=7&pp=iAQB
                    },
                    {
                        nameOfContent:"Architecture Life cycle events",
                        url:"CkSt6ql2rrM"       //https://www.youtube.com/watch?v=CkSt6ql2rrM&list=PLVTsfY7Kr9qimoaNmBCQQcvNi49EoKTWS&index=8&pp=iAQB
                    },
                    {
                        nameOfContent:"Intent: Explicit and implicit",
                        url:"VzUjz9xdVDI"       //https://www.youtube.com/watch?v=VzUjz9xdVDI&list=PLVTsfY7Kr9qimoaNmBCQQcvNi49EoKTWS&index=9&pp=iAQB
                    },
                    {
                        nameOfContent:"View Model and Live Data",
                        url:"dMYmZUgncVM"       //https://www.youtube.com/watch?v=dMYmZUgncVM&list=PLVTsfY7Kr9qimoaNmBCQQcvNi49EoKTWS&index=10&pp=iAQB
                    },
                ]
            },
            {
                heading:"SQLite in Andriod",
                notesToDownload:"",
                content:[
                    {

                    }
                ]
            },
            {
                heading:"What is Firebase",
                notesToDownload:"",
                content:[
                    {

                    }
                ]
            },
        ]


    },
    {
        id:3,
        name:"Data Science",
        skillToGain: "Python programming, Data science, Data analysis, R programming",
        star:4.0,
        type:"Beginner",
        duration: 6,
        src:dataScience,
        heading:"Join the real time analysis of data with Data Science",
        instructor:{
            name:"Lohitaksh Gupta",
            img:lohikatash,
            company:microsoft,
            companyName:"Microsoft"
        },
        skill:["Python","programming","R", "Data Analysis" , "Numpy","Panda","Matplolib","Data science"]



    },
    {
        id:4,
        name:"Java Programming",
        skillToGain: "core java, Threads in java, file handling, collections and many more",
        star:4.8,
        type:"Beginner",
        duration: 2,
        src:javaProgram,
        heading:"Start with core concept in programming with python",
        instructor:{
            name:"Amanpreet Singh",
            img:aman,
            company:"https://mentors-omni.s3.amazonaws.com/karan_comp+1.svg",
            companyName:"amazon"
        },
        skill:["Core concept","contional statements","Loops","Threading","File handling","Integface","Class and object","Collections"]


    },
    {
        id:5,
        name:"Python Programming",
        skillToGain: "Introduction to programming with python, threading, numpy, panda and other packages",
        star:4.6,
        type:"Beginner",
        duration: 2,
        src:pythonProgram,
        heading:"Start with core concept in programming with python",
        instructor:{
            name:"Karanpreet Singh",
            img:karan,
            company:"https://mentors-omni.s3.amazonaws.com/aman_comp+1.svg",
            companyName:"Goldman Sach"
        },
        skill:["contional statements","Loops","List","sets","Dictionary","Threading","File handling","OOPS concept"]




    },
    {
        id:6,
        name:"DSA Roadmap",
        skillToGain: "Array, Linked list, stack, queues, trees and graphs",
        star:4.9,
        type:"Beginner",
        duration: 3,
        src:dsa,
        heading:"Enhance your skills in DSA through essential problems",
        instructor:{
            name:"Vishmita Shetty",
            img:vishmita,
            company:upstox,
            companyName:"Upstox"
        },
        skill:["Array","Linked List","stack","Queue","Tree","Graph","Heap"]

    },
    
   
]