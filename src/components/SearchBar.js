import React, { Component } from 'react';
import { Input } from 'antd';
const Search = Input.Search;

class SearchBar extends Component {
  render() {
    const divStyle = {
      width: '60em',
      marginTop: '5em'
    };

    return (
      <Search placeholder="Search item" onSearch={value => this.props.onSearchItem(value)} size="large" style={divStyle} />
    );
  }

  searchItem(event) {
    event.preventDefault();
    this.props.onSearchItem(event.value);
  }
}


export default SearchBar;
