import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk, logoutUserThunk } from "./authThunk";

const initialState = {
    user: { login: '', password: '', userName: '', },
    token: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loginUserThunk.fulfilled, (state, payload) => {
                state.user.login = payload.login;
                state.user.password = payload.password;
                state.user.userName = payload.userName;
                state.token = payload.token;
            })
            .addCase(logoutUserThunk.fulfilled, (state) => {
                state.user = { login: '', password: '', userName: '' };
                state.token = null;
            })
    }
});

export const { signIn, signOut } = authSlice.actions;
export const authReducer = authSlice.reducer;