import React, { useState } from 'react';
import styles from './Header.module.css';
import Icon from './../../img/icon.svg';
import { connect } from 'react-redux';
import {setSearchUser, setIsFetching} from './../../redux/reducers/users-reducer';
import { withRouter } from 'react-router';

const Header = (props) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleEnter = (e) => {
        if (e.code === 'Enter') {
            props.setSearchUser(value);
            props.setIsFetching(true);
            props.history.push(`/users`);
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        setValue("");
        props.history.push(`/`);
    }

    return (
        <div className={styles.header}>
            <div className={styles.header__icon}>
                <a href="/" onClick={handleClick}>
                    <img src={Icon} alt="Icon"/>
                </a>
            </div>
            <div className={styles.header__input}>
                <input type="text"
                       placeholder="Enter GitHub username" 
                       value={value} 
                       onChange={handleChange} 
                       onKeyDown={handleEnter}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchValue: state.user.searchValue
    }
}

export default withRouter(connect(mapStateToProps, {setSearchUser, setIsFetching})(Header));