import React from 'react';
import NewGigForm from '../gigs/new_gig_form';
import NewAlbumForm from '../albums/new_album_form';
import NewSongForm from '../songs/new_song_form';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            when: "",
            venue: "",
            city_state: "",
            price: "",
            ages: "",
            details: "",
            gigImageUrl: "",
            name: "",
            year: "",
            albumImageUrl: "",
            title: "",
            duration: "",
            album_id: "",
            audioUrl: "",
        }
        this.handleGigUpdate = this.handleGigUpdate.bind(this);
        this.handleAlbumUpdate = this.handleAlbumUpdate.bind(this);
        this.handleSongUpdate = this.handleSongUpdate.bind(this);
    }

    componentDidMount() {
        this.props.fetchGigs();
        this.props.fetchAlbums();
        this.props.fetchSongs();
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleGigUpdate(e, gigId) {
        e.preventDefault();
        let gig = {
            when: this.state.when,
            venue: this.state.venue,
            city_state: this.state.city_state,
            price: this.state.price,
            ages: this.state.ages,
            details: this.state.details,
            imageUrl: this.state.gigImageUrl,
        }
        this.props.updateGig(gig, gigId).then(res => this.props.fetchGigs()).then(() => {
            this.setState({
                when: "",
                venue: "",
                city_state: "",
                price: "",
                ages: "",
                details: "",
                gigImageUrl: "",
                name: "",
                year: "",
                albumImageUrl: "",
                title: "",
                duration: "",
                album_id: "",
                audioUrl: "",
            })
        })
    }

    handleAlbumUpdate(e, albumId) {
        e.preventDefault();
        let album = {
            name: this.state.name,
            year: this.state.year,
            imageUrl: this.state.albumImageUrl,
        }
        this.props.updateAlbum(album, albumId).then(res => this.props.fetchAlbums()).then(() => {
            this.setState({
                when: "",
                venue: "",
                city_state: "",
                price: "",
                ages: "",
                details: "",
                gigImageUrl: "",
                name: "",
                year: "",
                albumImageUrl: "",
                title: "",
                duration: "",
                album_id: "",
                audioUrl: "",
            })
        })
    }

    handleSongUpdate(e, songId) {
        e.preventDefault();
        let song = {
            title: this.state.title,
            duration: this.state.duration,
            album_id: this.state.album_id,
            audioUrl: this.state.audioUrl,
        }
        this.props.updateSong(song, songId).then(res => this.props.fetchSongs()).then(() => {
            this.setState({
                when: "",
                venue: "",
                city_state: "",
                price: "",
                ages: "",
                details: "",
                gigImageUrl: "",
                name: "",
                year: "",
                albumImageUrl: "",
                title: "",
                duration: "",
                album_id: "",
                audioUrl: "",
            })
        })
    }

    render() {
        if (!this.props.gigs || !this.props.albums || !this.props.songs) return <div className="admin-dashboard-container">Loading</div>
      
        let gigList = this.props.gigs.map(gig => {
            return <div key={gig.id} className="admin-gig-list-item">
                <div className="gig-li-top">
                    <div>{gig.venue}</div>
                    <button onClick={() => {
                        let menu = document.getElementById(`gig-${gig.id}`);
                        menu.classList.toggle('hidden');
                    }}>V</button>
                </div>
                <div id={`gig-${gig.id}`} className="edit-dropdown hidden">

                    <h4>ID_{gig.id}</h4>
                    <h4>when_{gig.when}</h4>
                    <h4>venue_{gig.venue}</h4>
                    <h4>city_state_{gig.city_state}</h4>
                    <h4>price_{gig.price}</h4>
                    <h4>ages_{gig.ages}</h4>
                    <h4>details_{gig.details}</h4>
                    <img className="admin-list-image" src={gig.imageUrl} alt="no image"/>

                    <h4 className="update-border">Update (fill in all fields)</h4>
                    <form onSubmit={(e) => this.handleGigUpdate(e, gig.id)}>
                        <input type="text" placeholder="new when" onChange={this.update('when')} value={this.state.when}/>
                        <input type="text" placeholder="new venue" onChange={this.update('venue')} value={this.state.venue}/>
                        <input type="text" placeholder="new city_state" onChange={this.update('city_state')} value={this.state.city_state}/>
                        <input type="text" placeholder="new price" onChange={this.update('price')} value={this.state.price}/>
                        <input type="text" placeholder="new ages" onChange={this.update('ages')} value={this.state.ages}/>
                        <input type="text" placeholder="new details" onChange={this.update('details')} value={this.state.details}/>
                        <input type="text" placeholder="new gigImageUrl" onChange={this.update('gigImageUrl')} value={this.state.gigImageUrl}/>
                        <input type="submit" value="Update"/>
                    </form>
                    <button onClick={() => {
                        this.props.deleteGig(gig.id).then(res => this.props.fetchGigs())
                    }}>Delete</button>
                </div>
            </div>
        })

        let albumList = this.props.albums.map(album => {
            return <div key={album.id} className="admin-album-list-item">
                        <div className="album-li-top">
                            <div>{album.name}</div>
                            <button onClick={()=> {
                                let menu = document.getElementById(`album-${album.id}`);
                                menu.classList.toggle('hidden');
                            }}>V</button>
                        </div>
                        <div id={`album-${album.id}`} className="edit-dropdown hidden">

                            <h4>ID_{album.id}</h4>
                            <h4>name_{album.name}</h4>
                            <h4>year_{album.year}</h4>
                            <img className="admin-list-image" src={album.imageUrl} alt="no image"/>

                            <h4 className="update-border">Update (fill in all fields)</h4>
                            <form onSubmit={(e) => this.handleAlbumUpdate(e, album.id)}>
                                <input type="text" placeholder="new name" onChange={this.update('name')} value={this.state.name} />
                                <input type="text" placeholder="new year" onChange={this.update('year')} value={this.state.year} />
                                <input type="text" placeholder="new albumImageUrl" onChange={this.update('albumImageUrl')} value={this.state.albumImageUrl} />
                                
                                <input type="submit" value="Update" />
                            </form>
                            <button onClick={() => {
                                this.props.deleteAlbum(album.id).then(res => this.props.fetchAlbums())
                            }}>Delete</button>
                        </div>
                    </div>
        })


        let songList = this.props.songs.map(song => {
            return <div className="admin-song-list-item" key={song.id}>
                        <div className="song-li-top">
                            <div>{song.title}</div>
                            <button onClick={() => {
                                let menu = document.getElementById(`song-${song.id}`);
                                menu.classList.toggle('hidden');
                            }}>V</button>
                        </div>
                        <div id={`song-${song.id}`} className="edit-dropdown hidden">
                            <h4>ID:{song.id}</h4>
                            <h4>title:{song.title}</h4>
                            <h4>duration:{song.duration}</h4>
                            <h4>albumId:{song.album_id}</h4>
                            <audio src={song.audioUrl} controls></audio>
                            <h4 className="update-border">Update (fill in all fields)</h4>
                            <form onSubmit={(e) => this.handleSongUpdate(e, song.id)}>
                                <input type="text" placeholder="new title" onChange={this.update('title')} value={this.state.title} />
                                <input type="text" placeholder="new duration" onChange={this.update('duration')} value={this.state.duration} />
                                <input type="text" placeholder="new album_id" onChange={this.update('album_id')} value={this.state.album_id} />
                                <input type="text" placeholder="new audioUrl" onChange={this.update('audioUrl')} value={this.state.audioUrl} />

                                <input type="submit" value="Update" />
                            </form>
                            <button onClick={() => {
                                this.props.deleteSong(song.id).then(res => this.props.fetchSongs())
                            }}>Delete</button>
                        </div>
                    </div>
        })

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