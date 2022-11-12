import {combineReducers} from "@reduxjs/toolkit";
import {ADD_COMMENTS} from "../actions/componentsActions";

export type TInitialState = {
    commentsData: any,
};

const initialState: TInitialState = {
    commentsData: [],

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

        default: {
            return state;
        }
    }
}
export const rootReducer = combineReducers({
    component: componentReducer,
});