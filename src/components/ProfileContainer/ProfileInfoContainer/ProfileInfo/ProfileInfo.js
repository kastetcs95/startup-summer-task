import React from 'react';
import styles from './ProfileInfo.module.css';
import Followers from './../../../../img/followers.svg';
import Following from './../../../../img/following.svg';

const ProfileInfo = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.info__avatar}>
                <img src={props.user.avatar_url} alt="Avatar"/>
            </div>
            <div className={styles.info__name}>
                {props.user.name || "Name not set"}
            </div>
            <div className={styles.info__login}>
                <a href={props.user.html_url} rel="noreferrer" target="_blank">{props.user.login}</a>
            </div>
            <div className={styles.info__follows}>
                <div className={styles.info__followers}>
                    <div>
                        <img src={Followers} alt="Followers"/>
                    </div>  
                    <span>{props.user.followers} followers</span>
                </div>
                <div className={styles.info__following}>
                    <div>
                        <img src={Following} alt="Following"/>
                    </div> 
                    <span>{props.user.following} following</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;