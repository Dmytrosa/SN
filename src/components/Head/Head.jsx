import React from "react";
import { NavLink } from "react-router-dom";
import q from'./Head.module.css';
import p from "../Assets/Form.module.css"
import k from "../Profile/Posts/Post/Post.module.css"

const Head =(props) =>{
    return(
      <header className='head'  >
      <h1 className={q.Name}>GigaNetwork
       <div className={q.loginBlock}>
        {props.isAuth? <div className={q.logout}><button className={k.delete} onClick={props.LogoutThunk}>Logout</button>{props.login}</div> :
        <button className={k.delete}><NavLink to ={'/login'}>Login</NavLink></button>}</div></h1>
      </header>
    );
}
export default Head;