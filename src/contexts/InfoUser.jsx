import { useState, useContext, createContext } from "react"

export const InfoContext = createContext();

export function InfoUser({ children }){
    const [login, setLogin] = useState({});

    return (
        <InfoContext.Provider value={{login, setLogin}}>
            { children }
        </InfoContext.Provider>
    )
}