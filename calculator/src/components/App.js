import React from 'react';
import InputComponent from './InputComponent';
import SelectionComponent from './SelectionComponent';

class App extends React.Component {

    render() {
        return(
            <div>
                <InputComponent />
                <SelectionComponent />
            </div>
        );
    }
}

export default App;