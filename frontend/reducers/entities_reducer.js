import { combineReducers } from "redux";
import gigsReducer from './gigs_reducer';

const entitiesReducer = combineReducers({
    gigs: gigsReducer
})

export default entitiesReducer;