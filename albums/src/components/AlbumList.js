import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {

	state = { albums: [] };

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({albums: response.data}));
	}

	renderAlbums(){
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album} />
		);
	}


	render() { 

		console.log(this.state);

		const { viewStyle } = styles;
	
	return (

		<ScrollView style={viewStyle}>
		 {this.renderAlbums()}
		</ScrollView>

	);
	}
}

const styles = {

	viewStyle: {
	backgroundColor: 'blue'
	}

};

export default AlbumList;