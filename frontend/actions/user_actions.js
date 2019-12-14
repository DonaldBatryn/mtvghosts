import * as UserAPIUtil from '../utils/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
// export const REMOVE_USER = 'REMOVE_USER';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})



export const createUser = user => dispatch => (
    UserAPIUtil.createUser(user).then(user => dispatch(receiveUser(user)))
)

// export const deleteUser = id => dispatch => (
//     UserAPIUtil.deleteUser(id).then(user => dispatch(removeUser(user)))
// )