import { ActionCreator } from "redux"
import { UPDATE_COMMENT, SET_TOKEN } from "./constant"

export type UpdateCommentAction = {
   type: typeof UPDATE_COMMENT,
   text: string
}

export type SetTokenAction = {
   type: typeof SET_TOKEN,
   token: string
}

export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
   type: UPDATE_COMMENT,
   text,
})

export const setToken: ActionCreator<SetTokenAction> = (token) => ({
   type: SET_TOKEN,
   token,
})