import {combineReducers} from "@reduxjs/toolkit";
import {ADD_COMMENTS, SET_ROOT_COMMENTS} from "../actions/componentsActions";

export type TInitialState = {
    commentsData: any,
    rootComments: any
};

const initialState: TInitialState = {
    commentsData: [],
    rootComments: [],

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

        default: {
            return state;
        }
    }
}
export const rootReducer = combineReducers({
    component: componentReducer,
});