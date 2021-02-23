const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
    Posts: [
        { id: 1, messege: "Hi", likeCount: 0, },
        { id: 2, messege: "this is my first post", likeCount: 0, },
    ],
    newPostText: ' '
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                messege: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                Posts: [...state.Posts, newPost],
                newPostText: ""
            };



        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }



        }
        default: return state;

    }
}





export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export let updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,

    }
}


export default profileReducer;