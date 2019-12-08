import * as GigAPIUtil from '../utils/gig_api_util';

export const RECEIVE_GIGS = 'RECEIVE_GIGS';
export const RECEIVE_GIG = 'RECEIVE_GIG';
export const REMOVE_GIG = 'REMOVE_GIG';

const receiveGigs = gigs => {
    // debugger
    return ({
        type: RECEIVE_GIGS,
        gigs
    })
}

const receiveGig = gig => ({
    type: RECEIVE_GIG,
    gig
})

const removeGig = id => ({
    type: REMOVE_GIG,
    gigId: id
})

export const fetchGigs = () => dispatch => (
    GigAPIUtil.fetchGigs().then(gigs => dispatch(receiveGigs(gigs)))
)

export const fetchGig = (id) => dispatch => (
    GigAPIUtil.fetchGig(id).then(gig => dispatch(receiveGig(gig)))
)

export const createGig = (gig) => dispatch => (
    GigAPIUtil.createGig(gig).then(gig => dispatch(receiveGig(gig)))
)

export const updateGig = (gig) => dispatch => (
    GigAPIUtil.updateGig(gig).then(gig => dispatch(receiveGig(gig)))
)

export const deleteGig = (id) => dispatch => (
    GigAPIUtil.deleteGig(id).then(id => dispatch(removeGig(id)))
)

