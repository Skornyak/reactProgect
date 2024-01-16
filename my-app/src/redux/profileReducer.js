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
  const copyState = { ...newState };
  const postId = (Math.random() * 1e8);
  switch (action.type) {
    /* eslint-disable-next-line react/jsx-no-bind */
    case ADD_POST:
      copyState.posts = [...newState.posts];
      copyState.posts.push({
        id: postId,
        message: state.newPostText,
        likesCount: 0,
      });
      copyState.newPostText = '';
      return copyState;

    case UPDATE_NEW_POST_TEXT:
      copyState.newPostText = action.newText;
      return copyState;

    default:
      return newState;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text,
});
export default profileReducer;
