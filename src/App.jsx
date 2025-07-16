import { useContext, useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Team from './components/Team'
import Course from './components/Course'
import EntireDetail from './components/EntireDetail'
import Video from './VideoModule/Video'
import Login from './Login and Signup/Login'
import Signup from './Login and Signup/Signup'
import { userContext } from './context/UserContext'
import axios from 'axios'
import Saved from './savedPage/Saved'
import MyCourse from './mycourse/MyCourse'
import Foot from './footer/Foot'
import WildCard from './wildcard/WildCard'
import Checkout from './checkout/Checkout'
import CompletePayment from './components/CompletePayment'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [count, setCount] = useState(0)
  const { user, setUser } = useContext(userContext)
  const [courseIsBuyed, setCourseIsBuyed] = useState({ courses: [], module: [] });
  const [savedCourses, setSavedCourses] = useState([])

  const getBuyedCourse = () => {

    axios.defaults.withCredentials = true
    axios.get("https://learnquest-backend-i922.onrender.com/course", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then((res) => {
        if (res.data.completed) {

          setCourseIsBuyed(res.data);

        }
      })
      .catch((e) => {
        alert("something went wrong" + e)

      })
  }

  const getSavedCourse = () => {
    axios.defaults.withCredentials = true
    axios.get("https://learnquest-backend-i922.onrender.com/save", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then((res) => {
        setSavedCourses(res.data.dataArr);

      })
      .catch((e) => {


        alert("something went wrong" + e)

      })
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      localStorage.setItem("token", "");
    } axios.defaults.withCredentials = true;
    axios.get("https://learnquest-backend-i922.onrender.com/session", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        setUser(res.data);
      })
      .catch((e) => {
        alert("something went wrong" + e)
      })
  }, [])


  useEffect(() => {
    getBuyedCourse();
    getSavedCourse();

  }, [user])


  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home /><NavBar /><Footer /></>
    },
    {
      path: "/team",
      element: <><Team /><NavBar /><Footer /></>
    },

    {
      path: "/courses",
      element: <><Course /><NavBar /><Footer /></>
    },
    {
      path: "/course-detail/:id",
      element: <><EntireDetail courseIsBuyed={courseIsBuyed} savedCourses={savedCourses} /><NavBar /><Footer /></>
    },
    {
      path: "/video-module/:uri",
      element: <><Video /></>
    },
    {
      path: "/login",
      element: <><Login /><NavBar /><Footer /></>
    },
    {
      path: "/register",
      element: <><Signup /><NavBar /><Footer /></>
    },
    {
      path: "/courses-saved",
      element: <><Saved /><NavBar /><Foot /></>
    },
    {
      path: "/my-course",
      element: <><MyCourse /><NavBar /><Foot /></>
    },
    {
      path: "/*",
      element: <><WildCard /></>
    },
    {
      path: "/checkout-page",
      element: <><Checkout /><NavBar /><Foot /></>
    },
    {
      path: "/payment-gateway",
      element: <><Checkout /><NavBar /><Foot /><CompletePayment /></>
    },

  ])




  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />

    </>
  )
}

export default App
