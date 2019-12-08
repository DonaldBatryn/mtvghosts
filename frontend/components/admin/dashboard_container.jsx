import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchGigs } from '../../actions/gig_actions';

const msp = state => {

    return ({
        gigs: Object.keys(state.entities.gigs).map(id => state.entities.gigs[id])
    })
}

const mdp = dispatch => {
    return ({
        fetchGigs: () => dispatch(fetchGigs())
    })
}

export default connect(msp, mdp)(Dashboard);