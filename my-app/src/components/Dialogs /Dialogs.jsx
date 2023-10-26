import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.messages}</div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs} >
           <div className={s.dialogsItems}>
               <DialogItem name="Mary" id="1"/>
               <DialogItem name="Dmitriy" id="2"/>
               <DialogItem name="Alex" id="3"/>
           </div>
            <div className={s.messages}>
                <Message messages="Hi"/>
                <Message messages="How are you?"/>
                <Message messages="Thanks, a u?"/>
            </div>
        </div>
    )
}

export default Dialogs;