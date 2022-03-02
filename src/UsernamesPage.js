import {useContext} from "react"
import {usernamesContext} from "./usernamesContext"
import HomeNav from "./HomeNav"
import uuid from "react-uuid"

function UsernamesPage() {
    const {usernamesArray} = useContext(usernamesContext)
  
    return (
        <div>
            <HomeNav />
            {usernamesArray.map((username, key) => {
              return <div key={uuid()}>{username.username} {username.inspiredFrom}</div>
            })} 
        </div>
    )
}

export default UsernamesPage

