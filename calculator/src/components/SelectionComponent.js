import React from 'react';
import ButtonComp from './ButtonComp';

class SelectionComponent extends React.Component 
{
    render() {
        return(
            <div className="grid-container">
                <ButtonComp symbool={"AC"} onbuttonClicked={this.props.onbuttonClicked} />
                <ButtonComp symbool={"+/-"} onbuttonClicked={this.props.onbuttonClicked} />
                <ButtonComp symbool={"%"} onbuttonClicked={this.props.onbuttonClicked} />
                <ButtonComp symbool={"÷"} onbuttonClicked={this.props.onbuttonClicked} />

                <ButtonComp symbool={"7"} onbuttonClicked={this.props.onbuttonClicked} />
                <ButtonComp symbool={"8"} onbuttonClicked={this.props.onbuttonClicked} />
                <ButtonComp symbool={"9"} onbuttonClicked={this.props.onbuttonClicked} />
                <ButtonComp symbool={"x"} onbuttonClicked={this.props.onbuttonClicked} />

                <ButtonComp symbool={"4"} onbuttonClicked={this.props.onbuttonClicked} />
                <ButtonComp symbool={"5"} onbuttonClicked={this.props.onbuttonClicked} />
                <ButtonComp symbool={"6"} onbuttonClicked={this.props.onbuttonClicked} />
                <ButtonComp symbool={"-"} onbuttonClicked={this.props.onbuttonClicked} />

                <ButtonComp symbool={"1"} onbuttonClicked={this.props.onbuttonClicked} />
                <ButtonComp symbool={"2"} onbuttonClicked={this.props.onbuttonClicked} />
                <ButtonComp symbool={"3"} onbuttonClicked={this.props.onbuttonClicked} />
                <ButtonComp symbool={"+"} onbuttonClicked={this.props.onbuttonClicked} />

                <ButtonComp symbool={"0"} onbuttonClicked={this.props.onbuttonClicked} />
                <ButtonComp symbool={"."} onbuttonClicked={this.props.onbuttonClicked} />
                <ButtonComp symbool={"="} onbuttonClicked={this.props.onbuttonClicked} />
            </div>
        );
    }
}

export default SelectionComponent;