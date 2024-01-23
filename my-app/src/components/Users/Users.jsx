import React from 'react';
import style from './Users.module.css';

function Users(props) {
  return (
    props.users.map((u) => (
      <div className={style.content_wrapper} key={u.id}>
        <div className={style.wrapper_ava}>
          <div>
            <img className={style.user_img} alt="" src={u.userPhotoURL} />
          </div>
          <div>
            {u.followed
              ? <button className={style.btn} type="button" onClick={() => props.unfollow(u.id)}> unfollow</button>
              : <button className={style.btn} type="button" onClick={() => props.follow(u.id)}>follow</button>}
          </div>
        </div>
        <div className={style.info_wrapper}>
          <div className={style.name}>{u.fullName}</div>
          <div>{u.status}</div>
          <div>{u.location.city}</div>
          <div>{u.location.country}</div>
        </div>
      </div>
    )));
}

export default Users;
