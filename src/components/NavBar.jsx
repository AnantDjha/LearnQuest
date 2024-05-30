import React, { useRef,useEffect,useState } from "react";
import "./NavBar.css"
import menuImg from "../assets/menuImg.png"
import { library } from '@fortawesome/fontawesome-svg-core';
// import { faShoppingCart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faShoppingCart, faShoppingBag);
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


function NavBar()
{

    const currentUrl = window.location.href
    const navRef = useRef();
    const l1 = useRef();
    const l2 = useRef();
    const l3 = useRef();
    const l4 = useRef();
   const handleTop = ()=>{
    document.documentElement.scrollTop = 0;

   }
    const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(()=>{
    if(currentUrl.endsWith("about") || currentUrl.endsWith("eam") || currentUrl.endsWith("ourses"))
        {
            navRef.current.style.backgroundColor = "#83638C"
        }
        else
        {
            navRef.current.style.backgroundColor = "transparent"

        }
  })

  
  useEffect(()=>{
    if(scrollPosition > 10)
        {
            navRef.current.style.backgroundColor = "#83638C"
          
        }
        else{
            if(!currentUrl.endsWith("about") && !currentUrl.endsWith("eam") && !currentUrl.endsWith("ourses")){navRef.current.style.backgroundColor = "transparent"}
           
        }
  },[scrollPosition])

    const ulref = useRef();
    return (
        <div className="mainNav" ref={navRef}  >
            <nav>
               <div className="brand">
                <img src={menuImg} alt="" onClick={(e)=>{
                    if(ulref.current.className == '')
                        {
                            ulref.current.className = "openMenu"
                        }
                        else{
                            ulref.current.className = ''
                        }
                }}/>
                <p style={{color:"white"}}>LearnQuest</p>
               </div>
                <ul ref={ulref}>
                    <Link to="/" ref={l1} ><li className={!currentUrl.endsWith("bout") && !currentUrl.endsWith("eam") && !currentUrl.endsWith("ourses") ? "colorKaroBlack":''}onClick={handleTop}>Home</li></Link>
                    <Link to="/courses" ref={l2}><li className={currentUrl.endsWith("ourses")?"colorKaroBlack":''} onClick={handleTop}>Courses</li></Link>
                    <Link to="/about" ref={l3}><li className={currentUrl.endsWith("bout") ? "colorKaroBlack" :''} onClick={handleTop}>About</li></Link>
                    <Link to="/team" ref={l4}><li className={currentUrl.endsWith("eam") ? "colorKaroBlack":''} onClick={handleTop}>Team</li></Link>
                </ul>
                <div className="divCart">
                <Link href="" id="cart" style={{fontSize:"50px"}}> <FontAwesomeIcon icon={faShoppingBag} className="icon-small"/></Link>
                    </div>
            </nav>
        </div>
    )
}

export default NavBar;