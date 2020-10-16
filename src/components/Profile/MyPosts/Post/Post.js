import React from 'react';
import classes from './Post.module.css';

const Post = ({post}) => {

    return (
        <div className={classes.post}>
            {post.text} Likes: {post.likeCounts}
        </div>
    )
}

export default Post