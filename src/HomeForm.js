import React, {useContext} from "react"
import {usernamesContext} from "./usernamesContext"
import { Link } from "react-router-dom"

function HomeForm() {
    const {firstInput, secondInput, setFirstInput, setSecondInput, array, setUsernamesArray} = useContext(usernamesContext)
    let firstName = ''
    let secondName = ''
    function findUsername() {
      firstName = firstInput.split('').filter(char => /[a-zA-Z]/.test(char)).join("")
      secondName = secondInput.split('').filter(char => /[a-zA-Z]/.test(char)).join("")
      array[0] = {username: firstName + "io", inspiredFrom: "@levelsio"}
      array[1] = {username: "hey" + firstName, inspiredFrom: "@heyeaslo"}
      setUsernamesArray(array)
    }  
    return (
        <form>
            <input type="text" id="firstName" onChange={(e) => setFirstInput(e.target.value)}/>
            <input type="text" id="lastName" onChange={(e) => setSecondInput(e.target.value)} />
            <Link to="usernames" onClick={findUsername}>find username!</Link>
        </form>
    )
}

export default HomeForm