import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: { email: '', password: '', userName: '', },
    isLoggedIn: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn(state, { payload }) {
            state.user.email = payload.email;
            state.user.password = payload.password;
            state.user.userName = payload.userName;
            state.isLoggedIn = true;
        },
        signOut(state) {
            state.user = { email: '', password: '', userName: '' };
            state.isLoggedIn = false;
        }
    }
});

export const { signIn, signOut } = authSlice.actions;
export const authReducer = authSlice.reducer;