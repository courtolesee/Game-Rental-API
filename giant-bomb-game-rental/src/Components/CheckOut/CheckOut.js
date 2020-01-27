import React, {Component} from 'react';
// import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import GameCard from '../GameCard/GameCard';

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

    componentDidMount = () => {
      this.props.dispatch({type: 'FETCH_RENTALS'});
    }

    backToSearch = () => {
      this.props.history.push('/')
    }

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
              return <GameCard key={i} item={item} />
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

// export default withRouter(connect(reduxState=>({rental: reduxState.rentalsReducer}))(withStyles(styles)(Checkout));


