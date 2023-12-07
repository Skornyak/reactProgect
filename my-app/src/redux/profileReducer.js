const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  ],
  newPostText: '',
};
const profileReducer = (state, action) => {
  const newState = state || initialState;
  switch (action.type) {
    case ADD_POST:
      newState.posts.push({
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      });
      newState.newPostText = '';
      return newState;
    case UPDATE_NEW_POST_TEXT:
      newState.newPostText = action.newText;
      return newState;

    default:
      return newState;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text,
});
export default profileReducer;
