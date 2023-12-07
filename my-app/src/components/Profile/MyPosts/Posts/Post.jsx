import React from 'react';
import s from './Post.module.css';

function Post({ message, likesCount }) {
  return (
    <div className={s.post_wrapper}>
      <div className={s.post_ava} />
      <div>{message}</div>
      <span className={s.like}>
        Like
        {likesCount}
      </span>
    </div>
  );
}
export default Post;
