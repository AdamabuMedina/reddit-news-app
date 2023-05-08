import { Reducer } from 'react';
import { MeRequestAction, MeRequestSuccessAction, MeRequestErrorAction, IUserData } from './actions';
import {ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS} from "../constant";

export type MeState = {
   loading: boolean
   data: IUserData
   error: string
 }

 type MeActions =
   MeRequestAction
 | MeRequestErrorAction
 | MeRequestSuccessAction;

 export const meReducer: Reducer<MeState, MeActions> = (state, action) => {
   switch (action.type) {
     case ME_REQUEST:
       return {
         ...state,
         loading: true,
       }
     case ME_REQUEST_ERROR:
         return {
           ...state,
           error: action.error,
           loading: false,
         }
     case ME_REQUEST_SUCCESS:
         return {
           ...state,
           data: action.data,
           loading: false,
         }
     default:
       return state;
   }
 }