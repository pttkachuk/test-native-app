import { createAsyncThunk } from '@reduxjs/toolkit';

import { setToken, currentUser, loginUser, logOutUser, resetPassword } from '../../api/auth';

//loginThunk
export const loginUserThunk = createAsyncThunk(
    'auth/login',
    async (formData, thunkAPI) => {
        try {
            const data = await loginUser(formData);
            //console.log('login data:', data);
            return data;
        } catch (error) {
            // Personalizzazione del messaggio di errore
            let errorMessage = "Si è verificato un errore durante il login. Riprova più tardi.";
            if (error.response && error.response.status === 401) {
                errorMessage = "Credenziali non valide. Verifica e riprova.";
            } else if (error.response && error.response.status === 500) {
                errorMessage = "Errore interno del server. Riprova più tardi.";
            }

            // Reject con il messaggio di errore personalizzato
            return thunkAPI.rejectWithValue(error.message);
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
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//logoutUser
export const logoutUserThunk = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            const data = await logOutUser();
            console.log('logout THUNK data:', data);
            return data;
        } catch (error) {
            // Personalizzazione del messaggio di errore
            let errorMessage = "Si è verificato un errore durante la disconnessione. Riprova più tardi.";
            if (error.response && error.response.status === 401) {
                errorMessage = "Non sei autorizzato a effettuare questa operazione. Effettua nuovamente il login.";
            } else if (error.response && error.response.status === 500) {
                errorMessage = "Errore interno del server. Riprova più tardi.";
            }

            // Reject con il messaggio di errore personalizzato
            return thunkAPI.rejectWithValue(error.message);
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
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);