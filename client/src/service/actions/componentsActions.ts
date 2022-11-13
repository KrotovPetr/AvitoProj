import {AppDispatch} from "../../utils/Types/store";


export const ADD_COMMENTS: 'ADD_COMMENTS' = 'ADD_COMMENTS';
export const SET_ROOT_COMMENTS: 'SET_ROOT_COMMENTS' = 'SET_ROOT_COMMENTS';


export function addComments(arr: any){
    console.log(arr)
    return function (dispatch: AppDispatch){
        dispatch({type: ADD_COMMENTS, data: arr});
    }
}

export function saveRootComments(arr: any){
    return function (dispatch: AppDispatch){
        dispatch({type: SET_ROOT_COMMENTS, data: arr});
    }
}