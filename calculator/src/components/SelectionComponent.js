import React from 'react';
import ButtonComp from './ButtonComp';

class SelectionComponent extends React.Component 
{
    render() {
        return(
            <div className="grid-container">
                <ButtonComp symbool={"AC"}/>
                <ButtonComp symbool={"+/-"}/>
                <ButtonComp symbool={"%"}/>
                <ButtonComp symbool={"/"}/>

                <ButtonComp symbool={"7"}/>
                <ButtonComp symbool={"8"}/>
                <ButtonComp symbool={"9"}/>
                <ButtonComp symbool={"*"}/>

                <ButtonComp symbool={"4"}/>
                <ButtonComp symbool={"5"}/>
                <ButtonComp symbool={"6"}/>
                <ButtonComp symbool={"-"}/>

                <ButtonComp symbool={"1"}/>
                <ButtonComp symbool={"2"}/>
                <ButtonComp symbool={"3"}/>
                <ButtonComp symbool={"+"}/>

                <ButtonComp symbool={"0"}/>
                <ButtonComp symbool={"."}/>
                <ButtonComp symbool={"="}/>
            </div>
        );
    }
}

export default SelectionComponent;