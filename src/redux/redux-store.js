import {applyMiddleware,  combineReducers , compose,  legacy_createStore as createStore } from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore (reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store=store;

export default store;