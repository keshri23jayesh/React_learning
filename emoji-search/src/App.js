import React , {PureComponent} from 'react';

import filteremoji from './filteremoji';

import SearchBar from './SearchBar';
import EmojiResult from './EmojiResult';
import Header from './Header';

class App extends PureComponent {

    state = {emojilist: filteremoji("",20)};

    onclickhander = (term) => {
        console.log(term);
        this.setState({emojilist: filteremoji(term, 20)});
        console.log(this.state.emojilist);
    }

    render() {
        return (
            <div>
                <Header />
                <SearchBar onclickhander={this.onclickhander} />
                <EmojiResult imagelist={this.state.emojilist} />
            </div>
        )
    };
}

export default App;