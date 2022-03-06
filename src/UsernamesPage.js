import {useContext, useState, useEffect} from "react"
import {usernamesContext} from "./usernamesContext"
import HomeNav from "./HomeNav"
import HomeForm from "./HomeForm"
import { Link } from "react-router-dom"

function UsernamesPage() {
    const {usernamesArray, setArrayNumber, setArrayUsername, arrayNumber, arrayUsername} = useContext(usernamesContext)

    // const [buttonName, setButtonName] = useState(true)
    let arrs = []
    arrayUsername.map((ele) => {
        arrs.push(ele.username)
    })
    function addToFavorite(u) {
        if (arrs.includes(u.username) === false) {
            setArrayNumber([...arrayNumber, u.key])
            setArrayUsername([...arrayUsername, u])
        } else {
            let filteredArrayNumber = arrayNumber.filter(e => e !== u.key)
            setArrayNumber(filteredArrayNumber)
            localStorage.setItem("arrayNumber", JSON.stringify(filteredArrayNumber))

            let filteredArrayUsername = arrayUsername.filter(e => e.username !== u.username)
            setArrayUsername(filteredArrayUsername)
            localStorage.setItem("arrayUsername", JSON.stringify(filteredArrayUsername))
        }
    }

    useEffect(() => {
        localStorage.setItem("arrayUsername", JSON.stringify(arrayUsername))
        localStorage.setItem("arrayNumber", JSON.stringify(arrayNumber))
    }, [arrayUsername])


    console.log(arrs)

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
                                    <span style={{display:"flex", alignItems:"center"}}>{username.inspiredFrom}</span>
                                    <span 
                                        className={(arrs.includes(username.username)) ? "liked_box" : "like_box"}
                                        onClick={() => addToFavorite({key: username.key, username: username.username, inspiredFrom: username.inspiredFrom}) }>
                                        {(arrs.includes(username.username)) ? "liked" : "like"}
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

