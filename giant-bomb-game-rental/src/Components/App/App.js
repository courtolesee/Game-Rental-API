import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import GameCard from '../GameCard/GameCard';
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


  // renders App
  render() {

    const { classes } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Gravie Software Engineer Challenge</h1>
            <p>Giant Bomb API</p>
        </header>

        <div className="search">
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
        
        <div className="gameSection">
          {this.props.game.map( (item,i)=> {     
            return <GameCard key={i} item={item} />
          })}
        </div>
      </div>
    );
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(reduxState=>({game: reduxState.searchReducer}))(withStyles(styles)(App));

