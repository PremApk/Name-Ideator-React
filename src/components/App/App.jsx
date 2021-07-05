import React from 'react';
import Header from '../Header/Header';
import ResultContainer from '../ResultContainer/ResultContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {

    state = {
        headerTitle: "Name-It!",
        isChanged: true,
        suggestedNames: []
    };

    handleInputChange = (InputChangeValue) => {
        this.setState({
            isChanged: !InputChangeValue,
            suggestedNames: InputChangeValue ? name(InputChangeValue) : []
        });
    };

    render() {
        return (
            <div>
                <Header isChanged={this.state.isChanged} headTitle={this.state.headerTitle} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}


export default App;