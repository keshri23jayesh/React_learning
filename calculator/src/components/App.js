import React from 'react';

import InputComponent from './InputComponent';
import SelectionComponent from './SelectionComponent';

import calculate from './logic/calculate'

class App extends React.Component {

    state = {
        total: null,
        next: null,
        operation: null
    };
    
    onbuttonClicked = buttonName => {
        this.setState(calculate(this.state, buttonName));
        console.log(buttonName);
    }

    render() {
        return(
            <div>
                <InputComponent value={this.state.next || this.state.total || "0"} />
                <SelectionComponent onbuttonClicked={this.onbuttonClicked} />
            </div>
        );
    }
}

export default App;