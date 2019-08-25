import {combineReducers} from 'redux';
import session from './session.reducer';

const createReducer = (asyncReducers) =>
    combineReducers({
        session,
    });

export default createReducer;
