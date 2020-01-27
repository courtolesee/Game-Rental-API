import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameCard from '../GameCard/GameCard';


class Results extends Component {

  // renders results of search (mapps through the game reducer which holds the results of the search query)
  render() {

    return (
        <div className="gameSection">
          {this.props.game.map( (item,i)=> {     
            return <GameCard key={i} item={item} page='search'/>
          })}
        </div>
    );
  }
}

export default connect(reduxState=>({game: reduxState.searchReducer}))(Results);