import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer-container">
            <Link to="/admin">Admin</Link>
        </div>
    )
}

export default Footer;