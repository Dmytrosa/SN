import "./App.css";
import Head from "./components/Head/Head";
import SideBar from "./components/SideBar/SideBar";
import Settings from "./components/Profile/Settings/Settings";

import ChatsContainer from "./components/Profile/chats/ChatsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Profile/Users/UsersContainer"

import { Route, Routes } from "react-router-dom";

const App = () => {

  return (
      <div className="App-w">
        <Head />
        <div className="App-w-content">
          <Routes>
            <Route
              path="/Chats"
              element={<ChatsContainer/>}
            />
            <Route
              path="/Profile"
              element={<ProfileContainer/>}
            />
            <Route
              path="/Users"
              element={<UsersContainer/>}
            />
            <Route
              path="/Settings"
              element={<Settings />}
            />
          </Routes>
        </div>
        <SideBar />
      </div>
     
  );
};

export default App;
