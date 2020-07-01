import React , {PureComponent} from 'react';

import EmojiRow from './EmojiRow'

class EmojiResult extends PureComponent {

    render() {
        return(
        <div className="ui list">
            {this.props.imagelist.map(emojiData => (
                <EmojiRow 
                    key={emojiData.title}
                    symbol={emojiData.symbol}
                    title={emojiData.title}
                />))}
        </div>);
    }
}

export default EmojiResult;