import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
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
            password: this.state.password
        }
        this.props.login(admin).then(() => {
            this.props.history.push("/admin/home")
        })
    }

    render() {
        return (
            <div className="login-form-container">
                <h2>Sign in with Admin credentials</h2>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.update('name')} value={this.state.name} placeholder="Name"/>
                    <input type="password" onChange={this.update('password')} value={this.state.password} placeholder="Password"/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginForm);