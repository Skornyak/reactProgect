import React from 'react';
import style from './MyPosts.module.css';
import Post from './Posts/Post';

function MyPosts({
  newPostText,
  posts,
  addPost,
  updateNewPostText,
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
    <div className={style.container}>
      <div className={style.content_header}>
        New posts
      </div>
      <div className={style.postWrapper}>
        <form className={style.post_form}>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={newPostText}
            className={style.textarea_post}
            placeholder="write post..."
          />
          <div className={style.btnWrapper}>
            <button onClick={onAddPost} className={style.btn} type="button">Add new post</button>
            <button type="button" className={style.btn}>Remove post</button>
          </div>
        </form>
      </div>
      {postElement}
    </div>
  );
}
export default MyPosts;
