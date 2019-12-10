import React from 'react';
import { connect } from 'react-redux';
import { createSong, updateSong, deleteSong, fetchSongs } from '../../actions/song_actions';

const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({
        createSong: song => dispatch(createSong(song)),
        fetchSongs: () => dispatch(fetchSongs())
    })
}

class NewSongForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            duration: "",
            album_id: "",
            audioUrl: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createSong(this.state).then(res => {
            this.props.fetchSongs();
            this.setState({
                title: "",
                duration: "",
                audioUrl: "",
                album_id: "",
            })
        })
    }

    render() {
        return (
            <div className="new-song-form-container">
                <h3>Add New Album</h3>
                <form className="new-song-form" onSubmit={this.handleSubmit}>

                    <input type="text" value={this.state.title} placeholder="Title" onChange={this.update('title')} />
                    <input type="text" value={this.state.duration} placeholder="Duration" onChange={this.update('duration')} />
                    <input type="text" value={this.state.album_id} placeholder="Album ID" onChange={this.update('album_id')} />
                    <input type="text" value={this.state.audioUrl} placeholder="Song Url" onChange={this.update('audioUrl')} />

                    <input type="submit" value="Create Song" />
                </form>
            </div>
        )
    }
}

export default connect(msp, mdp)(NewSongForm);