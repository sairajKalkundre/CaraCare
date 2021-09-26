import {configureStore} from "@reduxjs/toolkit"
import hydrationReducer from "../redux/slices/hydrationSlice";

export const store =  configureStore({
    reducer : {
            hydration  :  hydrationReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;