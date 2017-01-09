import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import ListPromo from './ListPromo';
import { searchItem } from './../actions/actions';

class App extends Component {
  render() {
    const { dispatch, promos } = this.props;
    return (
      <div className="App">
      <SearchBar onSearchItem={
            text => dispatch(searchItem(text))}>
      </SearchBar>
      <ListPromo promos={ promos }/>
      </div>
    );
  }
}

function promos(state) {
  return {
    promos: state.promos
  }
}

App = connect(promos)(App);
export default App;
