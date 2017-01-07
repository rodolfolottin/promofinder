import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import ListPromo from './ListPromo';
import { searchItem } from './../actions/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <ListPromo />
      </div>
    );
  }
}

function promosList(state) {
  return {
    promos: state
  }
}

App = connect(list)(App);
export default App;
