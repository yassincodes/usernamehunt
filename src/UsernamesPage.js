import {useContext, useState, useEffect} from "react"
import {usernamesContext} from "./usernamesContext"
import HomeNav from "./HomeNav"
import HomeForm from "./HomeForm"
import { Link } from "react-router-dom"

function UsernamesPage() {
    const {usernamesArray} = useContext(usernamesContext)

    // const [buttonName, setButtonName] = useState(true)
    let listOfUsernames = JSON.parse(localStorage.getItem("array"))
    let listOfNumbers = JSON.parse(localStorage.getItem("arrayNumber"))
    const [array, setArray] = useState(listOfUsernames)
    const [arrayNumber, setArrayNumber] = useState(listOfNumbers)

    function addToFavorite(u) {
        if (arrayNumber.includes(u.key) === false) {
            setArrayNumber([...arrayNumber, u.key])
            setArray([...array, u])
        } else {
            let filteredArrayNumber = arrayNumber.filter(e => e !== u.key)
            setArrayNumber(filteredArrayNumber)
            localStorage.setItem("arrayNumber", JSON.stringify(filteredArrayNumber))

            let filteredArray = array.filter(e => e.key !== u.key)
            setArray(filteredArray)
            localStorage.setItem("array", JSON.stringify(filteredArray))
        }
    }

    useEffect(() => {
        localStorage.setItem("array", JSON.stringify(array))
        localStorage.setItem("arrayNumber", JSON.stringify(arrayNumber))
    }, [array])


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
                                        className={arrayNumber.includes(username.key) ? "liked_box" : "like_box"}
                                        onClick={() => addToFavorite({key: username.key, username: username.username, inspiredFrom: username.inspiredFrom}) }>
                                        {arrayNumber.includes(username.key) ? "liked" : "like"}
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

