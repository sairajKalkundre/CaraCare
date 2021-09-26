import React from "react";
import Home from "./Home/Home";
import {store} from "../redux/store";
import { Provider } from "react-redux";

export default function Screen():React.ReactElement{
    return(
        <Provider store = {store}>
                 <Home/>
        </Provider>
    )
}