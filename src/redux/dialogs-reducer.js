const UPDATE_NEW_MESSEGE_BODY = "UPDATE-NEW-MESSEGE-BODY";
const SEND_MESSEGE = "SEND-MESSEGE";

let initialState = {
    DialogData: [
        { id: 1, name: 'Bars' },
        { id: 2, name: 'Murka' },
        { id: 3, name: 'Lil' },
    ],

    MessegeData: [
        { id: 1, messege: 'Hello' },
        { id: 2, messege: 'Where is my toy' },
        { id: 3, messege: 'Gum' },
    ],

    newMessegeBody: ''
};

const dialogsReducer = (state = initialState, action) => {


    let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_MESSEGE_BODY:
            stateCopy = {
                ...state,
                newMessegeBody: action.body
            };
            return stateCopy;
        case SEND_MESSEGE:
            let body = state.newMessegeBody;
            stateCopy = {
                ...state,
                newMessegeBody: "",
                MessegeData: [...state.MessegeData, { id: 4, messege: body }]
            }
            return stateCopy;
        default:
            return state;
    }
}
export let sendMessegeCreator = () => {
    return {
        type: SEND_MESSEGE
    }
};
export let updateNewMessegeBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSEGE_BODY,
        body: body,

    }
}

export default dialogsReducer;