import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.css';

function DialogItem({ id, name }) {
  const path = `/dialog/${id}`;
  return (
    <div className={s.dialog}>
      <div className={s.wrapper}>
        <div className={s.ava} />
        <NavLink className={s.dialogLink} to={path}>{name}</NavLink>
      </div>
    </div>
  );
}

export default DialogItem;
