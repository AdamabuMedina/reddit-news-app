import {  Reducer } from "redux"
import { UPDATE_COMMENT, SET_TOKEN, ME_REQUEST, ME_REQUEST_SUCCESS, ME_REQUEST_ERROR, POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS } from "./constant"
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./me/actions"
import { meReducer, MeState } from "./me/reducer"
import { postsReducer, PostsState } from "./posts/reducer"
import { UpdateCommentAction, SetTokenAction } from "./rootActions"

const initialState: RootState = {
   commentText: "Привет, Skillbox",
   token: "",
   me: {
      loading: false,
      error: "",
      data: {}
   },
   posts: {
       loading: false,
       error: '',
       data: {
           posts: [],
           nextAfter: '',
           numberOfLoads: 0
       }
   },
}

export type RootState = {
   commentText: string
   token: string
   me: MeState
   posts: PostsState;
}

type MyAction = UpdateCommentAction
| SetTokenAction
| MeRequestAction
| MeRequestSuccessAction
| MeRequestErrorAction

export const rootReducer: Reducer<RootState> = (state=initialState, action) => {
    switch (action.type) {
      case UPDATE_COMMENT:
         return {
            ...state,
            commentText: action.text
         }
      case SET_TOKEN:
         return {
            ...state,
            token: action.token
         }
      case ME_REQUEST:
      case ME_REQUEST_SUCCESS:
      case ME_REQUEST_ERROR:
         return {
            ...state,
            me: meReducer(state.me, action)
         }
      case POSTS_REQUEST:
      case POSTS_REQUEST_ERROR:
      case POSTS_REQUEST_SUCCESS:
         return {
            ...state,
            posts: postsReducer(state.posts, action)
         }
      default:
         return state
    }
 }