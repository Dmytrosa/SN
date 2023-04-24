import React from "react";
import q from'./Chats.module.css';
import Dialog from "./Dialogs/Dialog";
const Chats =(props) =>{
  
    let chatrender =
    props.state.chatspage.chatsinfo.map(dialog => {return(<Dialog name = {dialog.name} id= {dialog.id} key ={dialog.id} />)});
    return(
<div className='main'>
   <div className={q.Bars}>
{chatrender}
       </div>
       </div>
    );
}
export default Chats;