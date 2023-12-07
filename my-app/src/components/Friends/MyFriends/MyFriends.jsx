import { NavLink } from 'react-router-dom';
import React from 'react';
import s from './MyFriends.module.css';

function MyFriends({ id, name }) {
  const path = `/friends/${id}`;
  return (
    <div className={s.wrapper}>
      <div className={s.ava} />
      <NavLink className={s.nameLink} to={path}>{name}</NavLink>
    </div>
  );
}

export default MyFriends;
