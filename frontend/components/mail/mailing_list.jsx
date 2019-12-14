import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/user_actions';

const msp = state => ({

})

const mdp = dispatch => ({
    createUser: user => dispatch(createUser(user))
})

class MailingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            location: "",
            submitSuccess: false
            
        };
        this.handleSubscribe = this.handleSubscribe.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubscribe(e) {
        e.preventDefault();
        let newUser = {
            name: this.state.name,
            email: this.state.email,
            location: this.state.location
        }
        this.props.createUser(newUser).then((res) => {
            this.setState({ 
                submitSuccess: true,
                name: "",
                email: "",
                location: ""
            })
        })
    }

    render(){
        return (
            <div className="mailing-list-container">
                {!this.state.submitSuccess && (
                    <div className="mailing-header-txt-box">
                        <h1>:Join our mailing list:</h1>
                        <h3>:for MTVG perks:</h3>
                        <h3>:and updates:</h3>
                    </div>
                )}
                {this.state.submitSuccess && (
                    <div className="mail-success-msg">
                        <h3>You've been added to our mailing list!</h3>
                    </div>
                )}
                {!this.state.submitSuccess && (
                    <form onSubmit={this.handleSubscribe} className="mail-form">
                        <input type="text" placeholder="Name" onChange={this.update('name')} value={this.state.name} />
                        <input type="text" placeholder="Email" onChange={this.update('email')} value={this.state.email} />
                        <input type="text" placeholder="Location (optional)" onChange={this.update('location')} value={this.state.location} />
                        <input type="submit" value="Sign Up"/>
                    </form>
                )}
            </div>
        )
    }
}

export default connect(msp, mdp)(MailingList);