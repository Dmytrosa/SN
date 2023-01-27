import "./App.css";
import Head from "./components/Head/Head";
import SideBar from "./components/SideBar/SideBar";
import Chats from "./components/Profile/chats/Chats";
import Profile from "./components/Profile/Profile";
import NewBoys from "./components/Profile/NewBoys/NewBoys";
import Settings from "./components/Profile/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
 
  return (
    <BrowserRouter>
      <div className="App-w">
        <Head />
        <div className="App-w-content">
          <Routes>
            <Route
              path="/Chats"
              element ={
              <Chats
               store ={props.store}
               
                 />}
            />
            <Route
              path="/Profile"
              element={<Profile
              profilepage ={props.state.profilepage}
                dispatch={props.dispatch} />}
            />
            <Route
              path="/NewBoys"
               element={<NewBoys />}
                />
            <Route
             path="/Settings"
              element={<Settings />}
               />
          </Routes>
        </div>
        <SideBar />
      </div>
    </BrowserRouter>
  );
};

export default App;
