import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div className={s.dialog}>
            <div className={s.wrapper}>
                <div className={s.ava}></div>
                <NavLink className={s.dialogLink} to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}


export default DialogItem;