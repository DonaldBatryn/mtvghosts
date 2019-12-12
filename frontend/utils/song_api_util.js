

export const fetchSongs = () => (
    $.ajax({
        method: 'GET',
        url: '/api/songs'
    })
)

export const fetchSong = id => (
    $.ajax({
        method: 'GET',
        url: `/api/songs/${id}`
    })
)

export const createSong = song => (
    $.ajax({
        method: 'POST',
        url: '/api/songs',
        data: { song }
    })
)

export const updateSong = (song, songId) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/songs/${songId}`,
        data: { song }
    })
)

export const deleteSong = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/songs/${id}`
    })
)