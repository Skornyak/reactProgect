import {NavLink} from "react-router-dom";
import s from "./MyFriends.module.css"

const MyFriends = (props) => {
    let path = "/friends/" + props.id;
    return(
        <div className={s.wrapper}>
            <div className={s.ava}></div>
            <NavLink className={s.nameLink} to={path}>{props.name}</NavLink>
        </div>
    )
};

export default MyFriends;