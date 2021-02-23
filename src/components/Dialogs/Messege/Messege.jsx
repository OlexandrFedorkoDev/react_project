import React from 'react';

import s from '../Dialogs.module.css';


// const DialogItem = (props) => {
//     let path = "/dialogs/" + props.id;

//     return (
//         <div className={s.dialog}>
//             <NavLink className={s.dialog_name} to={path}><span >{props.name}</span></NavLink>
//         </div >
//     )
// }


const Messege = (props) => {
    return (
        <div className={s.oneMessege}><div className={s.messege}>{props.messege}</div></div>
    )
}




export default Messege;

