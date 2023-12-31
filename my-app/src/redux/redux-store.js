import { combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dilogsReducer';
import sideBarReducer from './sideBarReducer';
import friendsReducer from './friendsReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  friends: friendsReducer,

});

const store = createStore(reducers);

export default store;
