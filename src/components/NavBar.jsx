import React, { useRef,useEffect,useState } from "react";
import "./NavBar.css"
import menuImg from "../assets/menuImg.png"

function NavBar()
{
    const navRef = useRef();
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
    if(scrollPosition > 10)
        {
            navRef.current.style.backgroundColor = "#9C80B2"
        }
        else{
            navRef.current.style.backgroundColor = "transparent"
        }
  },[scrollPosition])

    const ulref = useRef();
    return (
        <div className="mainNav" ref={navRef}>
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
                <p>BrandName</p>
               </div>
                <ul ref={ulref}>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Courses</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Contact us</li></a>
                </ul>
                <div className="divCart">
                <a href="#" id="cart">Cart</a>
                    </div>
            </nav>
        </div>
    )
}

export default NavBar;