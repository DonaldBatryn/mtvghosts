import React from 'react';
import NewGigForm from '../gigs/new_gig_form';

const Dashboard = () => {
    return (
        <div className="admin-dashboard-container">
            
            <NewGigForm />
            <div className="new-album-form-container">New Album form temp div</div>
            <div className="new-song-form-container">New Song form temp div</div>
            <div className="admin-item-index-container">list of gigs</div>
            <div className="admin-item-index-container">list of albums</div>
            <div className="admin-item-index-container">list of songs</div>
        </div>
    )
}

export default Dashboard;