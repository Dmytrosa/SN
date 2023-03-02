import React from "react";
import Head from "./Head"
import axios from "axios";
import {connect} from "react-redux"
import { SetAuthUserData, LogoutThunk } from "../../redux/authReducer";
class HeadContainer extends React.Component{
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(response => { 
        debugger
if (response.data.resultCode === 0){
  debugger
  let {id, login, email } = response.data.data;
  this.props.SetAuthUserData(id, email, login, true)
}
          });
  }
 render(){
  return <Head {...this.props}/>
 }
  

   };


   debugger
   const mapStateToProps=(state)=>(
    
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login ,
    }
    );

export default connect (mapStateToProps, {SetAuthUserData, LogoutThunk}) (HeadContainer);