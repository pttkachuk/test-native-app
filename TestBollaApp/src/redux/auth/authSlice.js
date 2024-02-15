import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk, logoutUserThunk } from "./authThunk";

const initialState = {
    user: { login: null, userName: null },
    token: '',
    isLoading: false,
    error: null,
};
console.log('initialstate token:', initialState.token);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            //-------------------- LOGIN ---------------------------
            .addCase(loginUserThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUserThunk.fulfilled, (state, action) => {
                console.log('login fullfiled response:', action.payload);
                state.isLoading = false;
                state.user.login = action.payload.login;
                state.user.userName = action.payload.name;
                state.token = action.payload.token;
            })
            .addCase(loginUserThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            //-------------------- LOGOUT ---------------------------
            .addCase(logoutUserThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logoutUserThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.user = { login: null, userName: null };
                state.token = '';
            })
            .addCase(logoutUserThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const { signIn, signOut } = authSlice.actions;
export const authReducer = authSlice.reducer;