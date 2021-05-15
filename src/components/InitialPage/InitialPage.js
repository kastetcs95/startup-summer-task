import React from 'react';
import styles from './InitialPage.module.css';
import Search from './../../img/search.svg';

const InitialPage = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.initialPage}>
                <div className={styles.initialPage__icon}>
                    <img src={Search} alt="Initial Page"/>
                </div>
                <div className={styles.initialPage__title}>
                    Start with searching a GitHub user
                </div>
            </div>
        </div>
    )
}

export default InitialPage;