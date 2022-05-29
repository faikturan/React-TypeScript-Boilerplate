/**
Controls state relating to the errors logged by this application

https://redux-toolkit.js.org/api/createslice

A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

This API is the standard approach for writing Redux logic.

Internally, it uses createAction and createReducer, so you may also use Immer to write "mutating" immutable updates:
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type ErrorType = { code: number; message: string };

export interface ErrorActions {
  type: 'LOG_ERROR' | 'CLEAR_LOG'; // add more actions here
  payload: ErrorType;
}

export interface ErrorState {
  log: ErrorType[];
}

const initialState: ErrorState = {
  log: [],
};

const errorSlice = createSlice({
  name: 'errorLog',
  initialState,
  reducers: {
    logError(state, action: PayloadAction<ErrorType>) {
      state.log = state.log.concat(action.payload);
    },
    clearLog(state) {
      state.log = [];
    },
  },
});

// errors API
export const getErrorLog = (state: RootState) => state.errorLog.log;
export const getLatestError = (state: RootState) =>
  state.errorLog.log[state.errorLog.log.length];

export const { logError, clearLog } = errorSlice.actions;

export default errorSlice.reducer; // import as errorReducer
