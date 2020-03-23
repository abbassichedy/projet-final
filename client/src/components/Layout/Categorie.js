import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});
function Category (props) {
  const { classes } = props;
  const images = [
    {
      url:
        'https://plombier360.fr/wp-content/uploads/2019/08/Plombier-Paris-D%C3%A9pannage-plomberie-pas-cher-min.jpg',
      title: 'Plumber',
      width: '40%',
    },
    {
      url:
        'https://www.ecoledespros.fr/wp-content/uploads/sites/31/2019/06/metier-cap-electricien.jpg',
      title: 'Electrician',
      width: '20%',
    },
    {
      url:
        'https://www.climatisation-chauffage-mcm.ca/images/service/clim-9.jpg',
      title: 'Air Conditioning Repairer',
      width: '40%',
    },
    {
      url:
        'https://serrure.online/images/image_2_small_38.jpg',
      title: 'Locksmith',
      width: '38%',
    },
    {
      url:
        'https://builderscrack.co.nz/blog/wp-content/uploads/2010/11/What-does-a-builder-do.jpg',
      title: 'Builder',
      width: '38%',
    },
    {
      url:
        'https://edito.regionsjob.com/observatoire-metier/wp-content/uploads/sites/4/2018/06/peintre.jpg',
      title: 'painter',
      width: '24%',
    },
    {
      url:
        'https://www.gofindex.ca/wp-content/uploads/2018/08/7_Extermination.jpg',
      title: 'Exterminator',
      width: '40%',
    },
    {
      url:
        'https://www.illico-travaux.com/wp-content/uploads/2018/04/menuisier-09042018-1004-533x800.jpg',
      title: 'Carpenter',
      width: '20%',
    },
    {
      url:
        'https://blog.materielelectrique.com/wp-content/uploads/2017/11/pose-d-une-parabole.jpg',
      title: 'Satellite Dish Repairer',
      width: '40%',
    },
  ];
  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
      <h1 className='title'>Here you find all the trades</h1>
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}
Category.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Category);





