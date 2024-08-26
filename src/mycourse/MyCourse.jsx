import { faBookBookmark, faEnvelopeOpen, faHomeAlt, faSave, faShieldHalved, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { courses } from "../AllTheCourses"
import { useContext, useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "./MyCourse.css"
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import axios from "axios"
import { userContext } from "../context/UserContext"

export default function MyCourse() {
    const [course, setCourse] = useState([])
    const [videoNumber , setVideoNumber] = useState([])
    const {user} = useContext(userContext)
    const navigate = useNavigate()

    // fetch courses that are purchased
    const getMyCourses = ()=>{
        axios.defaults.withCredentials = true
        axios.get("http://localhost:5000/get-course-detail")
        .then((res)=>{
            let list = res.data.courses
            setVideoNumber(list)
            
            const updated = list.map(element => {
                return courses.find(a => a.id === element.id);
            }).filter(item => item !== undefined);

            setCourse(updated)
        })
        .catch((e)=>{
            alert("something went wrong")
        })
    }

    useEffect(()=>{
        if(!user || !user.valid)
        {
            navigate("/login")
            return;
        }
        getMyCourses()
    }, [])
    return (

        <div className="mainSaved">
            <div className="forNav">

            </div>
            <div className="homeAndName">
                <p>
                    <span style={{ marginLeft: "0" }}>
                        <FontAwesomeIcon icon={faHomeAlt} style={{ fontSize: "14px" }} />
                    </span>{"/"}
                    <span>Browse</span> {"/"}
                    <span>course</span> {"/"}
                    <span>my courses</span>
                </p>
            </div>
            <div className="contentOfSaved">
                <div className="savedCourse" style={{ height:  "fitContent" }}>
                    <p className="headingSaved">
                        <span>My Courses</span>
                    </p>
                    {
                        course.map((item, i) => {
                            return (
                                <div className="boxForSaved" key={i} >
                                    <div className="imageSectionForSaved">
                                        <img src={item.src} alt="" onClick={() => {
                                            navigate("/course-detail/" + item.id)
                                        }} />
                                    </div>
                                    <div className="both">
                                        <div className="textSectionForSaved">
                                            <h3>{item.name}</h3>
                                            <span>Skills you will gain: {item.skillToGain}</span>
                                            <span>
                                                {item.star} <i className="fa fa-star fa-sm" style={{ color: "rgb(253, 211, 2)" }}></i>
                                            </span>
                                            <span>Course type: Beginner</span>
                                            <span>Duration: 6 months</span>
                                        </div>
                                        <div className="progress">
                                            <div className="dateOfPurchase">
                                                <span>Date: </span><span>12 - 07 - 2024</span>
                                            </div>
                                            <div className="bar">
                                                <CircularProgressbarWithChildren
                                                    value={(videoNumber.find(q => q.id == item.id)?.module /item.noOfVideos)*100}
                                                    styles={buildStyles({
                                                        pathColor: '#83638C',
                                                        trailColor: '#eee'
                                                    })}
                                                >
                                                    <div style={{ marginLeft:"0.3rem", marginBottom:"0.8rem" }}>
                                                        <strong>{`${videoNumber[i]?.module}%`}</strong>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <Link className="footerSaved" to="/courses"><span>Explore More Programs</span></Link>
                </div>
            </div>
        </div>
    )
}