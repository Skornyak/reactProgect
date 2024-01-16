const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const initialState = {
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Thanks, a u?' },
    { id: 4, message: 'Thanks, a u?' },
  ],

  newMessageText: '',

  dialogs: [
    { id: 1, name: 'Dmitriy' },
    { id: 2, name: 'Mary' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Victor' },
  ],
};
const dialogsReducer = (state, action) => {
  const newState = state || initialState;
  const copyState = {
    ...newState,
    // messages: [...initialState.messages],
  };
  copyState.messages = [...initialState.messages];
  switch (action.type) {
    case SEND_MESSAGE:
      copyState.messages = [...newState.messages];
      copyState.messages.push({
        id: 5,
        message: newState.newMessageText,
      });
      copyState.newMessageText = '';
      return copyState;
    case UPDATE_NEW_MESSAGE_BODY:
      copyState.newMessageText = action.newMessage;
      return copyState;

    default:
      return newState;
  }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE_BODY, newMessage: message,
});
export default dialogsReducer;
