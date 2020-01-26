import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class Checkout extends Component {

    render () {
    
      return (
          <div>
            {this.props.rental}
          </div>
      )
    }
  }
  
  
  
  export default withRouter(connect(reduxState=>({rental: reduxState.rentalsReducer}))(Checkout));
