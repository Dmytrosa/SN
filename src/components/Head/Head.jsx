import React from "react";
import { NavLink } from "react-router-dom";
import q from'./Head.module.css';

const Head =(props) =>{
    return(
      <header className='head'>
      <h1 className={q.Name}>GigaNetwork
       <div className={q.loginBlock}>
        {props.isAuth? <div className={q.logout}><button  onClick={props.LogoutThunk}>Logout</button>{props.login}</div> :
        <NavLink to ={'/login'}>Login</NavLink>}</div></h1>
      </header>
    );
}
export default Head;