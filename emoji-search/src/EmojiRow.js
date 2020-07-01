import React , {PureComponent} from 'react';
import PropTypes from "prop-types";

class EmojiRow extends PureComponent {
    static propTypes = {
        title: PropTypes.string,
        symbol: PropTypes.string
      };

    render() {
        const codePointHex = this.props.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        return(
            <div className="item">
                <img className="ui avatar image" src={src} alt={this.props.title} />
                <div className="content">
                    <div className="description">{this.props.title}</div>
                </div>
            </div>);
    }
}

export default EmojiRow;