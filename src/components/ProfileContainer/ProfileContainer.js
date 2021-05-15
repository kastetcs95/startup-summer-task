import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import InitialPage from '../InitialPage/InitialPage';
import NotFounded from '../NotFounded/NotFounded';
import Preloader from '../Preloader/Preloader';
import {getUser} from './../../redux/reducers/users-reducer';
import styles from './ProfileContainer.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Repos from './Repos/Repos';

const ProfileContainer = (props) => {
    
    useEffect(() => {
        props.getUser(props.searchValue);
    }, [props.searchValue])
    return (
        <div className={styles.container}>
        {props.isFetching 
        ? <div className={styles.preloader__container}>
            <Preloader/>
          </div>
        : <>
            {props.isFounded && props.searchValue &&
            <>
                <ProfileInfo user={props.user}/>
                <Repos repos={props.repos}/>
            </>
            }
            {(!props.searchValue ||!props.isFounded) && <NotFounded title="User not found"/>}
        </>}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      user: state.user.user,
      repos: state.user.repos,
      searchValue: state.user.searchValue,
      isFounded: state.user.isFounded,
      isFetching: state.user.isFetching
    }
  }

export default connect(mapStateToProps, {getUser})(ProfileContainer);