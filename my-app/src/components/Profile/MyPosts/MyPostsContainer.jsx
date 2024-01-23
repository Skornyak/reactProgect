import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

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
