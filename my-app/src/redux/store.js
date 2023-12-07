import profileReducer from './profileReducer';
import dialogsReducer from './dilogsReducer';
import sideBarReducer from './sideBarReducer';
import friendsReducer from './friendsReducer';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      ],

      newPostText: '',

    },
    dialogsPage: {
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Thanks, a u?' },
        { id: 4, message: 'Thanks, a u?' },
      ],

      newMessageBody: '',

      dialogs: [
        { id: 1, name: 'Dmitriy' },
        { id: 2, name: 'Mary' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Victor' },
      ],
    },
    sideBar: {
      navMenu: [
        { id: 1, name: 'Profile' },
        { id: 2, name: 'Massages' },
        { id: 3, name: 'News' },
        { id: 4, name: 'Music' },
        { id: 5, name: 'Settings' },
        { id: 6, name: 'Friends' },
      ],
    },
    friends: [
      { id: 1, name: 'Dmitriy' },
      { id: 2, name: 'Mary' },
      { id: 3, name: 'Alex' },
      { id: 4, name: 'Victor' },
      { id: 5, name: 'Sam' },
    ],

  },
  // eslint-disable-next-line no-underscore-dangle
  _callSubscriber() {},

  getState() {
    // eslint-disable-next-line no-underscore-dangle
    return this._state;
  },
  subscribe(observer) {
    // eslint-disable-next-line no-underscore-dangle
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // eslint-disable-next-line no-underscore-dangle
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    // eslint-disable-next-line no-underscore-dangle
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    // eslint-disable-next-line no-underscore-dangle
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);
    // eslint-disable-next-line no-underscore-dangle
    this._state.friends = friendsReducer(this._state.friends, action);
    // eslint-disable-next-line no-underscore-dangle
    this._callSubscriber(this._state);
  },

};

export default store;
window.store = store;
