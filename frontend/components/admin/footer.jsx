import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="outer-footer-container">
            <div className="footer-container">
                <div className="footer-content">
                    <h5>MTVG 2020</h5>
                    <h5>site by Donnie Love</h5>
                    <Link to="/admin">Admin</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;