import React from 'react';
import { connect } from 'react-redux';
import Repos from './Repos/Repos';

const ReposContainer = (props) => {
    return (
        <Repos repos={props.repos} 
               totalReposCount={props.totalReposCount} 
               currentPage={props.currentPage} 
               onPageChanged={props.onPageChanged}/>
    )
}

const mapStateToProps = (state) => {
    return { 
        repos: state.user.repos,
        totalReposCount: state.user.totalReposCount,
        currentPage: state.user.currentPage
    }
}

export default connect(mapStateToProps, {})(ReposContainer);