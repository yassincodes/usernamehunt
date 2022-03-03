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
            <main>
                <div className="main_box" style={{marginTop:"15px", marginBottom:"15px"}} ><span className="box">username</span><span className="box">inspired from</span></div>
                {usernamesArray.map((username) => {
                    return  <div key={uuid()} className="main_box">
                              <span className="box">{username.username}</span>
                              <span className="box">
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                     <span>{username.inspiredFrom}</span>
                                     <span className="add_to_list_box">add to list</span>
                                </div>
                              </span>
                            </div>
                })} 
            </main>
        <Link to="/">back to home</Link>
        </div>
    )
}

export default UsernamesPage

