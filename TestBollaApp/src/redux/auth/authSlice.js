import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk, logoutUserThunk } from "./authThunk";

const initialState = {
    user: { login: null, name: null, email: null },
    isLoading: false,
    error: null,
    userToken: null
};


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
                state.user.name = action.payload.name;
                state.user.email = action.payload.email;
                state.userToken = action.payload.token;
                console.log('token be like', state.userToken);
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
                state.user = { login: null, name: null, email: null };
                state.userToken = null;
                console.log('token after logout:', state.userToken);
            })
            .addCase(logoutUserThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const { signIn, signOut } = authSlice.actions;
export const authReducer = authSlice.reducer;