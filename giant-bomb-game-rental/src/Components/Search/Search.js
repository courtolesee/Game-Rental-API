import React, {Component} from 'react';
import { connect } from 'react-redux';
import GameCard from '../GameCard/GameCard'

class SearchPage extends Component {
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
      this.props.dispatch({type: 'SEARCH_GAME', payload: this.state.search})
    }
  
    render () {
      return (
        <div>
          <h1>Search</h1>
          <input placeholder="search" type="text" onChange={(event)=>this.handleChange(event, 'search')} value={this.state.search}/>
          <button onClick={this.performSearch}>SEARCH</button>
          {JSON.stringify(this.props.game)}
          <div>
          {this.props.game.map( (game,i)=> {     
            return <GameCard key={i} game={game}/>
          })}
          </div>
        </div>
      )
    }
  }
  
  export default connect(reduxState=>({game: reduxState.searchReducer}))(SearchPage);