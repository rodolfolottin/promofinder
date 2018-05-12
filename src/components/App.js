import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import ListPromo from './ListPromo'
import { searchItem } from './../actions/actions'

class App extends Component {
  render() {
    const { dispatch, promos, loading, code } = this.props

    const appStyle = {
      minWidth: '30em'
    }

    return (
      <div className="App" style={appStyle}>
        <SearchBar onSearchItem={text => dispatch(searchItem(text))} />
        <ListPromo promos={promos} loading={loading} code={code} />
      </div>
    )
  }
}

function loadState(state) {
  return {
    promos: state.promos,
    loading: state.loading,
    code: state.code
  }
}

App = connect(loadState)(App)
export default App
