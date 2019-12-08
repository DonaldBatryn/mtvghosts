import * as SongAPIUtil from '../utils/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

const receiveSongs = songs => ({
    type: RECEIVE_SONGS,
    songs
})

const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
})

const removeSong = id => ({
    type: REMOVE_SONG,
    songId: id
})

export const fetchSongs = () => dispatch => (
    SongAPIUtil.fetchSongs().then(songs => dispatch(receiveSongs(songs)))
)

export const fetchSong = (id) => dispatch => (
    SongAPIUtil.fetchSong(id).then(song => dispatch(receiveSong(song)))
)

export const createSong = (song) => dispatch => (
    SongAPIUtil.createSong(song).then(song => dispatch(receiveSong(song)))
)

export const updateSong = (song) => dispatch => (
    SongAPIUtil.updateSong(song).then(song => dispatch(receiveSong(song)))
)

export const deleteSong = (id) => dispatch => (
    SongAPIUtil.deleteSong(id).then(id => dispatch(removeSong(id)))
)
