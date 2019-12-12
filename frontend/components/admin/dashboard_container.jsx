import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchGigs, deleteGig, updateGig } from '../../actions/gig_actions';
import { fetchAlbums, deleteAlbum, updateAlbum } from '../../actions/album_actions';
import { fetchSongs, deleteSong, updateSong } from '../../actions/song_actions';

const msp = state => {

    return ({
        gigs: Object.keys(state.entities.gigs).map(id => state.entities.gigs[id]),
        albums: Object.keys(state.entities.albums).map(id => state.entities.albums[id]),
        songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id])
    })
}

const mdp = dispatch => {
    return ({
        fetchGigs: () => dispatch(fetchGigs()),
        deleteGig: id => dispatch(deleteGig(id)),
        updateGig: (gig, gigId) => dispatch(updateGig(gig, gigId)),
        fetchAlbums: () => dispatch(fetchAlbums()),
        deleteAlbum: id => dispatch(deleteAlbum(id)),
        updateAlbum: (album, albumId) => dispatch(updateAlbum(album, albumId)),
        fetchSongs: () => dispatch(fetchSongs()),
        deleteSong: id => dispatch(deleteSong(id)),
        updateSong: (song, songId) => dispatch(updateSong(song, songId)),

    })
}

export default connect(msp, mdp)(Dashboard);