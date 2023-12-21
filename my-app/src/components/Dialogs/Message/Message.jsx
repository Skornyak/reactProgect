import React from 'react';
import style from '../Dialogs.module.css';

function Message({ messages }) {
  return (
    <div className={style.message}>{messages}</div>
  );
}

export default Message;
