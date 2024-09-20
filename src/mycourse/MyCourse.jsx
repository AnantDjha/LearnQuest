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
import Loader from "../loader/Loader"


export default function MyCourse() {

    const [loading , setLoading] = useState(true);
    const [course, setCourse] = useState([])
    const [videoNumber, setVideoNumber] = useState([])
    const { user } = useContext(userContext)
    const navigate = useNavigate()

    // fetch courses that are purchased
    const getMyCourses = () => {
        axios.defaults.withCredentials = true
        axios.get("https://learnquest-backend-i922.onrender.com/course",{
            headers:{
                "Authorization" : "Bearer " + localStorage.getItem("token")
            }
        })
            .then((res) => {

                if (res.data.completed) {
                    let list = res.data.courses
                    setVideoNumber(list)

                    const updated = list.map(element => {
                        return courses.find(a => a.id === element.id);
                    }).filter(item => item !== undefined);

                    setCourse(updated)
                    setLoading(false)
                }
            })
            .catch((e) => {
                alert("something went wrong" + e)
                setLoading(false)
            })
    }

    useEffect(() => {
        if(!user)
        {
            navigate("/")
            navigate("/my-course")
            
        }
        else if (!user?.valid) {
            navigate("/login")
            return;
        }
        getMyCourses()
    }, [])

    if (course.length == 0) {
        return (
            <>
              <div className="forNav">

                </div>
                <div className="empty-saved">
                    <div>
                        <h3>No Enrolled courses</h3>
                        <p>Explore courses and start your learning journey boost your career.</p>
                        <Link to="/courses">Explore</Link>
                    </div>
                </div>
            </>
        )
    }
    return (

        loading? <Loader/>
        : 
        courses.length == 0 ?  <>
        <div className="forNav">

          </div>
          <div className="empty-saved">
              <div>
                  <h3>No Enrolled courses</h3>
                  <p>Explore courses and start your learning journey boost your career.</p>
                  <Link to="/courses">Explore</Link>
              </div>
          </div>
      </>
        :<div className="mainSaved">
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
                <div className="savedCourse" style={{ height: "fitContent" }}>
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
                                                    value={(videoNumber.find(q => q.id == item.id)?.module / item.noOfVideos) * 100}
                                                    styles={buildStyles({
                                                        pathColor: '#83638C',
                                                        trailColor: '#eee'
                                                    })}
                                                >
                                                    <div style={{ marginLeft: "0.3rem", marginBottom: "0.8rem" }}>
                                                        <strong>{`${parseInt((videoNumber.find(q => q.id == item.id)?.module / item.noOfVideos) * 100)}%`}</strong>
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