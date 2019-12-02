import * as SessionAPIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_ADMIN = 'RECEIVE_CURRENT_ADMIN';
export const LOGOUT_CURRENT_ADMIN = 'LOGOUT_CURRENT_ADMIN';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentAdmin = admin => ({
    type: RECEIVE_CURRENT_ADMIN,
    admin
})

export const logoutCurrentAdmin = () => ({
    type: LOGOUT_CURRENT_ADMIN

})

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const login = (admin) => (dispatch) => {
    return SessionAPIUtil.login(admin).then(admin => dispatch(receiveCurrentAdmin(admin)), err => dispatch(receiveErrors(err.responseJSON)))
}

export const createAdmin = admin => dispatch => (
    SessionAPIUtil.registerAdmin(admin).then(admin => dispatch(receiveAdmin(admin)), err => dispatch(receiveErrors(err.responseJSON)))
)

export const logout = () => (dispatch) => {
    return SessionAPIUtil.logout().then(() => dispatch(logoutCurrentAdmin()))
}