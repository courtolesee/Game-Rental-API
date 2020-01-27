import React, {Component} from 'react';
import {connect} from 'react-redux';

// Component imports
import GameCard from '../GameCard/GameCard';

// Material UI imports
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Material UI Styles
const styles = theme => ({
  button: {
    margin: theme.spacing(),
  }
});


class Checkout extends Component {

  // upon checkoutpage load, rentals reducer is mapped through to show all games that have been rented
  componentDidMount = () => {
    this.props.dispatch({type: 'FETCH_RENTALS'});
  }

  // allows user to go back to the search page
  backToSearch = () => {
    this.props.history.push('/')
  }

  // renders Checkout page
  render () {

    const { classes } = this.props;
  
    return (
      <div>
        <h1 className="Checkout-header">
          Checkout
        </h1>
        <Button 
          variant="contained" 
          className={classes.button}
          onClick={this.backToSearch}>
            Back to Search
        </Button>
        <div className="gameSection">
          {this.props.rental.map( (item,i)=> {     
            return <GameCard key={i} item={item} page='rent'/>
          })}
        </div>
      </div>
    )
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};
   

export default connect((reduxState=>({rental: reduxState.rentalsReducer})))(withStyles(styles)(Checkout));