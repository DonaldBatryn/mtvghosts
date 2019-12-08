import React from 'react';
import { connect } from 'react-redux';
import { createAlbum, updateAlbum, deleteAlbum, fetchAlbums } from '../../actions/album_actions';

const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({
        createAlbum: album => dispatch(createAlbum(album)),
        fetchAlbums: () => dispatch(fetchAlbums())
    })
}

class NewAlbumForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            imageUrl: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createAlbum(this.state).then(res => {
            this.props.fetchAlbums();
            this.setState({
                name: "",
                imageUrl: ""
            })
        })
    }

    render() {
        return (
            <div className="new-album-form-container">
                <h3>Add New Album</h3>
                <form className="new-album-form" onSubmit={this.handleSubmit}>
                   
                    <input type="text" value={this.state.name} placeholder="Name" onChange={this.update('name')}/>
                    <input type="text" value={this.state.imageUrl} placeholder="Album Art" onChange={this.update('imageUrl')}/>
                    
                    <input type="submit" value="Create Album"/>
                </form>
            </div>
        )
    }
}

export default connect(msp, mdp)(NewAlbumForm);