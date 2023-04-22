import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";



let mapStateToPropsForRedirect = state => ({isAuth: state.auth.isAuth});

export const withAuthRedirect =(Component) => {
    class RedirectComponent extends PureComponent{
        
        render(){
            if (!this.props.isAuth) return <Navigate to ='/Login' />
            return <Component {...this.props}/>
        }
    }
    return connect (mapStateToPropsForRedirect)(RedirectComponent)
} 

