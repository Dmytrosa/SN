import React from "react";
import Chats from "./Chats";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
      chatsinfo: state.chatspage.chatsinfo,
      state: state,
    }
    }

let mapDispatchToProps = (dispatch) =>{
return{
  
}
}

let ChatsContainer = connect (mapStateToProps,mapDispatchToProps)(Chats);
export default ChatsContainer;