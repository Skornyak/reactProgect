import { combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dilogsReducer';
import sideBarReducer from './sideBarReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  friends: friendsReducer,
  usersPage: usersReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
