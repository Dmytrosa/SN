import "./App.css";
import Head from "./components/Head/Head";
import SideBar from "./components/SideBar/SideBar";
import ChatsContainer from "./components/Profile/chats/ChatsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
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
              element={
                <ChatsContainer
                store = {props.store}
                />}
            />
            <Route
              path="/Profile"
              element={<ProfileContainer
                store= {props.store}
                />}
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
