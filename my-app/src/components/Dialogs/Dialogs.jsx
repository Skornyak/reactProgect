import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

function Dialogs({
  dialogs,
  messages,
  onDialogChange,
  newMessageText,
  newMessageElement,
  onSendNewMessage,
}) {
  const dialogsElements = dialogs?.map(
    ({ id, name }) => <DialogItem key={id} name={name} id={id} />,
  );
  const messagesElements = messages?.map(
    ({ id, message }) => <Message key={id} messages={message} />,
  );
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
      </div>
      <div className={style.wrapperTextarea}>
        <textarea
          onChange={onDialogChange}
          value={newMessageText}
          placeholder="write message..."
          ref={newMessageElement}
          className={style.dialogTextArea}
        />
        <div className={style.buttonWrapper}>
          <button disabled={!newMessageText} className={style.sendMessagButton} onClick={onSendNewMessage} type="button">Send message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
