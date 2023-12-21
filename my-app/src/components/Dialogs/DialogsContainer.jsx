import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dilogsReducer';
import Dialogs from './Dialogs';

// function DialogsContainer({ store, dispatch }) {
//   const { dialogsPage } = store;
//   const newMessageElement = React.createRef();
//   const sendNewMessage = () => {
//     dispatch(sendMessageCreator());
//   };
//
//   const onDialogChange = () => {
//     const message = newMessageElement.current?.value;
//     dispatch(updateNewMessageBodyCreator(message));
//   };
//
//   return (
//     <Dialogs
//       newMessageElement={newMessageElement}
//       dialogs={dialogsPage.dialogs}
//       messages={dialogsPage.messages}
//       onSendNewMessage={sendNewMessage}
//       onDialogChange={onDialogChange}
//       dialogsPage={dialogsPage}
//       newMessageText={store.dialogsPage.newMessageText}
//     />
//   );
// }
const newMessageElement = React.createRef();
const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

const mapDispathToProps = (dispatch) => ({
  onDialogChange: () => {
    const message = newMessageElement.current?.value;
    dispatch(updateNewMessageBodyCreator(message));
  },
  sendNewMessage: () => {
    dispatch(sendMessageCreator());
  },
});

const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs);

export default DialogsContainer;
