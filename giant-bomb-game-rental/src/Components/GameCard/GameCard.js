import React, {Component} from 'react';
import {connect} from 'react-redux';


class GameCard extends Component {



  render () {
    return (
      <div className="gameCard">
         <img src={this.props.item.image} alt={this.props.item.name}/>
         <p>{this.props.item.name}</p>
      </div>
    )
  }
}


export default connect()(GameCard);
