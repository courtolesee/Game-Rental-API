import React, {Component} from 'react';
import { connect } from 'react-redux';
// Material UI Imports
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Material UI styles
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};


class GameCard extends Component {

  // on click function to dispatch (to the root saga listening for it) the payload (name and image of game clicked)
  rentGame = () => {
    let rental = {
      image: this.props.item.image,
      name: this.props.item.name
    }
    this.props.dispatch({ type: 'RENT_GAME', payload: rental })
  }

  // deletes individual rental cards from checkout (rental reducer and database)
  deleteRental = () => {
    this.props.dispatch({ type: 'DELETE_RENTAL', payload: this.props.item.id})
  }

  // if on search page: button to rent, if rented and on checkout page: delete
  renderCardBtn = ()=> {
    switch(this.props.page) {
      case 'search': 
        return <Button variant="contained" onClick={this.rentGame}>Rent</Button>;
      case 'rent': 
        return <Button variant="contained" style={{color: "red"}} onClick={this.deleteRental}>Delete</Button>;
      default: 
        return;
    }
  }

  // renders each Game Card from the search result 
  render () {

    const { classes } = this.props;

    return (
      <div className="gameCard">
         <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={this.props.item.image}
              title={this.props.item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.item.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          {this.renderCardBtn()}
          </CardActions>
        </Card>
      </div>
    )
  }
}

GameCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect()(withStyles(styles)(GameCard));



