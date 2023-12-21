import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './MyFriends.module.css';

function MyFriends({ id, name }) {
  const path = `/friends/${id}`;
  return (
    <div className={style.wrapper}>
      <div className={style.ava} />
      <NavLink className={style.nameLink} to={path}>{name}</NavLink>
    </div>
  );
}

export default MyFriends;
