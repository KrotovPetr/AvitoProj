import {AppDispatch} from "../../utils/Types/store";


export const ADD_COMMENTS: 'ADD_COMMENTS' = 'ADD_COMMENTS';


export function addComments(arr: any){
    return function (dispatch: AppDispatch){
        dispatch({type: ADD_COMMENTS, data: arr});
    }
}