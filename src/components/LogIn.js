import React from 'react';
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Container, Typography }  from '@material-ui/core';
import "../styles.css"
import useStyles from "../style";
import logo from "../assets/logo-mobile.png"; 
import { NavLink } from "react-router-dom";


export default function LogIn() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
    <Container component="main" maxWidth="xs" className={classes.container} >
      <CssBaseline />
      <div className={classes.wrapper}>
         <img className={classes.logo}  src={logo}  />      
        <Typography variant="h4">
          Log In 
        </Typography>
        <form className={classes.form} noValidate>
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
          <Grid container>
            <Grid item xs >
                <FormControlLabel
                control={<Checkbox value="remember" />}
                label="Keep me logged in"
              />      
              <Link href="#" variant="body2" className={classes.link}>
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
            Log In
          </Button>
        </form>
      </div>
      <Box align="center" mt={8}>
         <Typography variant="body2">
            New to Dravo?
         </Typography>
         <NavLink to="/signup" variant="body2" className={classes.link}>           
            {"Join Now"}           
          </NavLink>         
      </Box>      
    </Container>      
    </div>   
  );
}