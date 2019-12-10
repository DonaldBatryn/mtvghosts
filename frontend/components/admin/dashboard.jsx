import React from 'react';
import NewGigForm from '../gigs/new_gig_form';
import NewAlbumForm from '../albums/new_album_form';
import NewSongForm from '../songs/new_song_form';

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.fetchGigs();
        this.props.fetchAlbums();
        this.props.fetchSongs();
    }
    render() {
        if (!this.props.gigs || !this.props.albums || !this.props.songs) return <div className="admin-dashboard-container">Loading</div>
      
        let gigList = this.props.gigs.map(gig => <div key={gig.id}>{gig.venue}</div>)
        let albumList = this.props.albums.map(album => {
            return <div key={album.id} className="admin-album-list-item">
                        <div>{album.name}</div>
                        <div className="album-item-right">
                            <h4>ID:{album.id}</h4>
                            <h4>Delete</h4>
                            <h4>Update</h4>
                        </div>
                    </div>
        })
        let songList = this.props.songs.map(song => <div key={song.id}>{song.title}</div>)
        return (
            <div className="admin-dashboard-container">
                
                <NewGigForm />
                <NewAlbumForm />
                <NewSongForm />
                <div className="admin-item-index-container">
                    {gigList}
                </div>
                <div className="admin-item-index-container">
                    {albumList}
                </div>
                <div className="admin-item-index-container">
                    {songList}
                </div>
            </div>
        )
    }
}

export default Dashboard;