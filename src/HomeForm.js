// making sure that the name contain only characters
     
// localStorage.setItem("arrayNumber", JSON.stringify([]))
// store the old array in a new array in a new array
// one search results | looking for usrnames
// one search saved: you'll find usernames of one specific search 
// writen like that yassin klifi
      
// making the list of usernames
// focus on lowering cases and uppering cases
// make different array + when u map the big one you will just concat them all
// before maping . you need to change the state to choose the type of array you want

// bugs to fix rn
// make user type in only proper names
// prevent default 
// fix warnings
import React, {useContext, useEffect} from "react"
import {usernamesContext} from "./usernamesContext"
import { Link } from "react-router-dom"

function HomeForm() {
    const {setArrayNumber, firstInput, secondInput, setFirstInput, setSecondInput, array, setUsernamesArray} = useContext(usernamesContext)
    let firstName = ''
    let secondName = ''

    function checkNames(first, second) {
      firstName = firstInput && first.split('').filter(char => /[a-zA-Z]/.test(char)).join("")
      secondName = secondInput && second.split('').filter(char => /[a-zA-Z]/.test(char)).join("")
        return (
            firstInput && secondInput && firstName.length <= 10 && firstName.length >= 2
            && secondName.length <= 10 && secondName.length >= 2
            && firstInput !== null && secondInput !== null
        ) 
    }

    function findUsername(firstInput, secondInput) { 
        firstName = firstInput && firstInput.split('').filter(char => /[a-zA-Z]/.test(char)).join("")
        secondName = secondInput && secondInput.split('').filter(char => /[a-zA-Z]/.test(char)).join("")
        array[0] = {key: 0, username: firstName + "io", inspiredFrom: "@levelsio"}
        array[1] = {key: 1, username: "hey" + firstName, inspiredFrom: "@heyeaslo"}
        array[2] = {key: 2, username: "DH" + firstName, inspiredFrom: "@ddheh"}
        array[3] = {key: 3, username: secondName + "45785", inspiredFrom: "@someone"}
        setUsernamesArray(array)
        localStorage.setItem("firstName", firstName)
        localStorage.setItem("secondName", secondName) 
        firstInput && setFirstInput(firstName)
        secondInput && setSecondInput(secondName)
    }  

    useEffect(() => {
        setFirstInput(localStorage.getItem("firstName"))
        setSecondInput(localStorage.getItem("secondName"))
        findUsername(localStorage.getItem("firstName"), localStorage.getItem("secondName"))
    }, [])

    function fixFindUsername() {
        setArrayNumber([])
    }

    return (
        <form>
            <input type="text" id="firstName" value={firstInput === null ? "" : firstInput} onChange={(e) => setFirstInput(e.target.value)}/>
            <input type="text" id="lastName"  value={secondInput === null ? "" : secondInput} onChange={(e) => setSecondInput(e.target.value)} />
            <button onClick={fixFindUsername}><Link to={checkNames(firstInput, secondInput) ? "/usernames" : "/"} id="findUsername" onClick={() => checkNames(firstInput, secondInput) ? findUsername(firstInput, secondInput) : alert("go fuck yourself")}>find username!</Link></button>
        </form>
    )
}

export default HomeForm