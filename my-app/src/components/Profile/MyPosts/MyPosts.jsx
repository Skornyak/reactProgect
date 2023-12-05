import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post'
const MyPosts = (props) => {
    let postElement = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/> );

    const newPostElement =  React.createRef();
    const onAddPost = () => {
        props.addPost();
    };
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

    return(
    <div className={s.container}>
        <div className={s.content_header}>
            New posts
        </div>
        <div className={s.postWrapper}>
            <form className={s.post_form}>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}
                          className={s.textarea_post}
                          placeholder='write post...'/>
                <div className={s.btnWrapper}>
                    <button onClick={onAddPost} className={s.btn} type='button' >Add new post</button>
                    <button className={s.btn}>Remove post</button>
                </div>
            </form>
        </div>
        {postElement}
    </div>
    )
}
export  default MyPosts;