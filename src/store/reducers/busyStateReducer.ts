/**
Controls state relating to the overall busy state of this application

https://redux-toolkit.js.org/api/createslice

A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

This API is the standard approach for writing Redux logic.

Internally, it uses createAction and createReducer, so you may also use Immer to write "mutating" immutable updates:
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// export type BusyStateActions = 'app' | string;

export interface BusyState {
  appBusy: boolean;
}

const initialState: BusyState = {
  appBusy: false,
};

const busyStateSlice = createSlice({
  name: 'busyState',
  initialState,
  reducers: {
    setAppBusyState(state, action: PayloadAction<boolean>) {
      state.appBusy = action.payload;
    },
  },
});

export const getAppBusyState = (state: RootState) => state.busyState.appBusy;

export const { setAppBusyState } = busyStateSlice.actions;

export default busyStateSlice.reducer; // import as busyStateReducer
