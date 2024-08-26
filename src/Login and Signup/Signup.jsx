import { useForm } from "react-hook-form"
import "./Login.css"
import loginImage from "../assets/signUpImg.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Signup() {
    const {
        register,
        handleSubmit,
        watch,
        setError,
        reset,
        formState: { errors, isSubmitting, }
    } = useForm()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [resultAfterSignup, setResultAfterSignup] = useState(null);
    const onSubmit = (data) => {

        axios.defaults.withCredentials = true;
        axios.post("http://localhost:5000/register", data, {
            headers: {

                "content-type": "application/json",
            },
            withCredentials: "true"

        })
            .then((result) => {
                reset()
                setResultAfterSignup(result.data)
            })
            .catch((err) => {
                alert("something went wrong"+err)
            })

    }
    return (
        <div className="mainLogin">
            <div className="forNav">

            </div>
            <div className="former">

                <motion.div className="loginform signupForm" initial={{postion:"relative",right:"28rem",opacity:0}} animate={{right:"0rem",opacity:1}} transition={{duration:0.5}}>
                    {resultAfterSignup != null &&  <motion.div >{resultAfterSignup.status ? <motion.div className="floaterMsg1" initial={{ height: 0, opacity: 0 }} animate={{ height: "3rem", opacity: 1 }} transition={{ duration: 0.3 ,delay:0.3}}>
                        {resultAfterSignup && resultAfterSignup.message}
                    </motion.div> : <motion.div className="floaterMsg2" initial={{ height: 0, opacity: 0 }} animate={{ height: "3rem", opacity: 1 }} transition={{ duration: 0.3 ,delay:0.3}}>
                        {resultAfterSignup && resultAfterSignup.message}
                    </motion.div>}</motion.div>
                    }
                    <div className="imageBox">
                        <img src={loginImage} alt="" />
                        <p>Create Account</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="detail">
                            <p>Enter Your Name</p>
                            <input type="text" {...register("name", {
                                required: { value: true, message: "name is required" }
                            })} />
                            {errors.name && <span>{errors.name.message}</span>}
                        </div>
                        <div className="detail">
                            <p>Enter Email</p>
                            <input type="email" {...register("email", {
                                required: { value: true, message: "Email is required" }
                            })} />
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>

                        <div className="detail">
                            <p>Create Password</p>
                            <input type="password" {...register("password", {
                                required: { value: true, message: "password is required" },
                                minLength:{value:8,message: "Password must contains minimum 8 charcter"}
                            })} />
                            {errors.password && <span> {errors.password.message}</span>}
                        </div>

                        <div className="login">
                            <span>SignUp</span>
                            <button type="submit" disabled={isSubmitting}>{isSubmitting ? "..." : <FontAwesomeIcon icon={faArrowRight} />}</button>
                        </div>
                        <div className="noAccount">
                            <p>Already have an account?</p>
                            <Link to="/login">Login</Link>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}