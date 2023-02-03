import { combineReducers , legacy_createStore as createStore } from "redux";
import ProfileReducer from "./profileReducer";
import ChatsReducer from "./chatsReduser";

let reducers = combineReducers(
    {
        profilepage: ProfileReducer,
        chatspage: ChatsReducer
        
    }
);



let store = createStore (reducers);

export default store;