import {
    Action,
    ActionCreator,
    compose,
    createStore,
} from 'redux';

import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
    TypedUseSelectorHook,
    useSelector as selectorHook,
    useDispatch as dispatchHook,
} from 'react-redux';
import {rootReducer} from "../../services/reducers/rootReducer";

const wsUrl = 'wss://norma.nomoreparties.space/orders';



export const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(rootReducer);

// получение состояний хранилища
export type RootState = ReturnType<typeof store.getState>;
// единый тип для экшенов
// export type TApplicationActions =
//     | TComponentsActions
//     | TRequestActions
//     | TSocketActions;

// типизация thunk
export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, RootState, any>
    >;

// типизация хранилища и thunk
export type AppDispatch = ThunkDispatch<RootState, never, any>;

// типизация useSelector
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

// типизация useDispatch
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();