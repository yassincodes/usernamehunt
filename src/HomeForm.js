import React, {useContext, useEffect, useState} from "react"
import {usernamesContext} from "./usernamesContext"
import { Link } from "react-router-dom"

function HomeForm() {
    const {firstInput, secondInput, setFirstInput, setSecondInput, array, setUsernamesArray} = useContext(usernamesContext)
    let firstName = ''
    let secondName = ''

    useEffect(() => {
        findUsername(localStorage.getItem("firstName"), localStorage.getItem("secondName"))
    }, [])

    function findUsername(firstInput, secondInput) {
      // making sure that the name contain only characters
      firstName = firstInput && firstInput.split('').filter(char => /[a-zA-Z]/.test(char)).join("")
      secondName = firstInput && secondInput.split('').filter(char => /[a-zA-Z]/.test(char)).join("")

      // making the list of usernames
      // focus on lowering cases and uppering cases
      array[0] = {username: firstName + "io", inspiredFrom: "@levelsio"}
      array[1] = {username: "hey" + firstName, inspiredFrom: "@heyeaslo"}
      array[2] = {username: "DH" + firstName, inspiredFrom: "@ddheh"}
      array[3] = {username: secondName + "45785", inspiredFrom: "@someone"}
      array[4] = {username: firstName + "." + secondName, inspiredFrom: "@khaby.lame"}
      setUsernamesArray(array)

      localStorage.setItem("firstName", firstName)
      localStorage.setItem("secondName", secondName) 
    }  

    useEffect(() => {
        setFirstInput(localStorage.getItem("firstName"))
        setSecondInput(localStorage.getItem("secondName"))
    }, [])

    return (
        <form>
            <input type="text" id="firstName" value={firstInput == "null" ? "" : firstInput} onChange={(e) => setFirstInput(e.target.value)}/>
            <input type="text" id="lastName"  value={secondInput == "null" ? "" : secondInput} onChange={(e) => setSecondInput(e.target.value)} />
            <Link to="/usernames" onClick={() => findUsername(firstInput, secondInput)}>find username!</Link>
        </form>
    )
}

export default HomeForm