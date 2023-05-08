import axios from "axios"
import { Action, ActionCreator } from "redux"
import { ThunkAction } from "redux-thunk"
import { POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS } from "../constant"
import { RootState } from "../rootReducer"

export type PostsRequestAction = {
   type: typeof POSTS_REQUEST;
}

export const postsRequest: ActionCreator<PostsRequestAction> = () => ({
   type: POSTS_REQUEST,
})

export interface IPostItem {
   post: {
       id: string;
       title: string;
       img: string;
   }
   author: {
       title: string;
       img: string;
   };
}

export interface IPostsData {
   posts: IPostItem[],
   nextAfter: string;
   numberOfLoads: number;
}

export type PostsRequestSuccessAction = {
   type: typeof POSTS_REQUEST_SUCCESS;
   data: IPostsData;
}
export const postsRequestSuccess: ActionCreator<PostsRequestSuccessAction> = (data: IPostsData) => ({
   type: POSTS_REQUEST_SUCCESS,
   data,
})

export type PostsRequestErrorAction = {
   type: typeof POSTS_REQUEST_ERROR;
   error: string;
}

export const postsRequestError: ActionCreator<PostsRequestErrorAction> = (error: string) => ({
   type: POSTS_REQUEST_ERROR,
   error,
})

export const postsRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
   dispatch(postsRequest())

   axios.get("https://oauth.reddit.com/top.json", {
      headers: {Authorization: `bearer ${getState().token}`},
      params: {
         limit: 5,
         after: getState().posts.data.nextAfter,
         sr_detail: true
      }
   })
      .then((resp) => {
         const posts = resp.data.data.children;
         const after = resp.data.data.after
         const processedPosts = posts.map((post: any) => {
            return {
               ...post,
               post: {
                  id: post.data.id,
                  title: post.data.title,
                  img: post.data?.thumbnail
               },
               author: {
                  title: post.data?.sr_detail?.display_name,
                  img: post.data?.sr_detail?.icon_img
              }
            }
         })
         dispatch(postsRequestSuccess({
            posts: getState().posts.data.posts.concat(...processedPosts),
            nextAfter: after,
            numberOfLoads: ++getState().posts.data.numberOfLoads,
        }))
      })
      .catch((error) => {
         console.log(error);
         dispatch(postsRequestError(String(error)))
      })
}