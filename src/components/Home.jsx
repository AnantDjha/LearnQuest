import { useRef, useState, useEffect } from "react";
import "./Home.css";
import insurance from "../assets/insurance.png";
import progress from "../assets/graphic-progression.png";
import expert from "../assets/reading-book.png";
import video from "../assets/VideoIntro.mp4";
import { Link } from "react-router-dom";
import { courses } from "../AllTheCourses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useAnimation, useInView, motion } from "framer-motion";

export default function Home() {
  const [comment, setComment] = useState(localStorage.getItem("comment") || "");
  const commentRef = useRef();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  
  // Refs for each section to track if they are in view
  const motionRef1 = useRef(null);
  const inView1 = useInView(motionRef1, { once: true });
  const motionRef2 = useRef(null);
  const inView2 = useInView(motionRef2, { once: true });
  const motionRef3 = useRef(null);
  const inView3 = useInView(motionRef3, { once: true });
  const motionRef4 = useRef(null);
  const inView4 = useInView(motionRef4, { once: true });
  const motionRef5 = useRef(null);
  const inView5 = useInView(motionRef5, { once: true });
  const motionRef6 = useRef(null);
  const inView6 = useInView(motionRef6, { once: true });

  // Animation settings
  const animate = {
    opacity: [0, 1],
    position: "relative",
    top: ["10rem", "0"],
    transition: { duration: 0.45, delay: 0.15 },
  };

  // Handles comment submission
  const onSubmit = () => {
    if (comment === "") {
      commentRef.current.style.borderBottom = "2px solid red";
      return;
    } else {
      localStorage.setItem("comment", comment);
    }
  };

  useEffect(() => {
    // Trigger animations based on which section is in view
    if (inView5) {
      controls5.start(animate);
    } else if (inView6) {
      controls6.start(animate);
    } else if (inView4) {
      controls4.start(animate);
    } else if (inView2) {
      controls2.start(animate);
    } else if (inView3) {
      controls3.start(animate);
    } else if (inView1) {
      controls1.start(animate);
    }
  }, [inView1, inView2, inView3, inView4, inView5, inView6]);

  return (
    <div className="mainHome">
      {/* Intro Section */}
      <motion.div className="intro" >
        <div className="content" ref={motionRef1}>
          <motion.div className="heading" animate={controls1} style={{opacity:0}}>
            <h1>Fuel your ambition</h1>
            <h3>
              Make a decision and catalyst your career with Coursify platform by
              taking part in in-demand skills programs and accelerate learning.
            </h3>
            <Link to="/courses">Explore courses</Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.div className="introduction" ref={motionRef3} animate={controls3}>
        <h1>Introduction to Coursify the Online Platform</h1>
        <div className="intoDiv">
          <p>
            Welcome to our dynamic online course platform! We believe that
            learning isn’t just about theory. Our courses blend solid
            theoretical foundations with practical examples. You’ll dive into
            concepts, theories, and frameworks, but we won’t stop there. We’ll
            show you how to apply them in real scenarios. Learning by doing is
            our mantra. Each course includes hands-on projects, simulations, and
            case studies.
          </p>
        </div>
      </motion.div>

      {/* Feature Boxes */}
      <motion.div className="boxes" animate={controls2} ref={motionRef2}>
        <div className="containers">
          <i>
            <img src={expert} alt="" />
          </i>
          <h1>Become a Learning Expert</h1>
          <p>
            Our Advanced Learning program trains you to master new skills
            efficiently. Get step-by-step guidance through our platform and
            access in-depth resources at your fingertips.
          </p>
        </div>
        <div className="containers">
          <i>
            <img src={progress} alt="" />
          </i>
          <h1>Know Your Progress</h1>
          <p>
            Our Smart Learning Tools and Progress Trackers (coming soon) capture
            real-time learning data, helping you stay on top of your educational
            journey during the most critical stages.
          </p>
        </div>
        <div className="containers">
          <i>
            <img src={insurance} alt="" />
          </i>
          <h1>Personalize Your Learning</h1>
          <p>
            Tailor your educational journey to meet your unique needs. Track
            your progress in real-time and adapt your study methods, materials,
            and schedule to achieve the best results.
          </p>
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div className="origin" >
        <motion.div className="videoContainer" animate={controls4} style={{opacity:0}}>
          <div className="video" >
            <video src={video} controls></video>
          </div>
          <motion.div className="con" animate={controls4} style={{opacity:0}}>
            <h1>Discover the Learning</h1>
            <p ref={motionRef4}>
              Discover the future of learning with our online course app. If you
              want to learn more about the benefits and features of our
              platform, watch the following video. Let us guide you through how
              our app can transform your educational journey!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Recommended Courses Section */}
      <div className="white">
        <motion.div className="someCourse" animate={controls6} ref={motionRef6}>
          <h1>Recommended Professional Programs</h1>
          <div className="programs">
            {courses
              .filter((a) => a.id < 4)
              .map((item, i) => {
                return (
                  <Link className="box-p" key={i}>
                    <img src={item.src} alt="" />
                    <div className="box-detail">
                      <h3>{item.name}</h3>
                      <span>Skills you will gain: {item.skillToGain}</span>
                      <span>
                        {item.star}{" "}
                        <i
                          className="fa fa-star fa-sm"
                          style={{ color: "rgb(253, 211, 2)" }}
                        ></i>
                      </span>
                      <span>Course type: {item.type}</span>
                      <span>Duration: {item.duration} months</span>
                    </div>
                  </Link>
                );
              })}
          </div>
          <Link className="more">
            Explore more courses <i>&rarr;</i>
          </Link>
        </motion.div>
      </div>

      {/* Signup Section */}
      <motion.div className="signup" animate={controls5} ref={motionRef5}>
        <div className="email">
          <div className="enterEmail">
            <h1>
              Please leave a comment with any suggestions for interface
              improvements or any questions you have about the site.
            </h1>
            <p>
              {comment ? (
                <span>Thank you for your response!</span>
              ) : (
                <>
                  <input
                    ref={commentRef}
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />{" "}
                  <button onClick={onSubmit}>&rarr;</button>
                </>
              )}
            </p>
          </div>
        </div>
        <div className="contact">
          <div className="contactCard">
            <div className="contact-options">
              <h3>Contact us</h3>
              <span>
                <a href="tel:+919028828688">
                  <FontAwesomeIcon icon={faPhone} />
                </a>
                <a href="mailTo:anantjha0112@gmail.com">
                  <FontAwesomeIcon icon={faMailBulk} />
                </a>
              </span>
            </div>
            <div className="para">
              <span>
                Get help with questions about purchasing, registering, and
                creating your own course.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
