import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';


class GameCard extends Component {



  render () {
    return (
      <div className="imageCard">
        <p>{this.props.item.name}</p>
         <img src={this.props.item.image} alt={this.props.item.name}/>

      </div>
    )
  }
}


export default connect()(GameCard);
