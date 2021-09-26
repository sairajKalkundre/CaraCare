import {configureStore} from "@reduxjs/toolkit"
import hydrationReducer from "../redux/slices/hydrationSlice";
import { persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    storage : AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, hydrationReducer);

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  });

export const store =  configureStore({
    reducer : {
            hydration  :  persistedReducer,
    },
    middleware :  customizedMiddleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;