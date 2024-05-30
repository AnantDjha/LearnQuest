import { useRef, useState, useEffect } from "react"
import "./Home.css"
import insurance from "../assets/insurance.png"
import progress from "../assets/graphic-progression.png"
import expert from "../assets/reading-book.png"
import video from "../assets/VideoIntro.mp4"
import tp from "../assets/lpi.png"
import { Link } from "react-router-dom"
import arrow from "../assets/arrow.png"
import dataScience from "../assets/dataScienceProgram.png"
import webDevProgram from "../assets/webDevProgram.png"
import androidDevProgram from "../assets/androidDevProgram.jpg"

export default function Home() {


  return (
    <div className="mainHome" >
      <div className="intro">
        <div className="content">
          <div className="heading">
            <h1>Fuel your ambition</h1>
            <h3>Make a decision and catalyst your career with coursify paltform by taking part in In-demand skills making programs and accelarate learning</h3>
            <Link to="/courses">Explore courses</Link>
          </div>
        </div>
      </div>

      <div className="introduction">
        <h1>Intoduction to  Coursify the online platform</h1>
        <div className="intoDiv">
          <p>
            Welcome to our dynamic online course platform! We believe that learning isn’t just about theory.
            Our courses blend solid theoretical foundations with practical examples.
            You’ll dive into concepts, theories, and frameworks, but we won’t stop there. We’ll show you how to apply them in real scenarios.
            Learning by doing is our mantra. Each course includes hands-on projects, simulations, and case studies.
          </p>
        </div>
      </div>

      <div className="boxes">
        <div className="containers">
          <i><img src={expert} alt="" /></i>

          <h1>Become a Learning Expert</h1>
          <p>Our Advanced Learning program trains you to master new skills efficiently. Get step-by-step guidance through our platform and access in-depth resources at your fingertips.</p>
        </div>
        <div className="containers">
          <i><img src={progress} alt="" /></i>
          <h1>Know Your Progress</h1>
          <p>Our Smart Learning Tools and Progress Trackers (coming soon) capture real-time learning data, helping you stay on top of your educational journey during the most critical stages.</p>
        </div>
        <div className="containers">
          <i><img src={insurance} alt="" /></i>

          <h1>Personalize Your Learning</h1>
          <p>Tailor your educational journey to meet your unique needs. Track your progress in real-time and adapt your study methods, materials, and schedule to achieve the best results.</p>
        </div>
      </div>

      <div className="origin"> <div className="videoContainer">
        <div className="video">
          <video src={video} controls></video>
        </div>
        <div className="con">
          <h1>Discover the learning</h1>
          <p>Discover the Future of Learning with Our Online Course App if you want to learn more about the benefits and features of our platform, watch the following video. Let us guide you through how our app can transform your educational journey!</p>
        </div>
      </div></div>

      <div className="white"><div className="someCourse">
        <h1>
        Recommended Professional Programs
        </h1>
        <div className="programs">
          <Link className="box-p">
            <img src={webDevProgram} alt="" />
            <div className="box-detail">
              <h3>Web development</h3>
              <span>Skills you will gain: HTML, CSS, javascript, react.js, node.js and mongoDB</span>
              <span>4.8 stars</span>
              <span>Course type: Beginner</span>
              <span>Duration: 6 months</span>
            </div>
          </Link>
          <Link className="box-p">
          <img src={androidDevProgram} alt="" />
            <div className="box-detail">
            <h3>Android Development</h3>
            <span>Skills you will gain: Java, Kotlin, Android SDK, firebase and SQLite</span>
            <span>4.5 stars</span>
            <span>Course type: Beginner</span>
              <span>Duration: 4 months</span>
            </div>
          </Link>
          <Link className="box-p">
          <img src={dataScience} alt="" />
            <div className="box-detail">
            <h3>Data Science</h3>
            <span>Skills you will gain: Python programming, Data science. Data analysis, R programming</span>
            <span>4.7 stars</span>
            <span>Course type: Beginner</span>
              <span>Duration: 6 months</span>
            </div>
          </Link>
        </div>
        <Link className="more">Explore more courses <i>&rarr;</i></Link>
      </div></div>

      <div className="signup">
        <div className="email">
           <div className="enterEmail">
            <h1>Sign up for news, course updates and support for all stages of development.</h1>
            <p><input type="text" /><button>&rarr;</button></p>
           </div>
        </div>
        <div className="contact">
          <div className="contactCard">
             <div className="contact-options">
              <h3>Contact us</h3>
              <span><button></button><button></button><button></button></span>
             </div>
             <div className="para">
                <span>
                Get help with questions about purchasing, registering and creating own course.
                </span>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}