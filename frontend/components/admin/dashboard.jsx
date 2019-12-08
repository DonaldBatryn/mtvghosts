import React from 'react';
import NewGigForm from '../gigs/new_gig_form';
import NewAlbumForm from '../albums/new_album_form';


class Dashboard extends React.Component {

    componentDidMount() {
        this.props.fetchGigs();
    }
    render() {
        if (!this.props.gigs) return <div className="admin-dashboard-container">Loading</div>
      
        let gigList = this.props.gigs.map(gig => <div key={gig.id}>{gig.venue}</div>)
        return (
            <div className="admin-dashboard-container">
                
                <NewGigForm />
                <NewAlbumForm />
                <div className="new-song-form-container">New Song form temp div</div>
                <div className="admin-item-index-container">
                    {gigList}
                </div>
                <div className="admin-item-index-container">list of albums</div>
                <div className="admin-item-index-container">list of songs</div>
            </div>
        )
    }
}

export default Dashboard;