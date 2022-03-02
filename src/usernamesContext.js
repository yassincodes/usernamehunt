import React, {useState} from "react"

const usernamesContext = React.createContext()

function UsernamesContextProvider({children}) {

    let array = []
    const [usernamesArray, setUsernamesArray] = useState(array)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

return (
    <usernamesContext.Provider value={{array, usernamesArray, setUsernamesArray, firstName, setFirstName, lastName, setLastName}}>
        {children}
    </usernamesContext.Provider>
)
}

export {UsernamesContextProvider, usernamesContext}
