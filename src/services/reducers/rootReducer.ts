import {combineReducers} from "@reduxjs/toolkit";

export type TInitialState = {

};

const initialState: TInitialState = {

}

export const componentReducer = (
    state: TInitialState = initialState,
    action: any
): TInitialState => {
    switch (action.type){
        default: {
            return state;
        }
    }
}
export const rootReducer = combineReducers({
    component: componentReducer,
});