import React from 'react';
import preloader from './../../img/preloader.gif';
import styles from './Preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={styles.preloader}>
            <img src={preloader} alt="Preloader"/>
        </div>
    )
}

export default Preloader;