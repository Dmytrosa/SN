import { applyMiddleware, combineReducers , legacy_createStore as createStore } from "redux";

import ProfileReducer from "./profileReducer";
import ChatsReducer from "./chatsReduser";
import UsersReducer from "./usersReduser";
import AuthReducer from "./authReducer";
let reducers = combineReducers(
    {
        profilepage: ProfileReducer,
        chatspage: ChatsReducer,
        userspage: UsersReducer,
        auth: AuthReducer,
    }
);



let store = createStore (reducers, applyMiddleware());

window.store=store;

export default store;