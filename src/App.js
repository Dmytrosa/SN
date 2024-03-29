import "./App.css";
import HeadContainer from "./components/Head/HeadContainer";
import SideBar from "./components/SideBar/SideBar";
// import Settings from "./components/Profile/Settings/Settings";
import ChatsContainer from "./components/Profile/chats/ChatsContainer";
import ProfileContainer from "./components/Profile/Profile/ProfileContainer";
import UsersContainer from "./components/Profile/Users/UsersContainer"
import LoginContainer from "./components/Head/Login/LoginContainer"
import Loader from "./components/Assets/Loader";
import Micro from "./components/Assets/Loader copy";
// import { withLoaderSuspense } from "./hoc/withLoaderSuspens";
import { Route, Routes } from "react-router-dom";
// import { Component } from "react";
import { connect } from "react-redux";
import { InitApp } from "./redux/appReducer";
import React, { PureComponent } from "react";

const Settings = React.lazy(() => import('./components/Profile/Settings/Settings'))

class App extends PureComponent {


  componentDidMount() {
    this.props.InitApp()


  //   setTimeout(function() {
  //     document.getElementById("myButton").style.display = "block";
  //     document.getElementById("loader").style.display = "none";
  // }, 5000); // Приховує loader через 5 секунд

  }
  render() {

    // if (!this.props.isInit) {
    //   return <Loader />
    // }
    return (
      <div className="App-w">
{/* 
<button id="myButton" onClick={()=> {
      style.display = "none";
      document.getElementById("load").style.display = "block";
  }}>Натисніть мене</button>
<div id="load"  class="boxLoader">
    <div class="loader"></div>
</div> */}




        <HeadContainer />
        <div className="App-w-content">
          
          <React.Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/Settings"
                element={<Settings />}
              />
              <Route
                path="/Login"
                element={<LoginContainer />}
              />
            </Routes>
          </React.Suspense>

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
              path="/Loader"
              element={<Loader />}
            />
            <Route
              path="/Micro"
              element={<Micro />}
            />
          </Routes>
        </div>
        <SideBar />
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    isInit: state.app.isInit
  }
}

export default connect(mapStateToProps, { InitApp })(App);
