import React from 'react';
import ReactDom from 'react-dom';
import SeaasonDispaly from './SeasonsDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    
    state = { lat: null, errorMessage:'' };
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage:err.message })
            );
    }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat)
            return (<div>Error Message</div>);
        if(this.state.lat && !this.state.errorMessage)
            return <SeaasonDispaly lat={ this.state.lat } />;
        return <Spinner message='Please accpect Location Request !!' />;
    }

    render(){
        return(
        <div className="border red">
            {this.renderContent()}
        </div>);
        };
}

ReactDom.render(<App/>, document.querySelector('#root'));
