import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({posts}) => {

    let text = React.createRef();

    const addPost = (e) => {
        e.preventDefault();
        console.log(text.current.value);

    }

    return (
        <div className={classes.posts}>
            <form onSubmit={addPost}>
                <textarea ref={text}></textarea><br/>
                <button>Add post</button>
            </form>
            <hr/>
            {posts.map(post=> <Post post={post} key={post.id} />)}    
        </div>
    )
}

export default MyPosts