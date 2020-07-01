import React , {PureComponent} from 'react';
//import ReactDOM from 'react-dom';

class SearchBar extends PureComponent {

    onInputChange = (event) => {
        this.props.onclickhander(event.target.value);
    }

    render() {
        return(
            <div className="search-bar ui segment">
                <form className="ui form">
                    <input type="text" onChange={this.onInputChange}/>
                </form>
            </div>
            );
    }
}
export default SearchBar;