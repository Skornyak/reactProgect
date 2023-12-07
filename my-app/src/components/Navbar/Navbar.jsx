import { NavLink } from 'react-router-dom';
import React from 'react';
import s from './Navbar.module.css';

function Navbar() {
  // let friendsElement = props.state.map( (f) => <MyFriends name={f.name} id={f.id}/> )

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs">Massages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings">Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/friends">Friends</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
