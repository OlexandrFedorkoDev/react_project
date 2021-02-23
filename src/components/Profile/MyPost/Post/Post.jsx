import React from 'react';
import s from '../MyPosts.module.css';


const Post = (props) => {






    return (



        <div className={s.postBox}>
            <div className={s.post}>
                <img className={s.postImg} src="/img/cat-ava.jpg" alt="" />

                <span className={s.txtPost}>{props.messege}</span>



            </div>
            <div className={s.like}><span>Like</span> <span>{props.likeCount}</span></div>
        </div>
    )

}

export default Post;

