import "./Team.css"
import { Link } from "react-router-dom"
import "./Course.css"
import { courses } from "../AllTheCourses.js"
import { motion } from "framer-motion"



export default function Course() {
    return (
        <div className="mainCourses">
            <h1>There are some of the courses you may like</h1>
            <motion.div className="programsOfCourse" initial = {{opacity:0 , position:"relative" , top:"10rem"}}  animate={{opacity:1, top:0}} transition={{duration:0.5 , delay:0.18}}>

                {
                    courses.map(item => {
                        return (
                            <Link to={`/course-detail/${item.id}`} className="box-p" key={item.id}>
                                <img src={item.src} alt="" />
                                <div className="box-detail">
                                    <h3>{item.name}</h3>
                                    <span>Skills you will gain: {item.skillToGain}</span>
                                    <span>
                                        {item.star} <i className="fa fa-star fa-sm" style={{color: "rgb(253, 211, 2)"}}></i>
                                           </span>
                                    <span>Course type: Beginner</span>
                                    <span>Duration: 6 months</span>
                                </div>
                            </Link>
                        )
                    })
                }





            </motion.div>
        </div>
    )
}