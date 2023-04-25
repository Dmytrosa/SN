import React, { PureComponent } from "react";
import Head from "./Head"
import axios from "axios";
import { connect } from "react-redux"
import { LogoutThunk } from "../../redux/authReducer";



class HeadContainer extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props != nextProps || nextState != this.state
    }
    render() {
        return <Head {...this.props} />
    }
};

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
);

export default connect(mapStateToProps, { LogoutThunk })(HeadContainer);