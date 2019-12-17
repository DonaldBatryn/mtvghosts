import React from 'react';
import MailerSection from '../mail/mailing_list';
import UpcomingGigs from '../gigs/upcoming';

const Home = ({ props }) => {

    return (
        <div className="main-home-container">
            <h1>mtvghosts</h1>
            <UpcomingGigs />
            <MailerSection />
        </div>
    )
}

export default Home;