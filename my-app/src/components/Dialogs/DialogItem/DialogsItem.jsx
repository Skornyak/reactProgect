import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Dialogs.module.css';

function DialogItem({ id, name }) {
  const path = `/dialog/${id}`;
  return (
    <div className={style.dialog}>
      <div className={style.wrapper}>
        <div className={style.ava} />
        <NavLink className={style.dialogLink} to={path}>{name}</NavLink>
      </div>
    </div>
  );
}

export default DialogItem;
