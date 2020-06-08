import { combineReducers, applyMiddleware, createStore } from "redux";
import { AppActions } from "../models/action";

import thunk, { ThunkMiddleware } from 'redux-thunk'
import { todoReducer } from "./reducers";

const rootReducer = combineReducers({
    todoReducer: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore<RootState, AppActions, {}, {}>(
        rootReducer,
        applyMiddleware(
            thunk as ThunkMiddleware<RootState, AppActions>
        )
    );

    return store;
}