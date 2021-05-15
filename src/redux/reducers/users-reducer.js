import {userAPI} from './../../api/api';

const SET_USER = "SET_USER";
const SET_REPOS = "SET_REPOS";
const SET_SEARCH_USER = "SET_SEARCH_USER";
const IS_FOUNDED = "IS_FOUNDED";
const IS_REPO = "IS_REPO";
const IS_FETCHING = "IS_FETCHING";

const initialState = {
    user : {},
    repos: [],
    searchValue: null,
    isFounded: true,
    isRepo: true,
    isFetching: false,
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_REPOS: 
            return {
                ...state,
                repos: [...action.repos]
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
        case IS_REPO:
            return {
                ...state,
                isRepo: action.value
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
export const setIsRepo = (value) => ({type: IS_REPO, value})
export const setRepos = (repos) => ({type: SET_REPOS, repos})
export const setIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching});


export const getUser = (username) => {
    return (dispatch) => {
        userAPI.getUser(username)
        .then(response => {
            if (response.data?.message === 'Not Found') {
                dispatch(setIsFounded(false))
                dispatch(setIsFetching(false))
            } else {
                dispatch(setSearchUser(username))
                dispatch(setUser(response))
                dispatch(setIsFounded(true))
                dispatch(getRepos(username))
            }
        })
    }
}

export const getRepos = (username) => {
    return (dispatch) => {
        userAPI.getRepos(username)
        .then(response => {
            dispatch(setIsFetching(false));
            if (response.length === 0) {
                dispatch(setIsRepo(false))
            } else {
                dispatch(setRepos(response))
            }
        })
    }
}

export default usersReducer;