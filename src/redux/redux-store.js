import { combineReducers , legacy_createStore as createStore } from "redux";
import ProfileReducer from "./profileReducer";
import ChatsReducer from "./chatsReduser";
import UsersReducer from "./usersReduser";

let reducers = combineReducers(
    {
        profilepage: ProfileReducer,
        chatspage: ChatsReducer,
        userspage: UsersReducer,
    }
);



let store = createStore (reducers);

export default store;