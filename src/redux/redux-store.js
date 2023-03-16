import {applyMiddleware,  combineReducers , legacy_createStore as createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import ProfileReducer from "./profileReducer";
import ChatsReducer from "./chatsReduser";
import UsersReducer from "./usersReduser";
import AuthReducer from "./authReducer";
import AppReducer from "./appReducer";
let reducers = combineReducers(
    {
        profilepage: ProfileReducer,
        chatspage: ChatsReducer,
        userspage: UsersReducer,
        auth: AuthReducer,
        app: AppReducer,
    }
);



let store = createStore (reducers, applyMiddleware(thunkMiddleware));

window.store=store;

export default store;