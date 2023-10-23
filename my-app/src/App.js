import logo from './logo.svg';
import './App.css';
import './components/Header/Header.module.css';
import './components/Navbar/Navbar.module.css';
import './components/Profile/Profile.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs /Dialogs";
import s from './App.css'

const App = () => {
    return (
        <div className="app_wrapper">
            < Header/>
            < Navbar/>
            <div className="app-wrapper-content">
            {/*< Dialogs />*/}
                <Profile/>
            </div>
        </div>
    );
}
export default App;
