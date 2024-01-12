import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAddUser, IUser } from "../../types";

interface IUserState {
  users: IUser[];
  user: IUser | null;
}

const initialState: IUserState = {
  users: [],
  user: null,
};

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    getUserRequest() {},
    getUserSuccess(state: IUserState, action: PayloadAction<IUser[]>) {
      state.users = [...action.payload];
    },
    getOneUserRequest(_state: IUserState, _action: PayloadAction<string>) {},
    getOneUserSuccess(state: IUserState, action: PayloadAction<IUser>) {
      state.user = { ...action.payload };
    },
    addUserRequest(_state: IUserState, _action: PayloadAction<IAddUser>) {},
    addUserSuccess(state: IUserState, action: PayloadAction<IUser>) {
      state.users = [...state.users, action.payload];
    },
  },
});

export const userActions = userSlice.actions;

export const userReducers = userSlice.reducer;
