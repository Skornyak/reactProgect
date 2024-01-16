import React from 'react';
import './App.css';
import './components/Header/Header.module.css';
import './components/Navbar/Navbar.module.css';
import './components/Profile/Profile.module.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App({ store, state, dispatch }) {
  return (
    <div className="app_wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/settings" element={<Settings />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route
            path="/profile"
            element={<Profile store={store} />}
          />
          <Route
            path="/dialogs"
            element={(
              <DialogsContainer
                store={state}
                dispatch={dispatch}
              />
)}
          />
          <Route
            path="/friends"
            element={(
              <Friends
                store={store}
              />
)}
          />
          <Route
            path="/users"
            element={(
              <UsersContainer />

 )}
          />
        </Routes>
      </div>
    </div>
  );
}
export default App;
