import {useEffect, useState, useContext} from "react"
import {usernamesContext} from "./usernamesContext"
import HomeNav from "./HomeNav"

// refugeejobsbord

function FavoriteList() {
    const {setArrayNumber, setArrayUsername, arrayNumber, arrayUsername} = useContext(usernamesContext)
    const [number, setNumber] = useState()

    useEffect(() => {
        // console.log(arrayNumber.indexOf(number))
        let filteredArrayUsername = arrayUsername.filter(e => e.key !== number)
        let filteredArrayNumber = arrayNumber.filter(e => e !== number)
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
                {arrayUsername.map((username) => {
                    return ( 
                    <div>
                        {username.username}
                        <button onClick={() => setNumber(username.key)}>remove</button>
                    </div>
                )})}
            </div>
        </div>
    )
}

export default FavoriteList