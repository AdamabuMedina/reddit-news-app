import { Action, ActionCreator } from 'redux';
import {ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS} from "../constant";
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../rootReducer';
import axios from 'axios';

export interface IUserData {
   name?: string;
   iconImg?: string;
}

export type MeRequestAction = {
   type: typeof ME_REQUEST
}

export type MeRequestSuccessAction = {
   type: typeof ME_REQUEST_SUCCESS
   data: IUserData
}

export type MeRequestErrorAction = {
   type: typeof ME_REQUEST_ERROR
   error: string
}

export const meRequest: ActionCreator<MeRequestAction> = () => ({
   type: ME_REQUEST
})

export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
   type: ME_REQUEST_SUCCESS,
   data,
})

export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
   type: ME_REQUEST_ERROR,
   error
})

export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
   dispatch(meRequest())
   axios.get(
      "https://oauth.reddit.com/api/v1/me",
      {
         headers: {authorization: `bearer ${getState().token}`}
      }
   )
      .then((res) => {
         const userData = res.data

         dispatch(meRequestSuccess({name: userData.name, iconImg: userData.icon_img}))
      })
      .catch((error) => {
         dispatch(meRequestError(String(error)))
   })
}