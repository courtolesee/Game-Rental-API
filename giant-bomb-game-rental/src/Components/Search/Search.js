import React, { Component } from 'react';
import { connect } from 'react-redux';
import Results from '../Results/Results';
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

class Search extends Component {

  // changes with user input (search is current, lastSearch holds previous search)
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

  // brings user to checkout page, which holds results of the rentals reducer 
  goToCheckout = () => {
    this.history.push('/checkout')
  }

  // renders Search
  render() {

    const { classes } = this.props;

    return (

    <div >
          <div className="search">          
          <p>Giant Bomb API Game Rental</p>
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
        <div>
          <p>Showing results for: {this.state.lastSearch}</p><br/>
        </div>
        <Results />

    </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect((reduxState=>({rental: reduxState.rentalsReducer})))(withStyles(styles)(Search));
