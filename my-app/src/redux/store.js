import profileReducer from "./profileReducer";
import dialogsReducer from "./dilogsReducer";
import sideBarReducer from "./sideBarReducer";
import friendsReducer from "./friendsReducer";

let  store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
            ],

            newPostText: '',

        },
        dialogsPage : {
            messages : [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Thanks, a u?'},
                {id: 4, message: 'Thanks, a u?'}
            ],

            newMessageBody: '',


            dialogs: [
                {id: 1, name: 'Dmitriy'},
                {id: 2, name: 'Mary'},
                {id: 3, name: 'Alex'},
                {id: 4, name: 'Victor'}
            ],
        },
        sideBar: {
            navMenu: [
                {id: 1, name: 'Profile'},
                {id: 2, name: 'Massages'},
                {id: 3, name: 'News'},
                {id: 4, name: 'Music'},
                {id: 5, name: 'Settings'},
                {id: 6, name: 'Friends'},
            ]
        },
        friends : [
            {id: 1, name: 'Dmitriy'},
            {id: 2, name: 'Mary'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Victor'},
            {id: 5, name: 'Sam'},
        ],


    },
    _callSubscriber  () {},

    getState() {
        return this._state;
    },
    subscribe (observer)  {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this._state.friends = friendsReducer(this._state.friends, action);

        this._callSubscriber(this._state);

    }

}


export  default store;
window.store = store;





