import "./Footer.css"
import { Link } from "react-router-dom"


export default function Footer() {
    return (
        <div className="footerMain">
            <div className="first">
                <div className="coursesOverview">
                    <h3>Available courses</h3>
                    <Link>Web developnment</Link>
                    <Link>Data Science</Link>
                    <Link>Android Program</Link>
                </div>
                <div className="brandOverview">
                    <h2>LearQuest</h2>
                    <Link to="/about">About</Link>
                    <Link to="/team">Team</Link>
                    <Link to="courses">courses</Link>
                </div>
            </div>
            <div className="last">
                <p>LeanQuest Copyright 2024</p>
                <p>
                    Terms of Use | Privacy Policy</p>
            </div>
        </div>

    )
}