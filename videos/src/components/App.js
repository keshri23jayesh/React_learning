import React from 'react';
import SearchBar from './Searchbar'
import youtube, {baseParams} from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    
    state = { videos: [] , selectedVideo: null};
    arr1  = ["time", "year", "people", "way", "day", "man", "thing", "woman", "life", "child", "world",
                "school", "state", "family", "student", "group", "country", "problem", "hand", "part", "place", "case",
                "week", "company", "system", "program", "question", "work", "government", "number", "night", "point",
                "home", "water"];

    componentDidMount = () => {
        let arr = this.arr1;
        this.onTermSubmit(arr[Math.floor(Math.random() * arr.length)]);
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                ...baseParams,
                q: term,
            }
        });
        // console.log(response);
        
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        console.log('From the App!', video);
        this.setState({ selectedVideo: video });
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                
                <div className="ui grid">
                    <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                            <div className="five wide column">
                                <VideoList onVideoSelect={this.onVideoSelect} 
                                                videos={this.state.videos} />
                            </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;