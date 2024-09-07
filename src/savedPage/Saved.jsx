import { faBookBookmark, faEnvelopeOpen, faHomeAlt, faSave, faShieldHalved, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons"
import "./Saved.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { courses } from "../AllTheCourses"
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export default function Saved() {
    const [course, setCourse] = useState([])
    const navigate = useNavigate()
    const [unSave, setUnSave] = useState(null)
    const [saved, setIsSaved] = useState([])

    const getSavedCourse = () => {
        axios.defaults.withCredentials = true
        axios.get("https://learnquest-backend-i922.onrender.com/get-saved-courses")
            .then((res) => {
                if (res.data.noSession) {
                    navigate("/login")
                }
                else {
                    let list = res.data.dataArr
                    setIsSaved(list)
                    const updated = list.map(element => {
                        return courses.find(a => a.id === element);
                    }).filter(item => item !== undefined);

                    setCourse(updated)
                }
            })
            .catch((e) => {
                console.log(e);

            })
    }

    const handleUnsave = (id) => {
        axios.defaults.withCredentials = true
        axios.post("https://learnquest-backend-i922.onrender.com/remove-saved-course", { id: id },
            {
                headers: { "content-type": "application/json" }
            }
        )
            .then((res) => {
                if (res.data.completed) {
                    getSavedCourse()
                }
            })
            .catch((e) => {
                console.log(e);

            })
    }

    useEffect(() => {
        getSavedCourse()
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
                    <span>Saved</span>
                </p>
            </div>
            <div className="contentOfSaved">
                <div className="savedCourse" style={{ height: "fitContent" }}>
                    <p className="headingSaved">
                        <span>Saved Courses</span>
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
                                        <div className="justRemove">
                                            <p><i className="fa fa-bookmark" aria-hidden="true" onMouseEnter={() => {
                                                setUnSave(i)
                                            }} onMouseLeave={() => {
                                                setUnSave(null)

                                            }}
                                                onClick={() => handleUnsave(item.id)}
                                            ><b style={{ display: unSave == i ? "inline" : "none", textDecoration: "none" }}>unsave</b></i></p>
                                            <p><span>₹ {item.price}.0</span> <b>₹ {((item.price * 100) / (100 - item.discount)).toFixed(2)}</b></p>
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