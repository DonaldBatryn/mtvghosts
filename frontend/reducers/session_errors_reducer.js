import { RECEIVE_CURRENT_ADMIN, RECEIVE_SESSION_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const noErrors = []

const sessionErrorsReducer = (state = noErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_ADMIN:
            return noErrors;
        case CLEAR_ERRORS:
            return noErrors;
        default:
            return state;
    }
};

export default sessionErrorsReducer;