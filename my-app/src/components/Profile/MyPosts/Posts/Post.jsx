import React from 'react';
import style from './Post.module.css';

function Post({ message, likesCount }) {
  return (
    <div className={style.post_wrapper}>
      <img alt="img" className={style.post_ava} src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg" />
      <div>{message}</div>
      <span className={style.like}>
        Like
        {likesCount}
      </span>
    </div>
  );
}
export default Post;
