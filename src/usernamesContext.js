import React, {useState} from "react"

const windowNumberContext = React.createContext()

function usernamesContextProvider({children}) {



return (
    <windowNumberContext.Provider value={{windowNumber, setWindowNumber}}>
        {children}
    </windowNumberContext.Provider>
)
}

export {usernamesContextProvider, windowNumberContext}
