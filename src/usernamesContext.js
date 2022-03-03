import React, {useState} from "react"

const usernamesContext = React.createContext()

function UsernamesContextProvider({children}) {

    let array = []
    const [usernamesArray, setUsernamesArray] = useState(array)
    const [firstInput, setFirstInput] = useState("..")
    const [secondInput, setSecondInput] = useState("..")

return (
    <usernamesContext.Provider value={{array, usernamesArray, setUsernamesArray, firstInput, setFirstInput, secondInput, setSecondInput}}>
        {children}
    </usernamesContext.Provider>
)
}

export {UsernamesContextProvider, usernamesContext}
