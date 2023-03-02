import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
import { LoginThunk,LogoutThunk } from "../../../redux/authReducer";
import {Login} from "./Login";

class LoginContainer extends React.Component {

  componentDidMount() {}
  
  onPageChanged(){}


  render() {
    return   (this.props.isAuth)? <Navigate to ='/Profile' /> :<Login {...this.props}   />
  }

};


let mapStateToProps = (state) => {

  return {
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    Login_: (email, password, remember) => {
      dispatch(LoginThunk(email, password, remember));
    },
    
    Logout: () => {
        dispatch(LogoutThunk());
      },
  }
}




 export default compose (
  connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer)