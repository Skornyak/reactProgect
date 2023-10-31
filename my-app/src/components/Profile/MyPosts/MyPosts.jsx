import s from './MyPosts.module.css'
import Post from './Posts/Post'
const myPosts = (props) => {

    let postElement = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/> )

    return(
    <div className={s.container}>
        <div className={s.content_header}>
            New posts
        </div>
        <div className={s.postWrapper}>
            <form className={s.post_form}>
                <textarea className={s.textarea_post} placeholder='write post...'></textarea>
                <div className={s.btnWrapper}>
                    <button className={s.btn}>Add new post</button>
                    <button className={s.btn}>Remove post</button>
                </div>
            </form>
        </div>
        {postElement}
    </div>
    )
}
export  default myPosts;