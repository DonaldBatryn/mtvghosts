import React from 'react';
import { Link, withRouter } from 'react-router-dom'


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }


    logoutUser(e) {
        e.preventDefault();
        this.props.logout().then(() => {
            this.props.history.push('/')
        })
       
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="navbar-main-loggedIn">
                    <div className="navbar-left">
                       <h1>MTVG</h1>
                    </div>
                    {/* <div className="navbar-center">
                        
                    </div> */}
                    <div className="navbar-right">
                        <button className="logout-button" onClick={this.logoutUser}>Logout</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="navbar-main">
                    <div className="navbar-left">
                        {/* <h1>mtvghosts</h1> */}
                    </div>
                    <div className="navbar-right">
                        <a className="nav-links active" href="#music">Music</a>
                        <a className="nav-links" href="#shows">Shows</a>
                        <a className="nav-links" href="#merch">Merch</a>
                        <a className="nav-links" href="#mailing-list">Mail</a>
                    </div>
                </div>
            );
        }
    }

    render() {
        document.addEventListener("scroll", () => {
            let nav = document.getElementsByClassName("navbar-container")[0]
            if (window.scrollY !== 0 && !nav.classList.contains("scolled")){
                nav.classList.add("scrolled")
            } else if (window.scrollY === 0){
                nav.classList.remove("scrolled")
            }
        })
        document.addEventListener("click", (e) => {
            let link1 = document.getElementsByClassName("nav-links")[0]
            let link2 = document.getElementsByClassName("nav-links")[1]
            let link3 = document.getElementsByClassName("nav-links")[2]
            let link4 = document.getElementsByClassName("nav-links")[3]
            
            if (e.target === link1){
                e.preventDefault()
                link1.classList.add("active")
                link2.classList.remove("active")
                link3.classList.remove("active")
                link4.classList.remove("active")
            } else if (e.target === link2) {
                e.preventDefault()
                link2.classList.add("active")
                link1.classList.remove("active")
                link3.classList.remove("active")
                link4.classList.remove("active")
            } else if (e.target === link3) {
                e.preventDefault()
                link3.classList.add("active")
                link2.classList.remove("active")
                link1.classList.remove("active")
                link4.classList.remove("active")
            } else if (e.target === link4) {
                e.preventDefault()
                link4.classList.add("active")
                link2.classList.remove("active")
                link3.classList.remove("active")
                link1.classList.remove("active")
            }    
        })
        
       
        return (
            <div className="navbar-container">
                {this.getLinks()}
            </div>
        );
    }
}

export default withRouter(NavBar);