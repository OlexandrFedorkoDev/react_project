import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
    let postElement = props.Posts.map(p => <Post messege={p.messege} likeCount={p.likeCount} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.MyPosts}>
            <div className={s.inputPost}>
                <input
                    onChange={onPostChange}
                    value={props.newPostText}
                    className={s.input}
                    placeholder='add post'
                    ref={newPostElement}
                />
                <button
                    className={s.btn_addPost}
                    onClick={onAddPost}>add</button>
            </div>
            { postElement}
        </div >
    )
}
export default MyPosts;