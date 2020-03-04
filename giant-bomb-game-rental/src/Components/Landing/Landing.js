import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../Search/Search';

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

    // takes user to checkout page on click of 'Ready to Checkout' button
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
                <h1>Giant Bomb API Game Rental</h1>
            </div>
            </header>
            <Search />
        </div>
        );
    }
}


export default connect()(withStyles(styles)(Landing));

