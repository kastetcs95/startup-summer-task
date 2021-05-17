import {githubAPI} from './../../api/api';
import {setTotalReposCount, getRepos} from './repos-reducer';

const SET_USER = "SET_USER";
const SET_SEARCH_USER = "SET_SEARCH_USER";
const IS_FOUNDED = "IS_FOUNDED";
const IS_FETCHING = "IS_FETCHING";


const initialState = {
    user : {},
    searchValue: null,
    isFounded: true,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_SEARCH_USER:
            return {
                ...state,
                searchValue: action.value
            }
        case IS_FOUNDED:
            return {
                ...state,
                isFounded: action.value
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setUser = (user) => ({type: SET_USER, user})
export const setSearchUser = (value) => ({type: SET_SEARCH_USER, value})
export const setIsFounded = (value) => ({type: IS_FOUNDED, value})
export const setIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching});

export const getUser = (username) => {
    return (dispatch) => {
        githubAPI.getUser(username)
        .then(response => {
            if (response.data?.message === 'Not Found') {
                dispatch(setIsFounded(false))
                dispatch(setIsFetching(false))
            } else {
                dispatch(setTotalReposCount(response.public_repos))
                dispatch(setSearchUser(username))
                dispatch(setUser(response))
                dispatch(setIsFounded(true))
                dispatch(getRepos(username))
            }
        })
    }
}

export default usersReducer;