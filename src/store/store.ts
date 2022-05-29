import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userReducer from './reducers/userReducer';
import errorReducer from './reducers/errorLogReducer';
import busyStateReducer from './reducers/busyStateReducer';

const middlewares = [logger]; // add more middleware here to be applied sequentially

// All reducers that we write will be funnelled through this reeducer
export const store = configureStore({
  reducer: {
    user: userReducer,
    errorLog: errorReducer,
    busyState: busyStateReducer,
  },
  middleware: middlewares,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
