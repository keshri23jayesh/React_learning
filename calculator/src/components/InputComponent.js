import React from 'react';
import '../stylesheets/GridStyle.css';

class InputComponent extends React.Component {
    
    state = {input1: '', 
             input2: '' , 
             last_input_oprator: '', 
             first: false}

    operators = ['AC','+/-','%','+','-','*','/','='];
    operand = ['1','2','3','4','5','6','7','8','9','.'];
    

    setInputParams = (selected_input) => {

        if (selected_input === '=') {
            if (this.state.input1 !== '' && 
                this.state.input2 !== '' &&
                this.state.last_input_oprator !== '')
                    this.calulateResult();
        } else {
            if (this.operators.includes(selected_input)) {
                this.setState({last_input_oprator: selected_input});
            }
    
            if (this.operand.includes(selected_input)) {
                if (this.state.input1 === '') {
                    this.setState({input1: selected_input});
                } else if (this.state.input2 === '') {
                    this.setState({input2: selected_input});
                }
            }

        }

        console.log(this.state);
    }

    calulateResult = () => {
        console.log("this is called")
    }

    componentDidUpdate(prevProps, prevState) {
        let selected_input = this.props.input

        // if (prevProps.term !== this.state.term) {
        //     console.log(prevProps);
        // }
        
        if (this.state.first === false) {
            this.setState({first: true})
        }

        this.setInputParams(selected_input);
    }

    render() {
        return(
            <div className="grid-container-input">
                <h3>{this.props.input}</h3>
            </div>
        );
    }
}

export default InputComponent;