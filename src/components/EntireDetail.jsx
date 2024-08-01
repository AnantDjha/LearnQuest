import "./EntireDetail.css"
import { courses } from "../AllTheCourses"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faHomeAlt, faLanguage } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Modules from "./Modules"


export default function EntireDetail() {

    const param = useParams()
    const [program, setProgram] = useState(courses.filter(a => a.id == parseInt(param.id))[0])


    return (
        <div className="mainEntireDetail">
            <div className="forNav">
            </div>
            <div className="homeAndName">
                <p><span style={{ marginLeft: "0" }}><FontAwesomeIcon icon={faHomeAlt} style={{ fontSize: "14px" }} /></span>{"/"} <span>Browse</span> {"/"} <span>course</span> {"/"} <span> {courses.filter(a => a.id == parseInt(param.id))[0].name}</span></p>
            </div>


            <div className="headerContent">
                <div className="firstSection">
                    <img src={courses.filter(a => a.id == parseInt(param.id))[0].src} alt="" />
                    <h1>{courses.filter(a => a.id == parseInt(param.id))[0].heading}</h1>
                    <p><FontAwesomeIcon icon={faLanguage} style={{ color: "#83638C" }} /> Taught in English |  No Translation is avilable</p>
                    <button>
                        Enroll and start now
                    </button>

                    <p>Lots have already enrolled</p>

                </div>
                <div className="secondSection">
                    <div className="instructor">
                        <h4>Course</h4>
                        <p>Gain insight of top and Learn concept</p>
                        <hr />
                        <span><img src={program.instructor.img} alt="" /> <b>Instructor: {program.instructor.name}</b></span>
                        <p className="company"><img src={program.instructor.company} alt="" /> <p>{program.instructor.companyName}</p></p>
                    </div>
                </div>
            </div>

            <div className="cards">
                <div className="level">
                    <h3>{program.type} level</h3>
                    <p>Required exprience</p>
                </div>
                <div className="durationLevel">
                    <h3>{program.duration} Months</h3>
                    <p>10 hours per week</p>
                </div>
                <div className="pace">
                    <h3>Flexible schedule</h3>
                    <p>Lear at your own pace</p>
                </div>
            </div>
            <div className="skillsSection">
                <h2>
                    Skill to learn
                </h2>
                <div className="strs">
                    {
                        program.skill.map(str => {
                            return (
                                <p>{str}</p>
                            )
                        })
                    }
                </div>

            </div>

            <Modules modules={program.modules}/>
        </div>
    )
}