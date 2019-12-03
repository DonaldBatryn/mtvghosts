import { connect } from 'react-redux';
import { createAdmin } from '../../actions/session_actions';
import RegisterForm from './register_form';

const msp = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session
    };
};

const mdp = (dispatch) => {
    return {
        createAdmin: user => dispatch(createAdmin(user))
    }
}

export default connect(msp, mdp)(RegisterForm);