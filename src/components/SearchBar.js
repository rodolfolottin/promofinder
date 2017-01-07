import React, { Component } from 'react';
import { Input } from 'antd';
const Search = Input.Search;


class SearchBar extends Component {
  render() {
    var divStyle = {
      width: '60em',
      marginTop: '5em'
    };

    return (
      <Search placeholder="Search item"  onSearch={value => console.log(value)} size="large" style={divStyle} />
    );
  }
}

export default SearchBar;
