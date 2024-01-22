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

const persistConfig = {
    key: 'data',
    storage: AsyncStorage,
};

const persistDataReducer = persistReducer(persistConfig, dataReducer);

export const store = configureStore({
    reducer: {
        data: persistDataReducer,
        modal: modalReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },

        }),
});

export const persistor = persistStore(store);