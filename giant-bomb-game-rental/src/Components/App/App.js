import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import GameCard from '../GameCard/GameCard'

class App extends Component {

  // getBomb = () => {
  //   this.props.dispatch( { type: 'FETCH_BOMB' } );
  // }

  // componentDidMount() {
  //   this.getBomb();
  //   console.log('getting:', this.props.reduxState.bomb);
  // }

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
        <br/>
        <input placeholder="search" type="text" onChange={(event)=>this.handleChange(event, 'search')} value={this.state.search}/>
        <button onClick={this.performSearch}>search</button>
        {JSON.stringify(this.props.game)}
          {/* <div className="pictureBox">
          {this.props.images.map( (game,i)=> {     
            return <GameCard key={i} game={game} page='search'/>
          })}
          </div> */}

      </div>
    );
  }
}

export default connect(reduxState=>({game: reduxState.searchReducer}))(App);