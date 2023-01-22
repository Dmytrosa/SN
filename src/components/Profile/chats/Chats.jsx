import React from "react";
import q from'./Chats.module.css';
import Dialog from "./Dialogs/Dialog";
import {GetDataActionCreating} from "../../../redux/state"
const Chats =(chatsinfo) =>{
    let chatrender =
     chatsinfo.dispatch(GetDataActionCreating()).chatsinfo.map(dialog =>{return(<Dialog name = {dialog.name} id= {dialog.id} />)});
    return(
<div className='main'>
   <div className={q.Bars}>
{chatrender}
       </div>
       </div>
    );
}
export default Chats;