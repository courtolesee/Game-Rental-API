import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import GameCard from '../GameCard/GameCard'

class App extends Component {

  state = {
    search: ''
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
    console.log('in handleChange:', event.target.value);
  }

  performSearch = ()=> {
    this.props.dispatch({type: 'SEARCH_GAMES', payload: this.state.search})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Gravie Software Engineer Challenge</h1>
            <p>Giant Bomb API</p>
        </header>
        <div className="search">
          <input placeholder="search" type="text" onChange={(event)=>this.handleChange(event, 'search')} value={this.state.search}/>
          <button onClick={this.performSearch}>search</button>
        </div>
        <div >
          {this.props.game.map( (item,i)=> {     
            return <GameCard key={i} item={item} />
          })}
        </div>
      </div>
    );
  }
}

export default connect(reduxState=>({game: reduxState.searchReducer}))(App);