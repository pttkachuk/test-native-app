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

const persistConfig = {
    key: 'dati',
    storage: AsyncStorage,
};

const persistDataReducer = persistReducer(persistConfig, dataReducer);

export const store = configureStore({
    reducer: {
        data: persistDataReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },

        }),
});

export const persistor = persistStore(store);
//export default { store, persistor };