import {githubAPI} from './../../api/api';
import {setIsFetching} from './users-reducer';

const SET_REPOS = "SET_REPOS";
const IS_REPO = "IS_REPO";
const IS_FETCHING_R = "IS_FETCHING_R";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_REPOS_COUNT = "SET_TOTAL_REPOS_COUNT";

const initialState = {
    repos: [],
    isRepo: true,
    isFetchingRepos: false,
    totalReposCount: 0,
    currentPage: 1
};

const reposReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_REPOS: 
            return {
                ...state,
                repos: [...action.repos]
            }
        case IS_REPO:
            return {
                ...state,
                isRepo: action.value
            }
        case IS_FETCHING_R:
        return {
            ...state,
            isFetchingRepos: action.isFetchingRepos
        }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_REPOS_COUNT:
            return {
                ...state,
                totalReposCount: action.totalReposCount
            }
        default:
            return state;
    }
}

export const setIsRepo = (value) => ({type: IS_REPO, value})
export const setRepos = (repos) => ({type: SET_REPOS, repos})
export const setIsFetchingRepos = (isFetchingRepos) => ({type: IS_FETCHING_R, isFetchingRepos});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalReposCount = (totalReposCount) => ({type: SET_TOTAL_REPOS_COUNT, totalReposCount});


export const getRepos = (username, currentPage = 1) => {
    return (dispatch) => {
        dispatch(setIsFetchingRepos(true))
        githubAPI.getRepos(username, currentPage)
        .then(response => {
            if (response.length === 0) {
                dispatch(setIsRepo(false))
                dispatch(setIsFetching(false));
            } else {
                dispatch(setCurrentPage(currentPage))
                dispatch(setRepos(response))
                dispatch(setIsFetching(false));
                dispatch(setIsFetchingRepos(false))
            }
        })
    }
}

export default reposReducer;