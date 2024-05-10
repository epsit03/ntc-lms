import React from 'react';
import './landingPage.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Slideshow } from './SlideShow';
import { AppBar, Toolbar, Typography, Container, Grid, Paper } from '@mui/material';
export const LandingPage = () => {
  return (
    <div className='pg-contn'>
    
      <Container>
        <Slideshow />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper>
            <div className='welcome'>
              {/* Content for your landing page goes here */}
              <Typography variant="h4" align="center">Welcome to our Library Management System</Typography>
              <Typography variant="body1" align="center">Explore our collection of books and manage your library efficiently.</Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      
     
    </div>
  );
};