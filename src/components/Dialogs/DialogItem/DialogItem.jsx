import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.css';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <div className={s.messegeName}><NavLink className={s.dialog_name} to={path}><span >{props.name}</span></NavLink></div>
        </div >
    )
}







export default DialogItem;

