import React from 'react';
import { Link } from 'react-router-dom'





class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comingSoonisVisible: false
        }
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
        // this.handleMsg = this.handleMsg.bind(this);
    }

    // handleMsg(){
    //     let comingSoon = document.getElementsByClassName('coming-soon-msg')[0]
    //     let styles = window.getComputedStyle(comingSoon);
    //     if (styles.display === 'none') comingSoon.style.display = 'flex';
    //     this.setState({ comingSoonisVisible: true })
    //     setTimeout(() => {
    //         this.setState({ comingSoonisVisible: false })
    //         comingSoon.style.display = 'none';
    //     }, 2200)
    // }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="navbar-main-loggedIn">
                    <div className="navbar-left">
                       <h1>MTVG</h1>
                    </div>
                    <div className="navbar-center">
                        
                    </div>
                    <div className="navbar-right">
                        <button className="logout-button" onClick={this.logoutUser}>Logout</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="navbar-main">
                    <div className="navbar-left">
                        <h1>MTVG</h1>
                    </div>
                    <div className="navbar-right">
                        <Link className="nav-login-button" to={'/login'}>Log in</Link>
                        <Link className="nav-signup-button" to={'/register'}>Sign up</Link>
                    </div>
                </div>
            );
        }
    }

    render() {
        
        return (
            <div className="navbar-container">
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;