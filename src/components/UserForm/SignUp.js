import React from "react";
import { CssBaseline, FormControlLabel, Checkbox, Link, Grid, Box, Container, Typography } from "@material-ui/core";
import InputField from "./controls/InputField"
import Button from "./controls/Submit";
import UseForm from './UseForm';
import { NavLink } from "react-router-dom";
import useStyles from "./styles/StyleUserForm";
import logo from "../../assets/logo-mobile.png";


export default function SignUp() {
  const classes = useStyles();
  const { values, handleChange, handleSubmit } = UseForm();

  return (
    <div>
      <Container component="main" className={classes.container}>
            <CssBaseline />
            <Grid container>
              <Grid item className={classes.img} xs={12} sm={6} md={6}>
                <img className={classes.logo} src={logo} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={classes.breakpoints}>
                <Typography className={classes.title} variant="h4">
                  Sign Up
                </Typography>                
                <form className={classes.root} onSubmit={handleSubmit} noValidate>
                    <InputField
                        name="username"
                        type="text"
                        label="Enter your username"
                        value={values.username}
                        onChange={handleChange}              
                    />
                    <InputField
                        name="email"
                        type="email"
                        label="Enter your email"
                        value={values.email}
                        onChange={handleChange}                
                   />                      
                   <InputField
                        name="password"
                        type="password" 
                        label="Enter your password"
                        value={values.password}
                        onChange={handleChange}              
                   />
                   <InputField
                        name="confirmPassword"
                        type="password"  
                        label="Confirm your password"
                        value={values.confirmPassword}
                        onChange={handleChange}              
                   />
                      
                      <Box>
                        <FormControlLabel control={<Checkbox className={classes.orangeColor} value="remember" color="default" />} className={classes.greenColor} label="Keep me logged in" />
                        <Link href="#" className={classes.forgotPassword}>
                          Forgot password?
                        </Link>
                      </Box>
                      <Button type="submit" text="Sign Up"/>    
                </form>
                <Box align="center" mt={2}>
                  <Typography className={classes.greenColor}>
                    Already on Dravo?
                  </Typography>
                  <NavLink to="/" variant="body2" className={classes.link}>
                    {"Log In"}
                  </NavLink>
                </Box>
              </Grid>
            </Grid>
          </Container>
    </div>
  );
}
