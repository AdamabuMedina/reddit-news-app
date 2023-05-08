import React from 'react'
import {usePostsData} from "../hooks";

interface IPostsItem {
    id: string
    text: string
    onClick: (id: string) => void
}

const postContext = React.createContext<IPostsItem[]>([])
export default postContext

export function PostsContextProvider({children}: { children: React.ReactNode }) {
    const [posts] = usePostsData()

    return (
        <postContext.Provider value={posts}>
            {children}
        </postContext.Provider>
    )
}