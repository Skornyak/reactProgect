import React from 'react';
import s from '../Dialogs.module.css';

function Message({ messages }) {
  return (
    <div className={s.message}>{messages}</div>
  );
}

export default Message;
