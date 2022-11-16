import {Action, ActionCreator, applyMiddleware, compose, createStore,} from 'redux';

import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook,} from 'react-redux';
import {rootReducer} from "../../Services/reducers/rootReducer";
import {TActions} from "./actionType";


export const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

export const store = createStore(rootReducer, enhancer);

// получение состояний хранилища
export type RootState = ReturnType<typeof store.getState>;


// типизация thunk
export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TActions>>;

// типизация хранилища и thunk
export type AppDispatch = ThunkDispatch<RootState, never, TActions>;

// типизация useSelector
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

// типизация useDispatch
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();