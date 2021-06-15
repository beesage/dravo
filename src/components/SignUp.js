import React from 'react';
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Container, Typography }  from '@material-ui/core';
import "../styles.css"
import useStyles from "../style";
import logo from "../assets/logo-mobile.png"; 
import { NavLink } from "react-router-dom";


export default function LogIn() {
  const classes = useStyles();

  return (
    <div>
    <Container component="main" maxWidth="xs" className={classes.container} >
      <CssBaseline />
      <div className={classes.wrapper}>
         <img className={classes.logo}  src={logo}  />      
        <Typography className={classes.title} variant="h4">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            /* required */
            fullWidth
            id="username"
            label="Enter your username"
            name="username"
            autoComplete="username"
            autoFocus
            className = {classes.textField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            /* required */
            fullWidth
            id="email"
            label="Enter your email"
            name="email"
            autoComplete="email"
            autoFocus
            className = {classes.textField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            /* required */
            fullWidth
            name="password"
            label="Enter your password"
            type="password"
            id="password"
            autoComplete="current-password"
            className = {classes.textField}
          />     
          <TextField
            variant="outlined"
            margin="normal"
            /* required */
            fullWidth
            name="password"
            label="Confirm your password"
            type="password"
            id="password"
            autoComplete="current-password"
            className = {classes.textField}
          />                   
          <Grid container>
            <Grid item xs>
              <FormControlLabel
                control={<Checkbox value="remember" />}
                label="Keep me logged in"
              />  
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" className={classes.forgotPassword}>
                 Forgot password?
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Create an account
          </Button>
        </form>
      </div>
      <Box align="center" mt={8}>
         <Typography variant="body2">
            Already on Dravo?
         </Typography>
         <NavLink to="/" variant="body2" className={classes.link}>           
            {"Log In"}           
          </NavLink>         
      </Box>      
    </Container>      
    </div>   
  );
}