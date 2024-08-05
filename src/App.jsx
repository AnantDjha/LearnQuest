import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Router,RouterProvider, createBrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import About from './components/About'
import Team from './components/Team'
import Course from './components/Course'
import EntireDetail from './components/EntireDetail'
import Video from './VideoModule/Video'
import Login from './Login and Signup/Login'
import Signup from './Login and Signup/Signup'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Home/><NavBar/><Footer/></>
    },
    {
      path:"/about",
      element:<><About/><NavBar/><Footer/></>
    },
    {
      path:"/team",
      element:<><Team/><NavBar/><Footer/></>
    },
   
    {
      path:"/courses",
      element:<><Course/><NavBar/><Footer/></>
    },
    {
      path:"/course-detail/:id",
      element:<><EntireDetail/><NavBar/><Footer/></>
    },
    {
      path:"/video-module/:uri",
      element:<><Video/></>
    },
    {
      path:"/login",
      element:<><Login/><NavBar/><Footer/></>
    },
    {
      path:"/register",
      element:<><Signup/><NavBar/><Footer/></>
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
