import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import GameCard from '../GameCard/GameCard';

class Checkout extends Component {

    componentDidMount = () => {
      this.props.dispatch({type: 'FETCH_RENTALS'});
    }

    render () {
    
      return (
        <div className="gameSection">{JSON.stringify(this.props.rental.item)}
          {this.props.rental.map( (item,i)=> {     
            return <GameCard key={i} item={item} />
          })}
        </div>
      )
    }
  }
  
  
  
  export default withRouter(connect(reduxState=>({rental: reduxState.rentalsReducer}))(Checkout));
