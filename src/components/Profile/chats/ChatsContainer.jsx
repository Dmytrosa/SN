import React from "react";
import Chats from "./Chats";

const ChatsContainer =(props) =>{
    debugger

    let chatsinfo=props.store.getState().chatspage.chatsinfo
    return(
        <Chats chatsinfo={chatsinfo}/>
    );
}
export default ChatsContainer;