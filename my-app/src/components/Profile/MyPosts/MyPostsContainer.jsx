import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

function MyPostsContainer({ store }) {
  const state = store.getState();
  const addPost = () => {
    store.dispatch(addPostActionCreator());
  };
  const onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostsText={state.profilePage.newPostText}
    />
  );
}
export default MyPostsContainer;
