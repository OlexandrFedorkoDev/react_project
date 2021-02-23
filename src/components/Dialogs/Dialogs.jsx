import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messege from './Messege/Messege';
import { updateNewMessegeBodyCreator } from "../../redux/dialogs-reducer"
import { sendMessegeCreator } from "../../redux/dialogs-reducer"






const Dialogs = (props) => {

    let state = props.DialogsPage;


    let DialogsElements = state.DialogData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    let MessegesElements = state.MessegeData.map(messege => <Messege messege={messege.messege} key={messege.id} />)
    let newMessegeBody = state.newMessegeBody;


    let onSendMessegeClick = () => {
        props.sendMessege();
    }

    let onNewMessegeChange = (e) => {
        let body = e.target.value;
        props.updateNewMessegeBody(body)


    }

    return (


        <div className={s.dialogs}>
            <div className={s.dialogs_items}>

                {DialogsElements}




            </div>
            <div className={s.messeges}>
                {MessegesElements}

                <div className={s.newMesegge}>
                    <div>
                        <input
                            value={newMessegeBody}
                            onChange={onNewMessegeChange}
                            className={s.inputNewMessege}
                            placeholder="Enter your messege"
                            type="text" />
                    </div>
                    <div>
                        <button
                            onClick={onSendMessegeClick}
                            className={s.buttonNewMessege}>send</button>
                    </div>
                </div>

            </div>
        </div >


    )
}

export default Dialogs;

