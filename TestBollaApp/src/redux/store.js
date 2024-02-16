import { configureStore } from '@reduxjs/toolkit';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dataReducer } from './data/dataSlice';
import { modalReducer } from './modal/modalSlice';
import { authReducer } from './auth/authSlice';
import { exitModalReducer } from './exitModal/exitModalSlice';

const persistConfigAuth = {
    key: 'auth',
    storage: AsyncStorage,
};

const persistAuthReducer = persistReducer(persistConfigAuth, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistAuthReducer,
        data: dataReducer,
        modal: modalReducer,
        exitModal: exitModalReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },

        }),
});

export const persistor = persistStore(store);