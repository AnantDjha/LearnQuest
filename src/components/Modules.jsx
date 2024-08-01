import { useRef, useState } from "react"
import "./Module.css"
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowCircleDown, faDownload, faFileVideo, faNotesMedical, faVideo, faVideoCamera, faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Modules({ modules }) {

    const [inUse, setInUse] = useState(null);
    const boldRef = useRef(null)
    const [visible , setVisible] = useState(null)

    const handleClick = (id) => {
        if (inUse === id) {
            setInUse(null)
        }
        else {
            setInUse(id)
        }
    }

    return (
        <div className="mainModule">
            <div className="containerOfModule">
                <h2>There are {modules.length} modules in the program</h2>
                {modules.map(item => {
                    return (
                        <div className="moduleText" key={item.heading} >
                            <h3 onClick={() => {
                            handleClick(item.heading)
                        }}  onMouseEnter={() => {
                            setVisible(item.heading);
                        }}
                        onMouseLeave={() => {
                           setVisible(null);
                        }}>
                                {item.heading}
                                <b
                                    style={{ display: visible == item.heading ? "inline":"none" }}
                                    ref={boldRef}
                                   
                                >
                                    <FontAwesomeIcon icon={faArrowCircleDown} />
                                </b>
                            </h3>
                            {inUse === item.heading && <motion.div className="instruction" initial={{ height: "0", overflow: "hidden" }} animate={{ height: "auto" }} transition={{ duration: 0.3 }}>
                                <div className="lengthAndNotes">
                                    <div><p><FontAwesomeIcon icon={faVideo}/> <b>{item.content.length} videos</b></p>
                                    <p><FontAwesomeIcon icon={faNotesMedical}/> <b>1 study material</b></p></div>
                                <Link to ={item.notesToDownload} target="_blank"><p>Notes <FontAwesomeIcon icon={faDownload}/></p></Link>
                                </div>
                               {item.content.map(video =>{
                                return (
                                    <div className="linlToVideo" key={video.url} >
                                        <input type="checkbox" style={{marginLeft:"1rem"}}/>
                                        <Link to={`/video-module/${video.url}@${item.heading}`}>{video.nameOfContent}</Link>
                                        {video.solve &&<p><span>Solve</span><span>Code</span></p>}
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