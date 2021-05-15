import React from 'react';
import styles from './withMainPage.module.css';

const withMainPage = (WrappedComponent) => {
    return () => {
        return (
            <div className={styles.withMainPage}>
                <WrappedComponent/>
            </div>
        )
    }
}

export default withMainPage;