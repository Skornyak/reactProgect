import React from 'react';
import style from './Users.module.css';

function Users(props) {
  return (
    props.users.map((u) => (
      <div key={u.id}>
        <span>
          <div>
            <img className={style.user_img} alt="" src={u.userPhotoURL} />
          </div>
          <div>
            {u.followed
              ? <button type="button" onClick={() => props.unfollow(u.id)}> unfollow</button>
              : <button type="button" onClick={() => props.follow(u.id)}>follow</button>}
          </div>
        </span>
        <span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </span>

      </div>
    )));
}

export default Users;
