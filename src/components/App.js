import React, { Component } from 'react';
import SearchBar from './SearchBar';
import TweetsItensTable from './TweetsItensTable';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <TweetsItensTable />
      </div>
    );
  }
}

export default App;
