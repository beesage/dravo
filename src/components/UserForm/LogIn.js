import React, { useState } from "react";
import { CssBaseline, FormControlLabel, Checkbox, Link, Grid, Box, Container, Typography } from "@material-ui/core";
import InputField from "./controls/InputField"
import InputPassword from "./controls/InputPassword";
import Button from "./controls/Submit";
import UseForm from "./UseForm";
import { NavLink } from "react-router-dom";
import useStyles from "./styles/StyleUserForm";
import logo from "../../assets/logo-mobile.png";
import validate from "./ValidateInfo";
import Axios from 'axios';

export default function LogIn() {

  const classes = useStyles();
	const { values, handleChange, handleSubmit, errors } = UseForm(validate);
 // const [error, setError] = useState("");
 const [usernameError, setusernameError] = useState("");  
  const [passwordError, setpasswordError] = useState(""); 
  const [responseh, setResponse] = useState("");     
  
  
 const login = () => {
  Axios.post("http://localhost:3000/auth/login", {
   username: values.username,
   password: values.password,    
  }).then((response) => {
    setResponse(response.data.message)   
      console.log(responseh)
      console.log(response)
  })
  .catch((e) => {
    const usernameError = e.response.data.err.details[0].message      
      const passwordError = e.response.data.err.details[1].message
      setusernameError(usernameError)   
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
          <Grid item xs={12} sm={6} md={6} className={classes.breakpoints} >
            <Typography className={classes.title} variant="h4">
              Log In
            </Typography>
            <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
                <InputField
                    name="username"
                    type="text"
                    label="Enter your username"
                    value={values.username}
                    onChange={handleChange}                                 
                 />
                 {errors.username && <div className={classes.redColor}>{usernameError}</div>}  
                 {/* {errors.username && <div className={classes.redColor}>{errors.username}</div>}   */}
                  <InputPassword
                    name="password"                    
                    label="Enter your password"                    
                    value={values.password}
                    onChange={handleChange}                      
                  />  
                  {errors.password &&<div className={classes.redColor}>{passwordError}</div>}
                  {/* {errors.password && <div className={classes.redColor}>{errors.password}</div>}   */}
                  {/* {error ? <div className={classes.redColor}>{error}</div> : null}                */}
                  { <div className={classes.redColor}>{responseh}</div>}
                  <Box className={classes.box}>
                    <FormControlLabel control={<Checkbox className={classes.orangeColor} value="remember" color="default" />}
                      className={classes.checkbox} label="Keep me logged in"/>
                    <Link href="#" className={classes.forgotPassword}>
                      Forgot password?
                    </Link>
                  </Box>             
                  <Button type="submit" text="Log In" onClick={login} />              
            </form>
            <Box align="center" mt={2}>
              <Typography className={classes.typography}>
                New to Dravo?
              </Typography>
              <NavLink to="/signup" variant="body2" className={classes.link}>
                {"Join Now"}
              </NavLink>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
