import { createAsyncThunk } from '@reduxjs/toolkit';

import { setToken, currentUser, loginUser, logOutUser, resetPassword } from '../../api/auth';

//loginThunk
export const loginUserThunk = createAsyncThunk(
    'user/login',
    async (formData, thunkAPI) => {
        try {
            const data = await loginUser(formData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

//currentThunk
export const currentUserThunk = createAsyncThunk(
    'user/current',
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
    'user/logout',
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
    'user/resetPassword',
    async (userData, thunkAPI) => {
        try {
            const data = await resetPassword(userData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);