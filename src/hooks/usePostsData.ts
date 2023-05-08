import { useSelector } from "react-redux";
import React from "react"
import axios from "axios"
import { RootState } from "../store/rootReducer";

interface IPostsItem {
    id: string
    text: string
    onClick: (id: string) => void
}

export function usePostsData() {
    const [post, setPosts] = React.useState<IPostsItem[]>([])

    const token = useSelector<RootState, string>(state => state.token)

    React.useEffect(() => {
        if (token && token != "undefined" && token != "false") {
            axios.get("https://oauth.reddit.com/best", {
                headers: {
                    Authorization: `bearer ${token}`
                },
            }).then((resp) => {
                const bestPosts = resp.data.data.children;
                bestPosts.map((post: any) => {
                    post.text = post.data.title;
                    post.id = post.data.id;
                })
                setPosts(bestPosts);
            })
                .catch(console.log);
        }
    }, [token])

    return [post]
}