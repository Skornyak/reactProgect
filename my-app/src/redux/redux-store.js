import {combineReducers , legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dilogsReducer";
import sideBarReducer from "./sideBarReducer";
import friendsReducer from "./friendsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    friends: friendsReducer,

});



let store = createStore(reducers);

export default store;