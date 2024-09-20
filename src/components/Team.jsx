import "./Team.css"
import profile from "../assets/profile.jpg"
import phone from "../assets/iconOfPhone.png"
import email from "../assets/logoOfEmail.png"
import microsoft from "../assets/microsoft.png"
import lohikatash from "../assets/lohitaksh.jpeg"
import aditya from "../assets/aditya.jpeg"
import manjot from "../assets/manjot.jpeg"
import ola from "../assets/ola.png"
import lauren from "../assets/lauren.png"
import aman from "../assets/amanpreet.jpeg"
import karan from "../assets/karan.jpeg"
import vishmita from "../assets/vishmita.jpeg"
import upstox from "../assets/upstops.png"
import { motion } from "framer-motion"

export default function Team() {
    return (
        <div className="mainTeam" >
            <h1>Meet our Team!</h1>
            <motion.div className="teamDiv" initial = {{opacity:0 , position:"relative" , top:"10rem"}}  animate={{opacity:1, top:0}} transition={{duration:0.5 , delay:0.18}}>
                <div className="teamNameCard">
                    <img src={lohikatash} alt="" />
                    <h3>Lohitaksh Gupta</h3>
                    <h4>SDE II</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum explicabo voluptas voluptatem?</p>
                    <b><img src={microsoft} alt="" /> Microsoft</b>
                    
                </div>
                <div className="teamNameCard">
                    <img src={aditya} alt="" />
                    <h3>Aditya Srivastava</h3>
                    <h4>SDE II</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum explicabo voluptas voluptatem?</p>
                    <b><img src={ola} alt="" style={{width:"22px",height:"22px",borderRadius:"50%"}}/> Ola Electric</b>
                    
                </div>
                <div className="teamNameCard">
                    <img src={manjot} alt="" />
                    <h3>Manjot Singh</h3>
                    <h4>Technical lead</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum explicabo voluptas voluptatem?</p>
                    <b><img src={lauren} alt="" style={{width:"22px",height:"22px",borderRadius:"50%"}}/> Lauren</b>
                    
                </div>
                <div className="teamNameCard">
                    <img src={vishmita} alt="" />
                    <h3>Vishmita Shetty</h3>
                    <h4>SDE II</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum explicabo voluptas voluptatem?</p>
                    <b><img src={upstox} alt="" style={{width:"25px",height:"25px",borderRadius:"50%"}} /> Upstox</b>
                    
                </div>
                <div className="teamNameCard">
                    <img src={aman} alt="" />
                    <h3>Amanpreet Singh</h3>
                    <h4>SDE II</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum explicabo voluptas voluptatem?</p>
                    <b><img src="https://mentors-omni.s3.amazonaws.com/karan_comp+1.svg" alt="" style={{width:"60px",height:"30px",borderRadius:"50%"}} /></b>
                    
                </div>
                <div className="teamNameCard">
                    <img src={karan} alt="" />
                    <h3>Karanpreet Singh</h3>
                    <h4>SDE II</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum explicabo voluptas voluptatem?</p>
                    <b><img src="https://mentors-omni.s3.amazonaws.com/aman_comp+1.svg" alt="" style={{width:"100px",height:"30px",borderRadius:"50%"}} /> </b>
                    
                </div>
                
            </motion.div>
        </div>
    )
}