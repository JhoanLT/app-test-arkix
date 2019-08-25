import { SET_SESSION, REMOVE_SESSION } from '../actions/session.actions';

const defaultState = {
    data : null
};

export default (state=defaultState, action) => {
    switch(action.type){
        case SET_SESSION : return({
            ...state,
            data : action.payload,
        });
        case REMOVE_SESSION : return({
            ...state,
            data : null,
        });
        default : 
            return {...state}
    }
};