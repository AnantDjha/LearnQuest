import { useContext, useEffect, useRef, useState } from "react"
import "./Module.css"
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowCircleDown, faDownload, faFileVideo, faLock, faNotesMedical, faVideo, faVideoCamera, faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { userContext } from "../context/UserContext";
import axios from "axios";
export default function Modules({ modules, courseIsBuyed }) {

    const [inUse, setInUse] = useState(null);
    const boldRef = useRef(null)
    const [visible, setVisible] = useState(null)
    const param = useParams()
    const [videoUrlArray , setVideoUrlArray] = useState(modules)
    // const { user, setUser } = useContext(userContext);

    const handleClick = (id) => {
        if (inUse === id) {
            setInUse(null)
        }
        else {
            setInUse(id)
        }
    }

    const handleChange = (url)=>{
        axios.defaults.withCredentials = true;

        axios.post("https://learnquest-backend-i922.onrender.com/checkTheBox" , {value:url,id:parseInt(param.id)} , {

            "content-type" : "application/json"
        })
        .then((data)=>{
            if(data.data.completed)
            {
                getTheChecked()
            }
        })
        .catch((e)=>{
            alert("something went wrong")
        })
    }

    useEffect(()=>{
        getTheChecked()
    },[])
    const getTheChecked = ()=>{
        axios.defaults.withCredentials = true

        axios.get("https://learnquest-backend-i922.onrender.com/getModule").
        then((res)=>{
            
            setVideoUrlArray(res.data)
        })
    }

    return (
        <div className="mainModule">
            <div className="containerOfModule">
                <h2>There are {modules.length} modules in the program</h2>
                {modules.map(item => {
                    return (
                        <div className="moduleText" key={item.heading} >
                            <h3 onClick={() => {
                                if (!courseIsBuyed.courses.find(i => i.id == parseInt(param.id))) return;
                                handleClick(item.heading)
                            }} onMouseEnter={() => {
                                setVisible(item.heading);
                            }}
                                onMouseLeave={() => {
                                    setVisible(null);
                                }}>
                                {item.heading}
                                <b
                                    style={{ display: visible == item.heading ? "inline" : "none" }}
                                    ref={boldRef}

                                >
                                    {!courseIsBuyed.courses.find(i => i.id == parseInt(param.id)) ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faArrowCircleDown} />}
                                </b>
                            </h3>
                            {inUse === item.heading && <motion.div className="instruction" initial={{ height: "0", overflow: "hidden" }} animate={{ height: "auto" }} transition={{ duration: 0.3 }}>
                                <div className="lengthAndNotes">
                                    <div>
                                        <p><FontAwesomeIcon icon={faVideo} /> <b>{item.content.length} videos</b></p>
                                        <p><FontAwesomeIcon icon={faNotesMedical} /> <b>1 study material</b></p>
                                    </div>
                                    <Link to={item.notesToDownload} target="_blank"><p>Notes <FontAwesomeIcon icon={faDownload} /></p></Link>
                                </div>
                                {item.content.map(video => {
                                    return (
                                        <div className="linlToVideo" key={video.url} >
                                            <input type="checkbox" style={{ marginLeft: "1rem" }} 
                                                checked = {videoUrlArray.indexOf(video.url) != -1}
                                                onChange={()=>{handleChange(video.url)}}
                                            />
                                            <Link to={`/video-module/${video.url}@${item.heading}`}>{video.nameOfContent}</Link>
                                            {video.solve && <p><span>Solve</span><span>Code</span></p>}
                                        </div>
                                    )
                                })}
                            </motion.div>}

                        </div>
                    )
                })}
            </div>
        </div>
    )
}