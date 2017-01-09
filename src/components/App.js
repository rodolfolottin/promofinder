import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import ListPromo from './ListPromo';
import { searchItem } from './../actions/actions';

class App extends Component {
  render() {
    const { dispatch, promos, loading } = this.props;
    return (
      <div className="App">
      <SearchBar onSearchItem={
            text => dispatch(searchItem(text))}>
      </SearchBar>
      <ListPromo promos={ promos } loading= { loading }/>
      </div>
    );
  }
}

function loadState(state) {
  return {
    promos: state.promos,
    loading: state.loading
  }
}

App = connect(loadState)(App);
export default App;
