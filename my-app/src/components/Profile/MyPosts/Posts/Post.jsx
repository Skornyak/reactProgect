import React from 'react';
import style from './Post.module.css';

function Post({ message, likesCount }) {
  return (
    <div className={style.post_wrapper}>
      <div className={style.post_ava} />
      <div>{message}</div>
      <span className={style.like}>
        Like
        {likesCount}
      </span>
    </div>
  );
}
export default Post;
