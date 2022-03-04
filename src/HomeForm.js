import React, {useContext, useEffect} from "react"
import {usernamesContext} from "./usernamesContext"
import { Link } from "react-router-dom"

function HomeForm() {
    const {firstInput, secondInput, setFirstInput, setSecondInput, array, setUsernamesArray} = useContext(usernamesContext)
    let firstName = ''
    let secondName = ''

    function findUsername(firstInput, secondInput) {
      // making sure that the name contain only characters
      firstName = firstInput && firstInput.split('').filter(char => /[a-zA-Z]/.test(char)).join("")
      secondName = firstInput && secondInput.split('').filter(char => /[a-zA-Z]/.test(char)).join("")

      // making the list of usernames
      // focus on lowering cases and uppering cases
      // make different array + when u map the big one you will just concat them all
      // before maping . you need to change the state to choose the type of array you want 
      array[0] = {username: firstName + "io", inspiredFrom: "@levelsio"}
      array[1] = {username: "hey" + firstName, inspiredFrom: "@heyeaslo"}
      array[2] = {username: "DH" + firstName, inspiredFrom: "@ddheh"}
      array[3] = {username: secondName + "45785", inspiredFrom: "@someone"}
      array[4] = {username: firstName + "." + secondName, inspiredFrom: "@khaby.lame"}
      array[5] = {username: firstName + "io", inspiredFrom: "@levelsio"}
      array[6] = {username: "hey" + firstName, inspiredFrom: "@heyeaslo"}
      array[7] = {username: "DH" + firstName, inspiredFrom: "@ddheh"}
      array[8] = {username: secondName + "45785", inspiredFrom: "@someone"}
      array[9] = {username: firstName + "." + secondName, inspiredFrom: "@khaby.lame"}
      array[10] = {username: firstName + "io", inspiredFrom: "@levelsio"}
      array[11] = {username: "hey" + firstName, inspiredFrom: "@heyeaslo"}
      array[12] = {username: "DH" + firstName, inspiredFrom: "@ddheh"}
      array[13] = {username: secondName + "45785", inspiredFrom: "@someone"}
      array[14] = {username: firstName + "." + secondName, inspiredFrom: "@khaby.lame"}
      setUsernamesArray(array)

      localStorage.setItem("firstName", firstName)
      localStorage.setItem("secondName", secondName) 
    }  

    useEffect(() => {
        setFirstInput(localStorage.getItem("firstName"))
        setSecondInput(localStorage.getItem("secondName"))
        findUsername(localStorage.getItem("firstName"), localStorage.getItem("secondName"))
    }, [])

    return (
        <form>
            <input type="text" id="firstName" value={firstInput === "null" ? "" : firstInput} onChange={(e) => setFirstInput(e.target.value)}/>
            <input type="text" id="lastName"  value={secondInput === "null" ? "" : secondInput} onChange={(e) => setSecondInput(e.target.value)} />
            <Link to="/usernames" onClick={() => findUsername(firstInput, secondInput)}>find username!</Link>
        </form>
    )
}

export default HomeForm