import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchGigs } from '../../actions/gig_actions';
import { fetchAlbums } from '../../actions/album_actions';

const msp = state => {

    return ({
        gigs: Object.keys(state.entities.gigs).map(id => state.entities.gigs[id]),
        albums: Object.keys(state.entities.albums).map(id => state.entities.albums[id])
        
    })
}

const mdp = dispatch => {
    return ({
        fetchGigs: () => dispatch(fetchGigs()),
        fetchAlbums: () => dispatch(fetchAlbums())
    })
}

export default connect(msp, mdp)(Dashboard);