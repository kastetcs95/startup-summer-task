import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NotFounded from '../NotFounded/NotFounded';
import Preloader from '../Preloader/Preloader';
import {getUser, getRepos} from './../../redux/reducers/users-reducer';
import styles from './ProfileContainer.module.css';
import ProfileInfoContainer from './ProfileInfoContainer/ProfileInfoContainer';
import ReposContainer from './ReposContainer/ReposContainer';
import NotFoundImg from './../../img/not-found.svg';

const ProfileContainer = (props) => {
  
const onPageChanged = (pageNumber) => {
  props.getRepos(props.searchValue, pageNumber);
}

    useEffect(() => {
        props.getUser(props.searchValue);
    }, [props.searchValue])

    return (
        <div className={styles.container}>
          {
          props.isFetching 
            ? <div className={styles.preloader__container}>
                <Preloader/>
              </div>
            : <>
                {
                  props.isFounded && props.searchValue 
                  && <>
                        <ProfileInfoContainer/>
                        <ReposContainer onPageChanged={onPageChanged}/>
                  </>
                }
                {
                (!props.searchValue ||!props.isFounded) 
                && <NotFounded img={NotFoundImg} title="User not found"/>}
            </>
          }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      searchValue: state.user.searchValue,
      isFounded: state.user.isFounded,
      isFetching: state.user.isFetching
    }
  }

export default connect(mapStateToProps, {getUser, getRepos})(ProfileContainer);