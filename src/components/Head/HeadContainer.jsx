import React from "react";
import Head from "./Head"
import axios from "axios";
import {connect} from "react-redux"
import { SetAuthUserData } from "../../redux/authReducer";
class HeadContainer extends React.Component{
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(response => { 
if (response.data.resultCode === 0){
  let {id, login, email } = response.data.data;
  this.props.SetAuthUserData(id, email, login)
}
          });
  }
 render(){
  return <Head {...this.props}/>
 }
  

   };


   const mapStateToProps=(state)=>(
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login ,
    }
    );

export default connect (mapStateToProps, {SetAuthUserData}) (HeadContainer);