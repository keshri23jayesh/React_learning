import React from 'react';
import '../stylesheets/GridStyle.css'

class ButtonComp extends React.Component {

    state = {bgcolor: 'red'}

    operators = ['AC','+/-','%','+','-','*','/','='];
    operand = ['1','2','3','4','5','6','7','8','9','.'];
    

    buttonConfig = {
        zero : {
            className: 'grid-item-operand zero'
        },
        operand : {
            className: 'grid-item-operand'
        },
        operator : {
            className: 'grid-item-operator'
        }
    }

    getbuttonType = (symbool) => {
        if (this.operators.includes(symbool)){
            // console.log(symbool +'operator');
            return 'operator';
        }  
        if (this.operand.includes(symbool)){
            // console.log(symbool +'operand');
            return 'operand';
        }
        if (symbool === '0') {
            // console.log(symbool +'zero');
            return 'zero';
        }
    }

    season = this.getbuttonType(this.props.symbool);
    bgcolor = this.buttonConfig[this.season];

    render() {
        return(
            <div onClick={() => this.props.onbuttonClicked(this.props.symbool)}
                 className={this.bgcolor.className}>
                 {this.props.symbool}
            </div>
        );
    }
}

export default ButtonComp;