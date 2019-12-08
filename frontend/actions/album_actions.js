import * as AlbumAPIUtil from '../utils/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';

const receiveAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
})

const receiveAlbum = album => ({
    type: RECEIVE_ALBUM,
    album
})

const removeAlbum = id => ({
    type: REMOVE_ALBUM,
    albumId: id
})

export const fetchAlbums = () => dispatch => (
    AlbumAPIUtil.fetchAlbums().then(albums => dispatch(receiveAlbums(albums)))
)

export const fetchAlbum = (id) => dispatch => (
    AlbumAPIUtil.fetchAlbum(id).then(album => dispatch(receiveAlbum(album)))
)

export const createAlbum = (album) => dispatch => (
    AlbumAPIUtil.createAlbum(album).then(album => dispatch(receiveAlbum(album)))
)

export const updateAlbum = (album) => dispatch => (
    AlbumAPIUtil.updateAlbum(album).then(album => dispatch(receiveAlbum(album)))
)

export const deleteAlbum = (id) => dispatch => (
    AlbumAPIUtil.deleteAlbum(id).then(id => dispatch(removeAlbum(id)))
)
