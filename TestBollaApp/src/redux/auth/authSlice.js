import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk, logoutUserThunk } from "./authThunk";

const initialState = {
    user: { login: '', userName: '' },
    token: null,
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
            .addCase(loginUserThunk.fulfilled, (state, payload) => {
                console.log(payload.token);
                state.isLoading = false;
                state.user.login = payload.login;
                state.user.userName = payload.name;
                state.token = payload.token;
            })
            .addCase(loginUserThunk.rejected, (state, payload) => {
                state.isLoading = false;
                state.error = payload;
            })
            //-------------------- LOGOUT ---------------------------
            .addCase(logoutUserThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logoutUserThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.user = { login: '', userName: '' };
                state.token = null;
            })
            .addCase(logoutUserThunk.rejected, (state, payload) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
});

export const { signIn, signOut } = authSlice.actions;
export const authReducer = authSlice.reducer;