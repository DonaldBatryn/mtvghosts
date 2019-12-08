import { RECEIVE_GIGS, RECEIVE_GIG, REMOVE_GIG } from "../actions/gig_actions";


const gigsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_GIGS:
            return action.gigs;
        case RECEIVE_GIG:
            return Object.assign({}, state, { [action.gig.id]: action.gig });
        case REMOVE_GIG:
            let newState = Object.assign({}, state);
            delete newState[action.gigId];
            return newState;
        default:
            return state;
    }
}

export default gigsReducer;