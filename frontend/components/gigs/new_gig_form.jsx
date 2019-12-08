import React from 'react';
import { connect } from 'react-redux';
import { createGig, updateGig, deleteGig, fetchGigs } from '../../actions/gig_actions';

const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({
        createGig: gig => dispatch(createGig(gig))
    })
}

class NewGigForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            when: "",
            venue: "",
            city_state: "",
            price: "",
            details: "",
            ages: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div className="new-gig-form-container">
                <h3>Add New Gig</h3>
                <form className="new-gig-form">
                   
                    <input type="text" value={this.state.when} placeholder="When" onChange={this.update('when')}/>
                    <input type="text" value={this.state.venue} placeholder="Venue" onChange={this.update('venue')}/>
                    <input type="text" value={this.state.city_state} placeholder="City/State" onChange={this.update('city_state')}/>
                
                    <input type="text" value={this.state.price} placeholder="Price" onChange={this.update('price')}/>
                    <input type="text" value={this.state.ages} placeholder="Ages" onChange={this.update('ages')}/>
                    <textarea type="text" value={this.state.details} placeholder="Details" onChange={this.update('details')}/>
                    
                </form>
            </div>
        )
    }
}

export default connect(msp, mdp)(NewGigForm);