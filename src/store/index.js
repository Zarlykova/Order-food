import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { basketReducer } from "./basket/basketReducer";


const rootReducer = combineReducers({
    basket:basketReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))