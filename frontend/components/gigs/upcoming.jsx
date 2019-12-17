import React from 'react';
import { connect } from 'react-redux';
import { fetchGigs } from '../../actions/gig_actions';

const msp = state => ({
    gigs: Object.keys(state.entities.gigs).map(id => state.entities.gigs[id])
})

const mdp = dispatch => ({
    fetchGigs: () => dispatch(fetchGigs())
})

class UpcomingGigs extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchGigs();
    }

    render() {
        if (!this.props.gigs) return <div className="upcoming-container">Loading</div>;

        let allGigs = this.props.gigs.map(gig => {
            return (
                <div key={gig.id} className="gig-item">
                    <div className="gig-info">
                        <div className="gig-left">
                            <h4>{gig.venue}</h4>
                            <h4>{gig.when}</h4>
                        </div>
                        <div className="gig-right">
                            <h4>{gig.price}</h4>
                            <h4>{gig.ages}</h4>
                            <button onClick={() => {
                                let detailsDD = document.getElementById(`gig-${gig.id}-details`);
                                detailsDD.classList.toggle('hidden');
                            }}>(more)</button>
                        </div>
                    </div>
                    <div id={`gig-${gig.id}-details`} className="details-dropdown hidden">
                        {gig.details}
                    </div>
                </div>
            )
        })

        return (
            <div className="upcoming-container">
                <h2 className="upcoming-header">Coming soon to...</h2>
                {allGigs}
            </div>
        )
    }
}

export default connect(msp, mdp)(UpcomingGigs);