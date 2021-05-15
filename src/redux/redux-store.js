import { combineReducers, createStore , applyMiddleware} from "redux";
import usersReducer from './reducers/users-reducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    user : usersReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;