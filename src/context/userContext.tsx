import React from 'react'
import {useUserData} from "../hooks";

export const userContext = React.createContext<any>({})

export function UserContextProvider({children}: { children: React.ReactNode }) {
    const {data, loading} = useUserData()

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}