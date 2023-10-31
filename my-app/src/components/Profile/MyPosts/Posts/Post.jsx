import s from './Post.module.css'
 const Post = (props) => {

    return (
           <div className={s.post_wrapper}>
               <div className={s.post_ava}></div>
               <div>{props.message}</div>
               <span className={s.like}>Like {props.likesCount}</span>
           </div>
    )
}
 export default Post;