import { combineReducers } from "redux";
import gigsReducer from './gigs_reducer';
import songsReducer from './songs_reducer';
import adminReducer from './admin_reducer';
import albumReducer from './admin_reducer';

const entitiesReducer = combineReducers({
    gigs: gigsReducer,
    albums: albumReducer,
    songs: songsReducer,
    admins: adminReducer
})

export default entitiesReducer;