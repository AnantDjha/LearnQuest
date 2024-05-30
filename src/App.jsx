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
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
