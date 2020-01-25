import React, {Component} from 'react';
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



const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class GameCard extends Component {

  render () {

    const { classes } = this.props;

    return (
      <div className="gameCard">
         {/* <img src={this.props.item.image} alt={this.props.item.name}/>
         <p>{this.props.item.name}</p> */}
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
            <Button size="small" color="primary">
              Rent
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}


GameCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameCard);



