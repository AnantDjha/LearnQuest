import { useForm } from "react-hook-form"
import "./Login.css"
import loginImage from "../assets/LoginPageImg.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
export default function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors ,isSubmitting}
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="mainLogin">
            <div className="forNav">

            </div>
            <div className="former">
                <div className="loginform">
                    <div className="imageBox">
                        <img src={loginImage} alt="" />
                        <p>Wellcome Back!</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="detail">
                            <p>Enter Email</p>
                            <input type="email" {...register("email",{
                                required:{value:true,message:"Email is required"}
                            })}/>
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>

                        <div className="detail">
                            <p>Enter Password</p>
                            <input type="password" {...register("password",{
                                required:{value:true,message:"password is required"}
                            })}/>
                            {errors.password && <span> {errors.password.message}</span>}
                        </div>
                        <div className="login">
                            <span>Lets login</span>
                            <button type="submit" disabled={isSubmitting}>{isSubmitting? "...":<FontAwesomeIcon icon={faArrowRight}/>}</button>
                        </div>
                        <div className="noAccount">
                            <p>Don't have a account?</p>
                            <Link>Signup</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}