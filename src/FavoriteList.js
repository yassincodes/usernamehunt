import {useEffect, useState, useContext} from "react"
import {usernamesContext} from "./usernamesContext"
import HomeNav from "./HomeNav"
import uuid from "react-uuid"

// refugeejobsbord

function FavoriteList() {
    const {setArrayNumber, setArrayUsername, arrayNumber, arrayUsername} = useContext(usernamesContext)
    const [number, setNumber] = useState()
    const [user, setUser] = useState()


    let filteredArrayUsername = []
    let filteredArrayNumber = []
    useEffect(() => {
        // console.log(arrayNumber.indexOf(number))
        console.log(user)
        filteredArrayUsername = arrayUsername.filter(e => e.username !== user)

        filteredArrayNumber = arrayNumber.filter(e => e !== number)
        setArrayUsername(filteredArrayUsername)
        setArrayNumber(filteredArrayNumber)
        localStorage.setItem("arrayUsername", JSON.stringify(filteredArrayUsername))
        localStorage.setItem("arrayNumber", JSON.stringify(filteredArrayNumber))

    }, [number])

    return (
        <div>
            <HomeNav />
            <div>
                here is the favorite list
                {arrayUsername.map((username, key) => {
                    return ( 
                    <div key={uuid()}>
                        {username.username}
                        <p onClick={() => setUser(username.username)}>
                            <button onClick={() => setNumber(username.key)}>
                                remove
                            </button>
                        </p>
                    </div>
                )})}
            </div>
        </div>
    )
}

export default FavoriteList