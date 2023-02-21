import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {  basketSlice } from "./basket/basketSlice";


const rootReducer = combineReducers({
    [basketSlice.name]:basketSlice.reducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))