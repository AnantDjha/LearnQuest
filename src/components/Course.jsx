import "./Team.css"
import profile from "../assets/profile.jpg"
import phone from "../assets/iconOfPhone.png"
import email from "../assets/logoOfEmail.png"
import microsoft from "../assets/microsoft.png"
import lohikatash from "../assets/lohitaksh.jpeg"
import aditya from "../assets/aditya.jpeg"
import manjot from "../assets/manjot.jpeg"
import ola from "../assets/ola.png"
import lauren from "../assets/lauren.png"
import aman from "../assets/amanpreet.jpeg"
import karan from "../assets/karan.jpeg"
import vishmita from "../assets/vishmita.jpeg"
import upstox from "../assets/upstops.png"
import amazon from "../assets/amazon.png"
import { Link } from "react-router-dom"
import dataScience from "../assets/dataScienceProgram.png"
import webDevProgram from "../assets/webDevProgram.png"
import androidDevProgram from "../assets/androidDevProgram.jpg"
import "./Course.css"
import dsa from "../assets/dsaProgram.png"
import javaProgram from "../assets/javaProgram.jpg"
import pythonProgram from "../assets/pythonProgram.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { courses } from "../AllTheCourses.js"


export default function Course() {
    return (
        <div className="mainCourses">
            <h1>There are some of the courses you may like</h1>
            <div className="programsOfCourse">

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





            </div>
        </div>
    )
}