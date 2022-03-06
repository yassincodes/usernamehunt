import React, {useState} from "react"

const usernamesContext = React.createContext()

function UsernamesContextProvider({children}) {

    let array = []
    const [usernamesArray, setUsernamesArray] = useState(array)
    const [firstInput, setFirstInput] = useState("")
    const [secondInput, setSecondInput] = useState("")
    let listOfUsernames = JSON.parse(localStorage.getItem("arrayUsername"))
    let listOfNumbers = JSON.parse(localStorage.getItem("arrayNumber"))
    const [arrayUsername, setArrayUsername] = useState(listOfUsernames)
    const [arrayNumber, setArrayNumber] = useState(listOfNumbers)

return (
    <usernamesContext.Provider value={{arrayUsername, setArrayUsername, arrayNumber, setArrayNumber, array, usernamesArray, setUsernamesArray, firstInput, setFirstInput, secondInput, setSecondInput}}>
        {children}
    </usernamesContext.Provider>
)
}

export {UsernamesContextProvider, usernamesContext}
