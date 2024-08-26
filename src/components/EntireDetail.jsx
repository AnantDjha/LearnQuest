import "./EntireDetail.css"
import { courses } from "../AllTheCourses"
import { useNavigate, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faHome, faHomeAlt, faLanguage } from "@fortawesome/free-solid-svg-icons"
import { useContext, useEffect, useState } from "react"
import Modules from "./Modules"
import axios from "axios"
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { userContext } from "../context/UserContext"


export default function EntireDetail({ courseIsBuyed, savedCourses }) {

    const param = useParams()
    const course = courses.filter(a => a.id === parseInt(param.id))[0];
    const [program, setProgram] = useState(course);
    const animation = useAnimation()
    const [isSaved, setIsSaved] = useState(savedCourses)
    const navigate = useNavigate()
    const { user, setUser } = useContext(userContext)

    const saveTheCourse = () => {
        axios.defaults.withCredentials = true;
        axios.post("http://localhost:5000/saveThisCourse", { id: course.id },
            {
                "content-type": "application/json"
            }
        )
            .then((res) => {
                console.log(res.data);

                if (res.data.completed) {
                    getSavedCourse()
                }
            })
            .catch((e) => {
                alert("something went wrong")
            })
    }

    const getSavedCourse = () => {
        axios.defaults.withCredentials = true
        axios.get("http://localhost:5000/get-saved-courses")
            .then((res) => {
                if (!res.data.noSession) {
                    setIsSaved(res.data.dataArr)
                }

            })
            .catch((e) => {
                console.log(e);

            })
    }

    const handleSave = async () => {
        if (!user || !user.valid) {
            navigate("/login")
            return
        }
        animation.start({
            position: "relative",
            top: [0, "-8rem"],
            transition: { duration: 0.5, ease: 'easeInOut' }
        });

        saveTheCourse();  // Ensure saveTheCourse is completed
        await new Promise(resolve => setTimeout(resolve, 700));  // Wait for 700ms


        animation.start({
            width: "7rem",
            position: "relative",
            top: ["8rem", 0],
            opacity: [0, 1],
            transition: { duration: 0.3, ease: 'easeInOut' }
        });
    };

    useEffect(() => {
        getSavedCourse()
    }, [])
    return (
        <div className="mainEntireDetail">
            <div className="forNav"></div>
            <div className="homeAndName">
                <p>
                    <span style={{ marginLeft: "0" }}>
                        <FontAwesomeIcon icon={faHomeAlt} style={{ fontSize: "14px" }} />
                    </span>{"/"}
                    <span>Browse</span> {"/"}
                    <span>course</span> {"/"}
                    <span>{course.name}</span>
                </p>
            </div>

            <div className="headerContent">
                <div className="firstSection">
                    <img src={course.src} alt="" />
                    <h1>{course.heading}</h1>
                    <p>
                        <FontAwesomeIcon icon={faLanguage} style={{ color: "#83638C" }} />
                        Taught in English | No Translation is available
                    </p>
                    {courseIsBuyed.courses.find(i => i.id === parseInt(param.id)) ? (
                        <button disabled={true}>Already Enrolled</button>
                    ) : (
                        <button>Enroll and start now</button>
                    )}
                    <p>Lots have already enrolled</p>
                </div>
                <div className="secondSection">
                    <div className="instructor">
                        <h4>Course</h4>
                        <p>Gain insight of top and Learn concept</p>
                        <hr />
                        <span>
                            <img src={program.instructor.img} alt="" />
                            <b>Instructor: {program.instructor.name}</b>
                        </span>
                        <p className="company">
                            <img src={program.instructor.company} alt="" />
                            <span>{program.instructor.companyName}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="cards">
                <div className="level">
                    <h3>{program.type} level</h3>
                    <p>Required experience</p>
                </div>
                <div className="durationLevel">
                    <h3>{program.duration} Months</h3>
                    <p>10 hours per week</p>
                </div>
                <div className="pace">
                    <h3>Flexible schedule</h3>
                    <p>Learn at your own pace</p>
                </div>
            </div>
            <div className="skillsSection">
                <h2>Skill to learn</h2>
                <div className="strs">
                    {program.skill.map((str, index) => (
                        <p key={index}>{str}</p>
                    ))}
                </div>
            </div>

            <Modules modules={program.modules} courseIsBuyed={courseIsBuyed} />

            <div className="buyerAndSaver">
                <div className="buttonToBuy">
                    <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
                        {!courseIsBuyed.courses.find(i => i.id === parseInt(param.id)) && <><button className="enrollBtn">Enroll</button><p><span>₹ {course.price}.0</span> <b>₹ {((course.price * 100) / (100 - course.discount)).toFixed(2)}</b></p></>}
                    </div>
                    <motion.button className="saver"
                        animate={animation}
                        onClick={handleSave}
                        disabled={isSaved.indexOf(course.id) != -1}
                    >
                        {isSaved.find(a => a === course.id) != null ? <FontAwesomeIcon icon={faCheckCircle} color="green" size="lg" /> : <i className="fa fa-bookmark" aria-hidden={false} />}
                        <span>{isSaved.find(a => a === course.id) != null ? "saved" : "save"}</span>
                    </motion.button>
                </div>
            </div>

        </div>
    )
}
