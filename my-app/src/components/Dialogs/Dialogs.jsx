import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = ({
                     dialogs,
                     messages,
                     onDialogChange,
                     newMessageText,
                     newMessageElement,
                     onSendNewMessage,
                                        }) => {
    let dialogsElements = dialogs?.map((d) =>  <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages?.map((m) => <Message messages={m.message}/>)

    return (
        <div className={s.dialogs} >
           <div className={s.dialogsItems}>
               {dialogsElements}
           </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
           <div className={s.wrapperTextarea}>
               <textarea
                 onChange={onDialogChange}
                 value={newMessageText}
                 placeholder={'write message...'}
                 ref={newMessageElement}
                 className={s.dialogTextArea}/>
             <div className={s.buttonWrapper}>
                 <button disabled={!newMessageText} className={s.sendMessagButton} onClick={onSendNewMessage} type='button'>Send message</button>
             </div>
           </div>
        </div>
    )
}

export default Dialogs;