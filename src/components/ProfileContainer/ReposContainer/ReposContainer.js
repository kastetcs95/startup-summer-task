import React from 'react';
import { connect } from 'react-redux';
import Repos from './Repos/Repos';
import {getRepos} from './../../../redux/reducers/repos-reducer';

const ReposContainer = (props) => {
    return (
        <>
            {
               <Repos repos={props.repos} 
                         totalReposCount={props.totalReposCount} 
                         currentPage={props.currentPage} 
                         onPageChanged={props.onPageChanged}
                         isFetchingRepos={props.isFetchingRepos}/>
            }
       </>
    )
}

const mapStateToProps = (state) => {
    return { 
        repos: state.repos.repos,
        totalReposCount: state.repos.totalReposCount,
        currentPage: state.repos.currentPage,
        isFetchingRepos: state.repos.isFetchingRepos
    }
}

export default connect(mapStateToProps, {getRepos})(ReposContainer);