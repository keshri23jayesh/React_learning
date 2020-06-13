import React from 'react';
import InputComponent from './InputComponent';
import SelectionComponent from './SelectionComponent';

class App extends React.Component {

    state = {input: ''};
    
    onbuttonClicked = (input) => {
        this.setState({input: input});
    }

    render() {
        return(
            <div>
                <InputComponent input={this.state.input} />
                <SelectionComponent onbuttonClicked={this.onbuttonClicked} />
            </div>
        );
    }
}

export default App;