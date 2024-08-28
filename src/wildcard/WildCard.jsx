import "./WildCard.css"
import pageNotFound from "../assets/pageNotFound.png"
import { useNavigate } from "react-router-dom"

export default function WildCard()
{
    const navigate = useNavigate();
    return (
        <div className="mainWildCard">
            <div className="img">

            </div>
            <button onClick={()=>{navigate(-1)}}>Go Back</button>

        </div>
    )
}