import React from 'react';
import styles from './Repo.module.css';

const Repo = (props) => {
    return (
        <div className={styles.repo}>
            <div className={styles.repo__title}>
                <a href={props.repo.html_url} rel="noreferrer" target="_blank">{props.repo.name}</a>
            </div>
            <div className={styles.repo__subtitle}>
                {props.repo.description || "NON DESCRIPTION"}
            </div>
        </div>
    )
}

export default Repo;