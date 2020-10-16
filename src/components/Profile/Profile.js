import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = ({posts}) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts posts={posts.posts}/>
        </div>
    )
}
export default Profile