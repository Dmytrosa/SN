import React from "react";
import { NavLink } from "react-router-dom";
import q from './Head.module.css';
import k from "../Profile/Posts/Post/Post.module.css"
import bb from "../Assets/Blackbutton.module.css"
import logo from "../../additions/mw.png"

const Head = (props) => {
  return (
    <header className='head'>
      <h1 className={q.Name}>
        <div className={q.SNNAme}>
          <img className={q.logo} src={logo} alt="logo" />
          ©MavpaWorld
        </div>
        <div className={q.loginBlock}>
          {props.isAuth ? <div className={q.logout}>


            <button className={q.noselect}  onClick={props.LogoutThunk}>
              <span className={q.text}>Logout</span>
              <span className={q.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">
                  </path>
                </svg>
              </span>
            </button>


            {/* <button className={k.delete} onClick={props.LogoutThunk}>Logout</button> */}

            {props.login}</div> : 
            <div className={q.logout}><button className={bb.Bbutton}><NavLink to={'/login'}>LOGIN</NavLink></button></div>
            }</div></h1>
    </header>
  );
}
export default Head;