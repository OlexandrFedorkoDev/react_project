import React from 'react';
import { updateNewMessegeBodyCreator } from "../../redux/dialogs-reducer"
import { sendMessegeCreator } from "../../redux/dialogs-reducer"
import Dialogs from './Dialogs';

import { connect } from 'react-redux';

// const DialogsContainer = (props) => {

//     return (
//         <storeContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().DialogsPage;
//                     let onSendMessegeClick = () => {
//                         store.dispatch(sendMessegeCreator());
//                     }
//                     let onNewMessegeChange = (body) => {

//                         store.dispatch(updateNewMessegeBodyCreator(body));
//                     }
//                     return <Dialogs
//                         updateNewMessegeBody={onNewMessegeChange}
//                         sendMessege={onSendMessegeClick}
//                         DialogsPage={state} />
//                 }
//             }</storeContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessege: () => {
            dispatch(sendMessegeCreator());
        },
        updateNewMessegeBody: (body) => {
            dispatch(updateNewMessegeBodyCreator(body));

        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);









export default DialogsContainer;

