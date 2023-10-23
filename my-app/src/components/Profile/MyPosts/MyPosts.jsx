import s from './MyPosts.module.css'
import Post from './Posts/Post'
const myPosts = () => {
    return(
    <div className={s.container}>
        <div className={s.content_header}>
            New posts
        </div>
        <div className={s.new__post_wrapper}>
            <form className={s.post_form}>
                <textarea className={s.textarea_post} placeholder='write post...'></textarea>
                <div className={s.btn_wrapper}>
                    <button className={s.btn}>Add new post</button>
                    <button className={s.btn}>Remove post</button>
                </div>
            </form>
        </div>
        <Post message='Hi, how are you?' count='15'/>
        <Post message="It's my first post!"  count='25'/>
    </div>
    )
}
export  default myPosts;