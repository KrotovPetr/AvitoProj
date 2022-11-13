import {combineReducers} from "@reduxjs/toolkit";
import {
    ADD_COMMENTS,
    GET_SECONDARY_COMMENTS_ACTIVE,
    GET_SECONDARY_COMMENTS_ERROR, GET_SECONDARY_COMMENTS_SUCCESS,
    SET_ARTICLE_FETCH_ACTIVE,
    SET_ARTICLE_FETCH_ERROR,
    SET_ARTICLE_FETCH_SUCCESS,
    SET_ARTICLES_ARRAY,
    SET_ROOT_COMMENTS,
    SET_ROOT_COMMENTS_ACTIVE,
    SET_ROOT_COMMENTS_ERROR,
    SET_ROOT_COMMENTS_SUCCESS
} from "../actions/componentsActions";

export type TInitialState = {
    commentsData: any,
    rootComments: any,
    articlesArray: any,
    apiURL: string,
    articleFetchActive: boolean,
    articleFetchSuccess: boolean,
    articleFetchError: boolean,
    rootsCommentFetchActive: boolean,
    rootsCommentFetchSuccess: boolean,
    rootsCommentFetchError: boolean,
    secondaryCommentFetchActive: boolean,
    secondaryCommentFetchSuccess: boolean,
    secondaryCommentFetchError: boolean,
    updateDetector: boolean
};

const initialState: TInitialState = {
    commentsData: [],
    rootComments: [],
    articlesArray: [],
    apiURL: 'http://localhost:5000/api',
    updateDetector: false,
    articleFetchActive: false,
    articleFetchSuccess: false,
    articleFetchError: false,
    rootsCommentFetchActive: false,
    rootsCommentFetchSuccess: false,
    rootsCommentFetchError: false,
    secondaryCommentFetchActive: false,
    secondaryCommentFetchSuccess: false,
    secondaryCommentFetchError: false,
}

export const componentReducer = (
    state: TInitialState = initialState,
    action: any
): TInitialState => {
    switch (action.type){
        case ADD_COMMENTS:{
            return {
                ...state,
                commentsData: action.data
            }
        }

        case SET_ROOT_COMMENTS:{
            return {
                ...state,
                commentsData: action.data,
                rootComments: action.data
            }
        }

        case SET_ARTICLE_FETCH_SUCCESS:{
            return {
                ...state,
                articlesArray: action.data,
                articleFetchActive:false,
                articleFetchSuccess:true,
                articleFetchError:false,
            }
        }

        case SET_ARTICLE_FETCH_ERROR:{
            return {
                ...state,
                articleFetchActive:false,
                articleFetchSuccess:false,
                articleFetchError:true,
            }
        }

        case SET_ARTICLE_FETCH_ACTIVE:{
            return {
                ...state,
                articleFetchActive:true,
                articleFetchSuccess:false,
                articleFetchError:true,
            }
        }

        case SET_ROOT_COMMENTS_ACTIVE:{
            return {
                ...state,
                rootsCommentFetchActive: true,
                rootsCommentFetchSuccess: false,
                rootsCommentFetchError: false,
            }
        }

        case SET_ROOT_COMMENTS_ERROR:{
            return {
                ...state,
                rootsCommentFetchActive: false,
                rootsCommentFetchSuccess: false,
                rootsCommentFetchError: true,
            }
        }

        case SET_ROOT_COMMENTS_SUCCESS:{
            return {
                ...state,
                rootComments: action.data,
                commentsData: action.data,
                updateDetector: !state.updateDetector,
                rootsCommentFetchActive: false,
                rootsCommentFetchSuccess: true,
                rootsCommentFetchError: false,
            }
        }



        case GET_SECONDARY_COMMENTS_ACTIVE:{
            return {
                ...state,
                secondaryCommentFetchActive: true,
                secondaryCommentFetchSuccess: false,
                secondaryCommentFetchError: false,
            }
        }

        case GET_SECONDARY_COMMENTS_ERROR:{
            return {
                ...state,
                secondaryCommentFetchActive: false,
                secondaryCommentFetchSuccess: false,
                secondaryCommentFetchError: true,
            }
        }

        case GET_SECONDARY_COMMENTS_SUCCESS:{
            return {
                ...state,
                commentsData: action.data,
                secondaryCommentFetchActive: false,
                secondaryCommentFetchSuccess: true,
                secondaryCommentFetchError: false,
            }
        }

        default: {
            return state;
        }
    }
}
export const rootReducer = combineReducers({
    component: componentReducer,
});