import React from 'react';
import { connect } from 'react-redux';
import Repos from './Repos/Repos';
import {getRepos} from './../../../redux/reducers/users-reducer';
import Preloader from './../../Preloader/Preloader';

const ReposContainer = (props) => {
    

    return (
        <>
        {props.isFetchingRepos 
        ? <Preloader />
    :        <Repos repos={props.repos} 
               totalReposCount={props.totalReposCount} 
               currentPage={props.currentPage} 
               onPageChanged={props.onPageChanged}
               />
        }
       </>
    )
}

const mapStateToProps = (state) => {
    return { 
        repos: state.user.repos,
        totalReposCount: state.user.totalReposCount,
        currentPage: state.user.currentPage,
        isFetchingRepos: state.user.isFetchingRepos
    }
}

export default connect(mapStateToProps, {getRepos})(ReposContainer);