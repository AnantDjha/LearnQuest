import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { courses } from "../AllTheCourses"
import { Link } from "react-router-dom"
import "./Checkout.css"
import { userContext } from "../context/UserContext"

export default function Checkout() {

    // windows state that are initialized in entireDetail page 
    const location = useLocation();
    const { price, courseId } = location.state || {};

    const [item, setItem] = useState(courses.find(a => a.id === courseId))

    const { user } = useContext(userContext);
    const navigate = useNavigate()



    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/login")
            return
        }
        else if (!price || !courseId) {
            navigate(-1)
            return
        }
    }, [price, courseId])
    return (
        <div className="checkout">
            <div className="forNav">

            </div>

            <div className="checkout-content">
                <h2>Checkout</h2>
                <div className="courseToBecheck">
                    <div className="boxForSaved"  >
                        <div className="imageSectionForSaved">
                            <img src={item.src} alt="" onClick={() => {
                                navigate("/course-detail/" + item.id)
                            }} />
                        </div>
                        <div className="both">
                            <div className="textSectionForSaved">
                                <h3>{item.name}</h3>
                                <span>Skills you will gain: {item.skillToGain}</span>
                                <span>
                                    {item.star} <i className="fa fa-star fa-sm" style={{ color: "rgb(253, 211, 2)" }}></i>
                                </span>
                                <span>Course type: Beginner</span>
                                <span>Duration: 6 months</span>
                            </div>
                            <div className="justRemove">

                                <p><span>₹ {item.price}.0</span> <b>₹ {((item.price * 100) / (100 - item.discount)).toFixed(2)}</b></p>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="checkoutAmount">
                    <div className="priceDetail">
                        <h5>PAYMENT DETAIL</h5>
                        <ul>
                            <li><b>MRP Total</b> <span>₹ {(item.price + (item.discount / 100) * item.price).toFixed(2)}</span></li>
                            <li><b>Additional Discount</b> <span>₹ {((item.discount / 100) * item.price).toFixed(2)}</span></li>
                            <li><b>Total Amount</b> <span>₹ {item.price.toFixed(2)}</span></li>
                        </ul>


                        <span className="checkLink"><p><i>Payable amount</i><b>₹{item.price.toFixed(2)}</b></p> <Link to="/payment-gateway" state={{ price, courseId }}>checkout</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}