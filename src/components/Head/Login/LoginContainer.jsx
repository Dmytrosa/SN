import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
import { LoginThunk, LogoutThunk } from "../../../redux/authReducer";
import { Login } from "./Login";

const LoginContainer = (props) => {
  return (props.isAuth) ? <Navigate to='/Profile' /> : <Login {...props} />
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    fail: state.auth.fail
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer)