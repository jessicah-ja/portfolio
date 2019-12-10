import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import './FullPage.css';
import { Typography, Container, Link, Grid } from '@material-ui/core';


const Footer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.footer}>
      <Container maxWidth='lg'>
        <Typography variant='body2' color='primary' align='center'>
     
          <Link color='secondary' href='https://github.com/jessicah-ja'>
            https://github.com/jessicah-ja
          </Link>
        </Typography> 
        <Typography variant='body2' color='primary' align='center'>
          {'Phone 👉🏻'}
          <Typography
            display='inline'
            variant='body2'
            color='secondary'
            align='center'
          >
            010-5101-0848
          </Typography>
        </Typography>
      </Container>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: 'inherit',
    marginTop: theme.spacing(10),
    padding: theme.spacing(3, 0)
  }
}));

export default Footer;