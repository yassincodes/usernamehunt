import {useContext, useState, useEffect} from "react"
import {usernamesContext} from "./usernamesContext"
import HomeNav from "./HomeNav"
import HomeForm from "./HomeForm"
import uuid from "react-uuid"
import { Link } from "react-router-dom"

function UsernamesPage() {
    const {usernamesArray} = useContext(usernamesContext)

    const [buttonName, setButtonName] = useState(true)
    const [array, setArray] = useState([])
    console.log(array)
    function addToFavorite(u) {
        setArray([...array, u.username])
        setButtonName(!buttonName)
    }

    return (
        <div className="usernames_page">
            <HomeNav />
            <div className="main_section"><HomeForm /></div>
                <div className="usernames_container">
                <div 
                    className="info_boxes" 
                    style={{marginTop:"30px"}} >
                    <span className="info_box"  style={{width:"45%"}}>username</span>
                    <span className="info_box"  style={{width:"55%"}}>inspired from</span>
                </div>
                <div className="test">
                {usernamesArray.map((username) => {
                    return  <div key={username.key} className="usernames_box">
                              <span className="username_box" style={{width:"40vw"}}>{username.username}</span>
                              <span className="username_box" style={{width:"50vw"}}>
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <span>{username.inspiredFrom}</span>
                                    <span 
                                        className="like_box" 
                                        onClick={() => buttonName 
                                        ? addToFavorite({key: username.key, username: username.username, inspiredFrom: username.inspiredFrom}) 
                                        : setButtonName(!buttonName)}>
                                        {buttonName ? "like" : "unlike"}
                                    </span>
                                </div>
                              </span>
                            </div>
                })} 
                </div>
                </div>
                <div className="footer_buttons">   
                     <Link to="/favorite">see list</Link>
                </div>
        </div>
    )
}

export default UsernamesPage

