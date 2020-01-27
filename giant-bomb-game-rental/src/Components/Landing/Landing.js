import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../Search/Search';
import Logo from './logo.png'

// Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Material UI Styles
const styles = theme => ({
  button: {
    margin: theme.spacing(),
  }
});

class Landing extends Component {

  goToCheckout = () => {
    this.props.history.push('/checkout')
  }

  // renders App
  render() {

    const { classes } = this.props;

    return (
      <div className="App">
          <div className="checkoutBtn">
            <Button 
                variant="contained" 
                className={classes.button}
                onClick={this.goToCheckout}>
                Ready to Checkout?
              </Button>
            </div>
        <header className="App-header">
          <div className="title">
            <img className="logo" src={Logo} alt="Gravie Logo" />
            <h1> Software Engineer Challenge</h1>
          </div>
        </header>
        <Search />
      </div>
    );
  }
}

export default connect()(withStyles(styles)(Landing));

