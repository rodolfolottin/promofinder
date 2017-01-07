import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import ListPromo from './ListPromo';
import { searchItem } from './../actions/actions';

class App extends Component {
  render() {
    const { dispatch, promos } = this.props;
    return (
      <div className="App">
      <SearchBar onSearchItem = {
            text => dispatch(searchItem(text))}>
      </SearchBar>
      <ListPromo promosList = { promos }/>
      </div>
    );
  }
}

function promosList(state) {
  return {
    promos: state.promos
  }
}

App = connect(promosList)(App);
export default App;
