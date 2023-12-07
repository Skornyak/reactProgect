import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

function MyPosts({
  newPostText, posts, addPost, updateNewPostText,
}) {
  const postElement = posts.map(
    (p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} />,
  );

  const newPostElement = React.createRef();
  const onAddPost = () => {
    addPost();
  };
  const onPostChange = () => {
    const text = newPostElement.current.value;
    updateNewPostText(text);
  };

  return (
    <div className={s.container}>
      <div className={s.content_header}>
        New posts
      </div>
      <div className={s.postWrapper}>
        <form className={s.post_form}>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={newPostText}
            className={s.textarea_post}
            placeholder="write post..."
          />
          <div className={s.btnWrapper}>
            <button onClick={onAddPost} className={s.btn} type="button">Add new post</button>
            <button type="button" className={s.btn}>Remove post</button>
          </div>
        </form>
      </div>
      {postElement}
    </div>
  );
}
export default MyPosts;
