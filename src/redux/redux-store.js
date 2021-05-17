import { combineReducers, createStore , applyMiddleware} from "redux";
import usersReducer from './reducers/users-reducer';
import thunkMiddleware from 'redux-thunk';
import reposReducer from "./reducers/repos-reducer";

const reducers = combineReducers({
    user : usersReducer,
    repos: reposReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;