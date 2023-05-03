import React from "react";
import q from '../../Assets/Form.module.css';
// import Dialog from "./Dialogs/Dialog";
import { useState } from "react";
import { useEffect } from "react";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
const Chat = (props) => {

    // let chatrender =
    // props.state.chatspage.chatsinfo.map(dialog => {return(<Dialog name = {dialog.name} id= {dialog.id} key ={dialog.id} />)});
    //     return(
    // <div className='main'>
    //    <div className={q.Bars}>
    // {chatrender}
    //        </div>
    //        </div>
    //     );


    return (
        <><Messages />
            <Messageadding />
        </>
    )
}

const Messages = () => {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        ws.addEventListener('message',
            (e) => { setMessages((prewProps) => [...prewProps, ...JSON.parse(e.data)]) }
        )
    }, [])

    return (
        <div style={{ height: '500px', overflowY: 'auto', border: 'solid' }}>
            {messages.map((m) => <Message message={m} />)}
        </div>
    )
}
const Message = ({ message }) => {


    return (
        <div>
            <img style={{ width: '50px' }} src={message.photo} alt="aboba" />
            <b>{message.userName}</b>
            <br />
            <span>{message.message}</span>
            <hr />
        </div>
    )
}
const Messageadding = () => {
    const [message, setMessage] = useState('')

    const send = () => {
        if (!message) { return; }
        ws.send( message )
        setMessage('')
    }
    return (
        <div>
            <div><textarea cols="20" rows="5" onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea></div>
            <div><button className={q.button} onClick={send}>Send</button></div>
        </div>
    )
}
export default Chat;