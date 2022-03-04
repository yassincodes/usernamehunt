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
      array[0] = {key: 1, username: firstName + "io", inspiredFrom: "@levelsio"}
      array[1] = {key: 2, username: "hey" + firstName, inspiredFrom: "@heyeaslo"}
      array[2] = {key: 3, username: "DH" + firstName, inspiredFrom: "@ddheh"}
      array[3] = {key: 4, username: secondName + "45785", inspiredFrom: "@someone"}
      array[4] = {key: 5, username: firstName + "." + secondName, inspiredFrom: "@khaby.lame"}
      array[5] = {key: 6, username: firstName + "io", inspiredFrom: "@levelsio"}
      array[6] = {key: 7, username: "hey" + firstName, inspiredFrom: "@heyeaslo"}
      array[7] = {key: 8, username: "DH" + firstName, inspiredFrom: "@ddheh"}
      array[8] = {key: 9, username: secondName + "45785", inspiredFrom: "@someone"}
      array[9] = {key: 10, username: firstName + "." + secondName, inspiredFrom: "@khaby.lame"}
      array[10] = {key: 11, username: firstName + "io", inspiredFrom: "@levelsio"}
      array[11] = {key: 12, username: "hey" + firstName, inspiredFrom: "@heyeaslo"}
      array[12] = {key: 13, username: "DH" + firstName, inspiredFrom: "@ddheh"}
      array[13] = {key: 14, username: secondName + "45785", inspiredFrom: "@someone"}
      array[14] = {key: 15, username: firstName + "." + secondName, inspiredFrom: "@khaby.lame"}
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
            <Link to="/usernames" id="findUsername" onClick={() => findUsername(firstInput, secondInput)}>find username!</Link>
        </form>
    )
}

export default HomeForm