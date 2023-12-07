import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profileinfo from './Profileinfo/Profileinfo';

function Profile({ store }) {
  return (
    <div>
      <Profileinfo />
      <MyPostsContainer store={store} />
    </div>
  );
}

export default Profile;
