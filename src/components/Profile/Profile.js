import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {

    return (
        <div className={classes.Profile}>
            <MyPosts />
        </div>
    )
}

export default Profile