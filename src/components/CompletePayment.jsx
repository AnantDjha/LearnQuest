import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, useInRouterContext } from "react-router-dom";
import axios from "axios";
import { userContext } from '../context/UserContext'


function CompletePayment() {
    const navigate = useNavigate();
    const { user } = useContext(userContext)
    const location = useLocation();
    const { price, courseId} = location.state || {};



    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    useEffect(() => {
        if (!price || !user || !user.valid) {
            navigate(-1);
        }

        axios.defaults.withCredentials = true
        axios.post("https://learnquest-backend-i922.onrender.com/razorpay", { amount: price }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {

                // setImformation(res.data);
                displayRazorPay(res.data)

            })
            .catch((e) => {
                alert(e)
                navigate(-1)
            })


    }, [price , courseId]);

    async function displayRazorPay(information) {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        if (!res) {
            alert("something went wrong");
            return;
        }
        var options = {
            "key": "rzp_test_gI00jflkRvp85R", // Enter the Key ID generated from the Dashboard
            "amount": (information.amount).toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "LearnQuest", //your business name
            "description": "Start your learning journey",
            handler: function (response) {
                axios.defaults.withCredentials = true;
                axios.post("https://learnquest-backend-i922.onrender.com/buy-course", { id: courseId },
                    {
                        headers: {
                            "Content-Type": "application/json"

                        }
                    }
                )
                    .then((res) => {
                        if (!res.data.completed) {
                            alert("something went wrong")
                        }
                        else {
                            alert("successFull")
                            navigate("/my-course")
                        }
                    })
                    .catch((e) => {
                        alert(e)
                    })
            },
            "image": "https://example.com/your_logo",
            "order_id": information.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": user.value.name, //your customer's name
                "email": user.value.email,
                "contact": "" //Provide the customer's phone number for better conversion rates 
            },

            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    return (
        <div className="mainComplete">

        </div>
    );
}

export default CompletePayment;
