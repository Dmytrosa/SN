import React from "react";
import Chats from "./Chats";
import {connect} from "react-redux";
// const ChatsContainer =(props) =>{
//     debugger

//     let chatsinfo=props.store.getState().chatspage.chatsinfo
//     return(
//         <Chats chatsinfo={chatsinfo}/>
//     );
// }

let mapStateToProps = (state) =>{
    //debugger
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