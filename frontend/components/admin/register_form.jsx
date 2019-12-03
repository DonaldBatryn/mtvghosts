import React from 'react';
import { withRouter } from 'react-router-dom';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            errors: this.props.errors
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let admin = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        this.props.createAdmin(admin).then(() => {
            this.props.history.push("/admin/home")
        })
    }

    render() {
        return (
            <div className="register-form-container">
                <h2>Create an admin</h2> 
                {/* ^^^^^ \/\/\/\/\/\/ Move this into the admin protected components */}
                <form className="register-form" onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.update('name')} value={this.state.name} placeholder="Name"/>
                    <input type="text" onChange={this.update('email')} value={this.state.email} placeholder="Email"/>
                    <input type="password" onChange={this.update('password')} value={this.state.password} placeholder="Set password"/>
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default withRouter(RegisterForm);