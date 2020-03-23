import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Comment from './Comment';
import Meeting from './Meeting';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
// import Profile from './Profile'
import Workers from './Workers';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const getMessage = name => {
  let message = '/profile/' + name;
  return message;
};

const Cards = ({ worker }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='card'>
      <Card className={classes.root}>
        <p className='text-capitalize'>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                {`${worker.firstname} ${worker.lastname}`}
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title={worker.firstname}
            subheader={worker.adresse}
          />
        </p>
        <CardMedia className={classes.media} image={worker.img} title='Paella dish' />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            Specialite:{worker.metier}
            <hr />
            Numero:{worker.tel}
            <hr />
            Adress:{worker.adresse}
            <hr />
            Mail:{worker.user.email}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            {/* <Link to={() => getMessage(props.worker.Nom)}>
              {' '}
              <ShareIcon />
            </Link> */}
          </IconButton>
          {/* for meetings */}
          <Meeting worker={worker.user} />
          {/* <Comment comment={props.worker.comments} /> */}

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>Reviews:</Typography>
            {/* {props.worker.comments.map((el, i) => (
              <Typography paragraph>{el}</Typography>
            ))} */}

            {/* {props.worker.map((el,i)=>
            <Typography paragraph>{props.worker.name}</Typography>
          )} */}

            {/* /* <Typography paragraph>
            
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Cards;
