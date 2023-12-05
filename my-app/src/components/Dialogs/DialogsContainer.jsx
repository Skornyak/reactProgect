import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dilogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let dialogsPage = props.store.dialogsPage;
    const newMessageElement = React.createRef();
    const sendNewMessage = () => {
        props.dispatch(sendMessageCreator())
    };

    const onDialogChange = () => {
        const message = newMessageElement.current?.value;
        props.dispatch(updateNewMessageBodyCreator(message))
    }

    return (
        <Dialogs
            newMessageElement={newMessageElement}
            dialogs={dialogsPage.dialogs}
            messages={dialogsPage.messages}
            onSendNewMessage={sendNewMessage}
            onDialogChange={onDialogChange}
            dialogsPage={dialogsPage}
            newMessageText={props.store.dialogsPage.newMessageText}
        />
    )
}

export default DialogsContainer;