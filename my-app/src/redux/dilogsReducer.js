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
  switch (action.type) {
    case SEND_MESSAGE:
      newState.messages.push({
        id: 5,
        message: newState.newMessageText,
      });
      newState.newMessageText = '';
      return newState;
    case UPDATE_NEW_MESSAGE_BODY:
      newState.newMessageText = action.newMessage;
      return newState;

    default:
      return newState;
  }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE_BODY, newMessage: message,
});
export default dialogsReducer;
