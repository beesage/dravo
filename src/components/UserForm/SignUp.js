import React, { useState } from "react";
import { CssBaseline, FormControlLabel, Checkbox, Link, Grid, Box, Container, Typography } from "@material-ui/core";
import InputField from "./controls/InputField"
import InputPassword from "./controls/InputPassword";
import Button from "./controls/Submit";
import UseForm from './UseForm';
import { NavLink } from "react-router-dom";
import useStyles from "./styles/StyleUserForm";
import logo from "../../assets/logo-mobile.png";
import validate from './ValidateInfo';
import Axios from 'axios';


export default function SignUp() {
  const classes = useStyles();
  const { values, handleChange, handleSubmit, errors } = UseForm(validate);
  const [usernameError, setusernameError] = useState("");  
  const [passwordError, setpasswordError] = useState("");  
  const [emailError, setemailError] = useState("");  
  const [response, setResponse] = useState("");  
  

  const signup = () => {
    Axios.post("http://localhost:3000/auth/signup", {
     username: values.username,
     email: values.email,
     password: values.password,
     confirmPassword: values.confirmPassword,
    }).then((response) => {
      setResponse(response.data)   
      console.log(response.data)  
    })
    .catch((e) => {
      const usernameError = e.response.data.err.details[0].message
      const emailError = e.response.data.err.details[2].message
      const passwordError = e.response.data.err.details[1].message
      setusernameError(usernameError)     
      setemailError(emailError)  
      setpasswordError(passwordError)
 });
 }   
 

  return (
    <div>
      <Container component="main" maxWidth={false} className={classes.container}>
            <CssBaseline />
            <Grid container>
              <Grid item className={classes.img} xs={12} sm={6} md={6}>
                <img className={classes.logo} src={logo} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={classes.breakpoints}>
                <Typography className={classes.title} variant="h4">
                  Sign Up
                </Typography>                
                <form className={classes.root} onSubmit={handleSubmit} autoComplete="off" noValidate>
                    <InputField
                        name="username"
                        type="text"
                        label="Enter your username"
                        value={values.username}
                        onChange={handleChange}              
                    />      
                    {errors.username&& <div className={classes.redColor}>{usernameError}</div>}             
                    {errors.username && <div className={classes.redColor}>{errors.username}</div>} 
                    <InputField
                        name="email"
                        type="email"
                        label="Enter your email"
                        value={values.email}
                        onChange={handleChange}                
                   />   
                   {errors.email &&<div className={classes.redColor}>{emailError}</div>}
                   {errors.email && <div className={classes.redColor}>{errors.email}</div>}                   
                   <InputPassword
                        name="password"                    
                        label="Enter your password"                    
                        value={values.password}
                        onChange={handleChange}                                                        
                  />
                   {<div className={classes.redColor}>{passwordError}</div>}
                   {errors.password && <div className={classes.redColor}>{errors.password}</div>} 
                   <InputPassword
                        name="confirmPassword"                    
                        label="Confirm your password"                    
                        value={values.confirmPassword}
                        onChange={handleChange}                                                              
                  />
                  {errors.confirmPassword && <div className={classes.redColor}>{errors.confirmPassword}</div>} 
                  {<div className={classes.redColor}>{response}</div>}
                      <Box className={classes.box}>
                        <FormControlLabel control={<Checkbox className={classes.orangeColor} value="remember" color="default" />}  className={classes.checkbox} label="Keep me logged in" />
                        <Link href="#" className={classes.forgotPassword}>
                          Forgot password?
                        </Link>
                      </Box>
                      <Button type="submit" text="Sign Up" onClick={signup} />    
                </form>
                <Box align="center" mt={2}>
                  <Typography className={classes.typography}>
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
