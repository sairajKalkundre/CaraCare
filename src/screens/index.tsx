import React from "react";
import Home from "./Home/Home";
import {store} from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);
export default function Screen():React.ReactElement{
    return(
        <Provider store = {store}>
            <PersistGate loading = {null} persistor = {persistor}>
                 <Home/>
            </PersistGate>
        </Provider>
    )
}