import React from 'react';
import Repo from './Repo/Repo';
import styles from './Repos.module.css';
import EmptyRepos from './../../../../img/empty-repos.svg';
import Paginator from './../../../Paginator/Paginator';

const Repos = (props) => {

    

    return (
        <div className={styles.errorContainer}>
            {props.repos.length === 0  
            ? <div className={styles.repos__empty}>
                <div className={styles.repos__img}>
                    <img src={EmptyRepos} alt="Empty repos"/>
                </div>
                <div className={styles.repos__errorTitle}>
                    Repository list is empty
                </div>
            </div>
            : <div className={styles.container}>
                <div className={styles.repos__title}>
                    Repositories ({props.totalReposCount})
                </div>
                <div className={styles.repos}>
                    {props.repos.map(repo => <Repo key={repo.id} repo={repo}/>)}
                </div>
                <Paginator totalItemsCount={props.totalReposCount} 
                           pageSize={4} 
                           currentPage={props.currentPage}
                           onPageChanged={props.onPageChanged}
                           portionSize={3}/>
            </div>}
            
        </div>
    )
}

export default Repos;