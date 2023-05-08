import { createStoreon } from 'storeon';


let comment = (store:any) => {
   store.on("@init", () => ({comment: "Привет из Storeon"}))
   store.on("change", (comment: any, newComment: string) => ({comment: newComment}))
}

export const storeonStore = createStoreon([
   comment
])