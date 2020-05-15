import React from 'react';

import SearchBar from './SearchBar'
import axios from 'axios';

class App extends React.Component {

    state = { images: [] };

    async onSerachSubmit(term){
        const response = await axios.get('https://api.unsplash.com/search/photos',
        {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 9YxEwYqJhSdt-bAozxT1uaofp1eYvlEh_GGhEQzSyUA'
            }
        });
        // console.log(response.data.results);
        this.setState({ images: response.data.results });
    }

    render(){
    return (
        <div className="ui container" style={{ marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSerachSubmit}/>
            Found: {this.state.images.length} images
        </div>);
    }
}

export default App;