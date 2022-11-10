import {configureStore, ThunkAction, Action, createStore} from '@reduxjs/toolkit';
import {rootReducer} from "../services/reducers/rootReducer";

export const store = createStore(rootReducer);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
