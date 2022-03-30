import './extension.css';
import HomeNav from "./HomeNav"
import {useState} from "react"

function Extension() {
    const [isBg, setIsBg] = useState(true)

    return (
        <div>
            <HomeNav />
            <div className="extension">
                <p className="download" onClick={() => setIsBg(!isBg)} style={isBg ? {background:"black", color: "white"} : {background: "white"}}>download extension</p>
                <p className="send" onClick={() => setIsBg(!isBg)} style={!isBg ? {background:"black", color: "white"} : {background: "white"}}>send us a username</p>
            </div>
            <div className="content">
                {
                    isBg 
                    ? <div>
                        cool
                    </div>
                    : <div>
                        ggg
                    </div>
                }
            </div>
        </div>
    )
}

export default Extension