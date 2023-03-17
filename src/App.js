import "./App.css";
import HeadContainer from "./components/Head/HeadContainer";
import SideBar from "./components/SideBar/SideBar";
import Settings from "./components/Profile/Settings/Settings";
import ChatsContainer from "./components/Profile/chats/ChatsContainer";
import ProfileContainer from "./components/Profile/Profile/ProfileContainer";
import UsersContainer from "./components/Profile/Users/UsersContainer"
import LoginContainer from "./components/Head/Login/LoginContainer"
import Loader from "./components/Assets/Loader";
import { Route, Routes } from "react-router-dom";
// import { Component } from "react";
import { connect } from "react-redux";
import { InitApp } from "./redux/appReducer";
import { PureComponent } from "react";

class App extends PureComponent {


  componentDidMount() {
    this.props.InitApp()


  }
  render() {
   
   if ( !this.props.isInit){
    return <Loader/>
   }
    return (
     
      <div className="App-w">
        <HeadContainer />
        <div className="App-w-content">
          <Routes>
            <Route
              path="/Chats"
              element={<ChatsContainer />}
            />
            <Route
              path="/Profile/:profileId?"
              element={<ProfileContainer />}
            />
            <Route
              path="/Users"
              element={<UsersContainer />}
            />
            <Route
              path="/Settings"
              element={<Settings />}
            />
            <Route
              path="/Loader"
              element={<Loader />}
            />
            <Route
              path="/Login"
              element={<LoginContainer />}
            />
          </Routes>
        </div>
        <SideBar />
      </div>
    );
  }
};
const mapStateToProps =(state) => {
  return {
  isInit: state.app.isInit
  }
}

export default connect(mapStateToProps, { InitApp })(App);
