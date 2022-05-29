/**
https://redux-toolkit.js.org/api/createslice

A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

This API is the standard approach for writing Redux logic.

Internally, it uses createAction and createReducer, so you may also use Immer to write "mutating" immutable updates:
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface UserState {
  currentUser: null | string;
}

const initialState: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<string>) {
      state.currentUser = action.payload;
    },
    unsetCurrentUser(state) {
      state.currentUser = null;
    },
  },
});

export const getUser = (state: RootState) => state.user.currentUser;

export const { setCurrentUser, unsetCurrentUser } = userSlice.actions;

export default userSlice.reducer; // import as userReducer
