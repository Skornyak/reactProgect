import logo from './logo.svg';
import './App.css';
import './components/Header/Header.module.css';
import './components/Navbar/Navbar.module.css';
import './components/Profile/Profile.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs /Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import s from './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
        <div className="app_wrapper">
            < Header/>
            < Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/profile" element={<Profile posts={props.posts}/>}/>
                    <Route path="/dialogs" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}
export default App;
