import { useParams } from "react-router-dom"
import "./Video.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"
import useWindowSize from "./useWindoSize";
import NavBar from "../components/NavBar"
import { courses } from "../AllTheCourses";
import { faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"



export default function Video() {

    const homeAndNameRef = useRef()
    const footRef = useRef()
    const actualListRef = useRef()
    const { width, height } = useWindowSize();
    const navRef = useRef()
    const forNavRef = useRef()
    const param = useParams()
    const frameRef = useRef()
    const [state, setState] = useState(true)
    const paramUrl = param.uri.substring(0, param.uri.indexOf("@"))
    const nameOfCourse = courses.find(course =>
        course.modules.some(module =>
            module.content.some(content =>
                content.url === paramUrl
            )
        )
    )?.name

    const nameOfContent = courses.find(course =>
        course.modules.some(module =>
            module.content.some(content =>
                content.url === paramUrl
            )
        )
    )?.modules.find(module =>
        module.content.some(content =>
            content.url === paramUrl
        )
    )?.content.find(content =>
        content.url === paramUrl
    )?.nameOfContent

    
    return (
        <div className="mainVideo">
            <div className="forNav" ref={forNavRef}>
            </div>
            <div className="homeAndName  andand" ref={homeAndNameRef}>
                <p><span style={{ marginLeft: "0" }}><FontAwesomeIcon icon={faHomeAlt} style={{ fontSize: "14px" }} /></span>{"/"} <span>Browse</span> {"/"} <span>course</span> {"/"} <span> {courses.find(course =>
                    course.modules.some(module =>
                        module.content.some(content =>
                            content.url === paramUrl
                        )
                    )
                )?.name}</span>{"/"}
                    <span>
                        {
                            courses.find(course =>
                                course.modules.some(module =>
                                    module.content.some(content =>
                                        content.url === paramUrl
                                    )
                                )
                            )?.modules.find(module =>
                                module.content.some(content =>
                                    content.url === paramUrl
                                )
                            )?.content.find(content =>
                                content.url === paramUrl
                            )?.nameOfContent
                        }
                    </span>
                </p>
            </div>
            <div className="videoAndList">
                <div className="video" ref={frameRef} >
               
                <iframe width="420" height="315" allowFullScreen={true}
                    src={`https://www.youtube.com/embed/${paramUrl}`}>
                </iframe>
            </div>
            <div className="listOfOtherModule" ref={actualListRef}>
                <h3>Related Tutorials</h3>
                <div className="actualList" >
                    {
                        courses.find(ccc => ccc.name === nameOfCourse)
                        .modules.find(n => n.heading == decodeURIComponent(param.uri.substring(param.uri.indexOf("@") + 1).replace("%20", " "))).content.map(video =>{
                            return (
                               video.nameOfContent !== nameOfContent
                               &&
                               <Link className="linkToVideo" key={video.url} to={`/video-module/${video.url}@${decodeURIComponent(param.uri.substring(param.uri.indexOf("@") + 1).replace("%20", " "))}`}>
                                    <p >{video.nameOfContent}</p>
                                </Link>
                            )
                           })
                    }
                </div>
            </div>
            </div>
            <div className="nav" ref={navRef}>
                <NavBar />
            </div>
            <div className="foot" style={{marginTop:"3rem"}} ref={footRef}>
                <Footer/>
            </div>
        </div>
    )
}