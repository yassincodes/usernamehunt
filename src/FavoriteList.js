import {useEffect, useState} from "react"
import HomeNav from "./HomeNav"

// refugeejobsbord

function FavoriteList() {
    let listOfUsernames = JSON.parse(localStorage.getItem("array"))
    let listOfNumbers = JSON.parse(localStorage.getItem("arrayNumber"))

    const [array, setArray] = useState(listOfUsernames)
    const [arrayNumber, setArrayNumber] = useState(listOfNumbers)

    const [number, setNumber] = useState()

    useEffect(() => {
        // console.log(arrayNumber.indexOf(number))
        let filteredArray = array.filter(e => e.key !== number)
        let filteredArrayNumber = arrayNumber.filter(e => e !== number)
        setArray(filteredArray)
        setArrayNumber(filteredArrayNumber)
        localStorage.setItem("array", JSON.stringify(filteredArray))
        localStorage.setItem("arrayNumber", JSON.stringify(filteredArrayNumber))
    }, [number])

    return (
        <div>
            <HomeNav />
            <div>
                here is the favorite list
                {array.map((username) => {
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