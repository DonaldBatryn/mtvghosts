
export const fetchGigs = () => (
    $.ajax({
        method: 'GET',
        url: '/api/gigs'
    })
)

export const fetchGig = id => (
    $.ajax({
        method: 'GET',
        url: `/api/gigs/${id}`
    })
)

export const createGig = gig => (
    $.ajax({
        method: 'POST',
        url: '/api/gigs',
        data: { gig }
    })
)

export const updateGig = gig => (
    $.ajax({
        method: 'PATCH',
        url: `/api/gigs/${gig.id}`,
        data: { gig }
    })
)

export const deleteGig = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/gigs/${id}`
    })
)