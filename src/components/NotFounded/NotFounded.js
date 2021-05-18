import React from 'react';
import styles from './NotFounded.module.css';

const NotFounded = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.notFoundPage}>
                <div className={styles.notFoundPage__icon}>
                    <img src={props.img} alt="Not Found User"/>
                </div>
                <div className={styles.notFoundPage__title}>
                    {props.title}
                </div>
            </div>
        </div>
    )
}

export default NotFounded;