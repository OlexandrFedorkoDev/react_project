import React from 'react';
import MyPostsContainer from './MyPost/MyPostsContainer';
import './Profile.css';
import UserInfo from './UserInfo/UserInfo';





const Content = (props) => {






    return (
        <div className="content">


            <UserInfo />
            <MyPostsContainer
            // store={props.store}

            />

        </div >)
}

export default Content;