import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";





let store = {
    // _state: {


    //     ProfilePage: {
    //         Posts: [
    //             { id: 1, messege: "Hi", likeCount: 0, },
    //             { id: 2, messege: "this is my first post", likeCount: 0, },

    //         ],
    //         newPostText: ''



    //     },

    //     DialogsPage: {

    //         DialogData: [
    //             { id: 1, name: 'Bars' },
    //             { id: 2, name: 'Murka' },
    //             { id: 3, name: 'Lil' },
    //         ],

    //         MessegeData: [
    //             { id: 1, messege: 'Hello' },
    //             { id: 2, messege: 'Where is my toy' },
    //             { id: 3, messege: 'Gum' },
    //         ],

    //         newMessegeBody: ''
    //     }






    // },
    _callSubscriber() {
        console.log('dsfdsd')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {



        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);
        this._callSubscriber(this._state);



    }

}












export default store;
