import {useContext} from "react"
import {usernamesContext} from "./usernamesContext"
import HomeNav from "./HomeNav"
import HomeForm from "./HomeForm"
import uuid from "react-uuid"
import { Link } from "react-router-dom"

function UsernamesPage() {
    const {usernamesArray} = useContext(usernamesContext)
    return (
        <div>
            <HomeNav />
            <div className="main_section"><HomeForm /></div>
            <div>username|inspired from</div>
            {usernamesArray.map((username, key) => {
              return <div key={uuid()}>{username.username}|{username.inspiredFrom}</div>
            })} 
        <Link to="/">back to home</Link>
        </div>
    )
}

export default UsernamesPage

