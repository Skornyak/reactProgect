import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

// function MyPostsContainer({ store }) {
//   const state = store.getState();
//   const addPost = () => {
//     store.dispatch(addPostActionCreator());
//   };
//   const onPostChange = (text) => {
//     const action = updateNewPostTextActionCreator(text);
//     store.dispatch(action);
//   };
//
//   return (
//     <MyPosts
//       updateNewPostText={onPostChange}
//       addPost={addPost}
//       posts={state.profilePage.posts}
//       newPostsText={state.profilePage.newPostText}
//     />
//   );
// }
const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});
const mapDispatchToProps = (dispatch) => ({
  updateNewPostText: (text) => {
    const action = updateNewPostTextActionCreator(text);
    dispatch(action);
  },
  addPost: () => {
    dispatch(addPostActionCreator());
  },
});
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
