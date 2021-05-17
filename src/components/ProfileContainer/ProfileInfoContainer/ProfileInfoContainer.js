import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ProfileInfoContainer = (props) => {
    return (
        <ProfileInfo user={props.user}/>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}

export default connect(mapStateToProps, {})(ProfileInfoContainer);