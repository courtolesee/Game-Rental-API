import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Results from '../Results/Results';
import Logo from './logo.png'
// Material UI Imports
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Material UI Styles
const styles = theme => ({
  button: {
    margin: theme.spacing(),
  },
  textField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },
});

class App extends Component {

  // changes with user input
  state = {
    search: '',
    lastSearch: ''
  }

  // on change function to handles the change in the input
  handleChange = (event) => {
    this.setState({
      search: event.target.value
    });
  }

  // on click function to dispatch (to the root saga listening for it) the payload (user search input)
  performSearch = () => {
    this.props.dispatch({type: 'SEARCH_GAMES', payload: this.state.search})
    // saves last search in state
    this.setState({
      lastSearch: this.state.search
    });
    // clears search bar
    this.setState({
      search: ''
    });
  }

  goToCheckout = () => {
    this.props.dispatch({type: 'FETCH_RENTALS'});
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
        <div className="search">
          <p>Giant Bomb API Game Rental</p>
          <div>
            <h3>Search for games to rent!</h3>
              <TextField
                id="outlined-name"
                label="Game Keywords"
                className={classes.textField}
                value={this.state.search}
                onChange={(event)=>this.handleChange(event, 'search')}
                margin="normal"
                variant="outlined"
              /> <br/>
              <Button 
                variant="contained" 
                className={classes.button}
                onClick={this.performSearch}>
                  Search
              </Button>
          </div>
        </div>

        <div>
          <p>Showing results for: {this.state.lastSearch}</p><br/>
        </div>{JSON.stringify(this.props.rental)}
        <Results />
      </div>
    );
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect((reduxState=>({rental: reduxState.rentalsReducer})))(withStyles(styles)(App));
