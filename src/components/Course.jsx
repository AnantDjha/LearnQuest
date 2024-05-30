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
export default function Course() {
    return (
        <div className="mainCourses">
            <h1>There are some of the courses you may like</h1>
            <div className="programsOfCourse">
                
                
                    <Link className="box-p">
                        <img src={webDevProgram} alt="" />
                        <div className="box-detail">
                            <h3>Web development</h3>
                            <span>Skills you will gain: HTML, CSS, javascript, react.js, node.js and mongoDB</span>
                            <span>4.8 <FontAwesomeIcon icon={faStar} size="xs" style={{color:"rgb(253, 211, 2)"}}/></span>
                            <span>Course type: Beginner</span>
                            <span>Duration: 6 months</span>
                        </div>
                    </Link>
                    <Link className="box-p">
                        <img src={androidDevProgram} alt="" />
                        <div className="box-detail">
                            <h3>Android Development</h3>
                            <span>Skills you will gain: Java, Kotlin, Android SDK, firebase and SQLite</span>
                            <span>4.5 <FontAwesomeIcon icon={faStar} size="xs" style={{color:"rgb(253, 211, 2)"}}/></span>
                            <span>Course type: Beginner</span>
                            <span>Duration: 4 months</span>
                        </div>
                    </Link>
                    <Link className="box-p">
                        <img src={dataScience} alt="" />
                        <div className="box-detail">
                            <h3>Data Science</h3>
                            <span>Skills you will gain: Python programming, Data science. Data analysis, R programming</span>
                            <span>4.7 <FontAwesomeIcon icon={faStar} size="xs" style={{color:"rgb(253, 211, 2)"}}/></span>
                            <span>Course type: Beginner</span>
                            <span>Duration: 6 months</span>
                        </div>
                    </Link>
                    <Link className="box-p">
                        <img src={javaProgram} alt="" />
                        <div className="box-detail">
                            <h3>Java Programming</h3>
                            <span>Skills you will gain: core java, Threads in java, file handling, collections and many more</span>
                            <span>4.2 <FontAwesomeIcon icon={faStar} size="xs" style={{color:"rgb(253, 211, 2)"}}/></span>
                            <span>Course type: Beginner</span>
                            <span>Duration: 2 months</span>
                        </div>
                    </Link>
                    <Link className="box-p">
                        <img src={pythonProgram} alt="" />
                        <div className="box-detail">
                            <h3>Python Programming</h3>
                            <span>Skills you will gain: Introduction to programming with python, threading, numpy, panda and other packages</span>
                            <span>4.6 <FontAwesomeIcon icon={faStar} size="xs" style={{color:"rgb(253, 211, 2)"}}/></span>
                            <span>Course type: Beginner</span>
                            <span>Duration: 2 months</span>
                        </div>
                    </Link>
                    <Link className="box-p">
                        <img src={dsa} alt="" />
                        <div className="box-detail">
                            <h3>DSA Roadmap</h3>
                            <span>Skills you will gain: Array, Linked list, stack, queues, trees and graphs</span>
                            <span>4.9 <FontAwesomeIcon icon={faStar} size="xs" style={{color:"rgb(253, 211, 2)"}}/></span>
                            <span>Course type: Roadmap</span>
                            <span>Duration: 3 months</span>
                        </div>
                    </Link>

               
            </div>
        </div>
    )
}