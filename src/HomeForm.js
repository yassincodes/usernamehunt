import React, {useContext, useState} from "react"
import {usernamesContext} from "./usernamesContext"
import { Link } from "react-router-dom"

function HomeForm() {
    const {firstInput, secondInput, setFirstInput, setSecondInput, array, setUsernamesArray} = useContext(usernamesContext)
    let firstName = ''
    let secondName = ''
    
    const [name, setName] = useState('')
    function findUsername() {
      // making sure that the name contain only characters
      firstName = firstInput.split('').filter(char => /[a-zA-Z]/.test(char)).join("")
      secondName = secondInput.split('').filter(char => /[a-zA-Z]/.test(char)).join("")

      // making the list of usernames
      array[0] = {username: firstName + "io", inspiredFrom: "@levelsio"}
      array[1] = {username: "hey" + firstName, inspiredFrom: "@heyeaslo"}
      setUsernamesArray(array)

      localStorage.setItem("firstName", firstName)
      localStorage.setItem("secondName", secondName)
    }  

    return (
        <form>
            <input type="text" id="firstName" value={} onChange={(e) => setFirstInput(e.target.value)}/>
            <input type="text" id="lastName" value={} onChange={(e) => setSecondInput(e.target.value)} />
            <Link to="/usernames" onClick={findUsername}>find username!</Link>
        </form>
    )
}

export default HomeForm