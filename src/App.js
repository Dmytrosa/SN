import "./App.css";
import HeadContainer from "./components/Head/HeadContainer";
import SideBar from "./components/SideBar/SideBar";
import Settings from "./components/Profile/Settings/Settings";
import ChatsContainer from "./components/Profile/chats/ChatsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Profile/Users/UsersContainer"
import Loader from "./components/Assets/Loader";

import { Route, Routes } from "react-router-dom";

const App = () => {

  return (
      <div className="App-w">
        <HeadContainer />
        <div className="App-w-content">
          <Routes>
            <Route
              path="/Chats"
              element={<ChatsContainer/>}
            />
            <Route
              path="/Profile/:profileId?"
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
            <Route
              path="/Loader"
              element={<Loader />}
            />
            <Route
              path="/Login"
            />

          </Routes>
        </div>
        <SideBar />
      </div>
     
  );
};

export default App;
