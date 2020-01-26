import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameCard from '../GameCard/GameCard';


class Results extends Component {

  // renders App
  render() {

    return (
        <div className="gameSection">
          {this.props.game.map( (item,i)=> {     
            return <GameCard key={i} item={item} />
          })}
        </div>
    );
  }
}


export default connect(reduxState=>({game: reduxState.searchReducer}))(Results);