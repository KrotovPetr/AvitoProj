import {AppDispatch} from "../../utils/Types/store";


export const ADD_COMMENTS: 'ADD_COMMENTS' = 'ADD_COMMENTS';
export const SET_ROOT_COMMENTS: 'SET_ROOT_COMMENTS' = 'SET_ROOT_COMMENTS';
export const SET_ARTICLES_ARRAY: 'SET_ARTICLES_ARRAY' = 'SET_ARTICLES_ARRAY';
export const SET_ARTICLE_FETCH_ACTIVE: 'SET_ARTICLE_FETCH_ACTIVE' = 'SET_ARTICLE_FETCH_ACTIVE';
export const SET_ARTICLE_FETCH_SUCCESS: 'SET_ARTICLE_FETCH_SUCCESS' = 'SET_ARTICLE_FETCH_SUCCESS';
export const SET_ARTICLE_FETCH_ERROR: 'SET_ARTICLE_FETCH_ERROR' = 'SET_ARTICLE_FETCH_ERROR';
export const SET_ROOT_COMMENTS_ERROR: 'SET_ROOT_COMMENTS_ERROR' = 'SET_ROOT_COMMENTS_ERROR';
export const SET_ROOT_COMMENTS_SUCCESS: 'SET_ROOT_COMMENTS_SUCCESS' = 'SET_ROOT_COMMENTS_SUCCESS';
export const SET_ROOT_COMMENTS_ACTIVE: 'SET_ROOT_COMMENTS_ACTIVE' = 'SET_ROOT_COMMENTS_ACTIVE';
export const GET_SECONDARY_COMMENTS_ACTIVE: 'GET_SECONDARY_COMMENTS_ACTIVE' = 'GET_SECONDARY_COMMENTS_ACTIVE';
export const GET_SECONDARY_COMMENTS_ERROR: 'GET_SECONDARY_COMMENTS_ERROR' = 'GET_SECONDARY_COMMENTS_ERROR';
export const GET_SECONDARY_COMMENTS_SUCCESS: 'GET_SECONDARY_COMMENTS_SUCCESS' = 'GET_SECONDARY_COMMENTS_SUCCESS';


export function addComments(arr: any){
    return function (dispatch: AppDispatch){
        dispatch({type: ADD_COMMENTS, data: arr});
    }
}

export function saveRootComments(){
    return function (dispatch: AppDispatch){
        fetch("/api/comments/roots", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        })
            .then(response => {
                dispatch({type: SET_ROOT_COMMENTS_ACTIVE})
                return response.json();
            })
            .then(result => {
                dispatch({type:SET_ROOT_COMMENTS_SUCCESS, data: result.data})})
            .catch(error => dispatch({type:SET_ROOT_COMMENTS_ERROR}));
    }
}

export function getSecondaryComments(id: number, commentsData: any){
    return function (dispatch: AppDispatch){
        fetch(`/api/comments/secondary?id=${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                dispatch({type: GET_SECONDARY_COMMENTS_ACTIVE})
                return response.json();
            })
            .then(result => {
                let newArr:any = [];
                let index = commentsData.findIndex((elem:any)=>{return id === elem.id})
                newArr = commentsData.slice(0,index).concat(result.data).concat(commentsData.slice(index+1,commentsData.length))
                dispatch({type:GET_SECONDARY_COMMENTS_SUCCESS, data: newArr})
            })
            .catch(error => {
                dispatch({type:GET_SECONDARY_COMMENTS_ERROR})});
    }
}


export function getArticlesFromServer(baseURL: string){
    return function (dispatch: AppDispatch){
       fetch("/api/articles/all", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        })
            .then(response => {
                dispatch({type: SET_ARTICLE_FETCH_ACTIVE})
                return response.json();
            })
            .then(result => {
                dispatch({type:SET_ARTICLE_FETCH_SUCCESS, data: result.data})})
            .catch(error => dispatch({type:SET_ARTICLE_FETCH_ERROR}));
    }
}