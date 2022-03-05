import {useEffect, useState} from "react"
import HomeNav from "./HomeNav"

// refugeejobsbord

function FavoriteList() {
    let storedArray = JSON.parse(localStorage.getItem("array"));
    const [SA, setSA] = useState(storedArray)
    // SA.splice(1,1)
    const [number, setNumber] = useState(0)
    console.log(number)
    console.log(SA.indexOf(number) + 1)
    useEffect(() => {
        SA.splice(SA.indexOf(number),1)
    }, [number])
    return (
        <div>
            <HomeNav />
            <div>
                here is the favorite list
                {SA.map((username) => {
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