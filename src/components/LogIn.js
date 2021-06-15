import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-mobile.png"; 
import useStyles from "../style";
import { Container, Typography } from '@material-ui/core';

export default function LogIn() {    
    const classes = useStyles();
  
    return (        
      <div>
         <Container className={classes.container}>
           <div className={classes.wrapper}>
              <img className={classes.logo}  src={logo}  alt="Dravo Logo" /> 
              <Typography className={classes.title}  component="h1" variant="h4">
                 Log In
              </Typography>
           </div>             
         </Container>
      </div>
    )
};