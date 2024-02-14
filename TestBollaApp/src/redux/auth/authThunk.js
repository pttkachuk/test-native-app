import { createAsyncThunk } from '@reduxjs/toolkit';

import { setToken, currentUser, loginUser, logOutUser, resetPassword } from '../../api/auth';

//loginThunk
export const loginUserThunk = createAsyncThunk(
    'auth/login',
    async (formData, thunkAPI) => {
        try {
            const data = await loginUser(formData);
            console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

//currentThunk
export const currentUserThunk = createAsyncThunk(
    'auth/current',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.user.token;
        try {
            setToken(token);
            const data = await currentUser();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

//logoutUser
export const logoutUserThunk = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            const data = await logOutUser();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

//resetPassword
export const resetPasswordThunk = createAsyncThunk(
    'auth/resetPassword',
    async (userData, thunkAPI) => {
        try {
            const data = await resetPassword(userData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);