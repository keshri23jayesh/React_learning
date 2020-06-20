import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/GridStyle.css';

class InputComponent extends React.Component {
    static propTypes = {
        value: PropTypes.string,
    }

    render() {
        return(
            <div className="grid-container-input">
                <h3>{this.props.value}</h3>
            </div>
        );
    }
}

export default InputComponent;