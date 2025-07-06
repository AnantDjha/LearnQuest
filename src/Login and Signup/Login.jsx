import { useForm } from "react-hook-form"
import "./Login.css"
import loginImage from "../assets/LoginPageImg.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { userContext } from "../context/UserContext"
import { motion } from "framer-motion"
export default function Login() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitting, }
    } = useForm()


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { user, setUser } = useContext(userContext)
    const [buttonAvailable, setAvailable] = useState(true);
    const [resultAfterLogin, setResultAfterLogin] = useState(null)
    const navigate = useNavigate();

    const onSubmit = (data) => {
        setAvailable(false)
        axios.defaults.withCredentials = true;

        axios.post("http://localhost:5000/register/login", data, {
            headers: {
                "Content-Type": "application/json",
                withCredentials: true,
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then((res) => {
                if (res.data.user) {
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("user", JSON.stringify(res.data.user))
                    setUser(res.data.user)
                }
                reset()
                setAvailable(true)
                setResultAfterLogin(res.data)
                setTimeout(() => {
                    if (res.data.status) {
                        history.back()
                    }
                }, 1000)
            })
            .catch((e) => {
                setAvailable(true)
                alert("something went wrong" + e)
            })
    }


    return (
        <div className="mainLogin">
            <div className="forNav">

            </div>
            <div className="former">
                <motion.div className="loginform" initial={{ postion: "relative", left: "28rem", opacity: 0 }} animate={{ left: "0rem", opacity: 1 }} transition={{ duration: 0.5 }}>
                    {
                        resultAfterLogin &&
                        <div>
                            {
                                resultAfterLogin.status ? <motion.div className="floaterMsg1" initial={{ height: 0, opacity: 0 }} animate={{ height: "3rem", opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }}>{resultAfterLogin.message}</motion.div> :
                                    <motion.div className="floaterMsg2" initial={{ height: 0, opacity: 0 }} animate={{ height: "3rem", opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }}>{resultAfterLogin.message}</motion.div>
                            }
                        </div>
                    }
                    <div className="imageBox">
                        <img src={loginImage} alt="" />
                        <p>Wellcome Back!</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="detail">
                            <p>Enter Email</p>
                            <input type="email" {...register("email", {
                                required: { value: true, message: "Email is required" }
                            })} />
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>

                        <div className="detail">
                            <p>Enter Password</p>
                            <input type="password" {...register("password", {
                                required: { value: true, message: "password is required" }
                            })} />
                            {errors.password && <span> {errors.password.message}</span>}
                        </div>
                        <div className="login">
                            <span>Lets login</span>
                            <button type="submit" disabled={!buttonAvailable}>{!buttonAvailable ?
                                <span className="waitLoader"></span> :
                                <FontAwesomeIcon icon={faArrowRight} />}
                            </button>
                        </div>
                        <div className="noAccount">
                            <p>Don't have a account?</p>
                            <Link to="/register">Signup</Link>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}