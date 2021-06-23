import React from "react";
import { CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Container, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { InputLabel, OutlinedInput, InputAdornment, IconButton  } from "@material-ui/core";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import clsx from "clsx";

import InputField from "./controls/InputField"
import Button from "./controls/Submit";

import { NavLink } from "react-router-dom";
import useStyles from "./styles/StyleUserForm";
import logo from "../../assets/logo-mobile.png";


export default function LogIn() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = e => {
    e.preventDefault();   
  };

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
              Log In
            </Typography>
            <form className={classes.root} onSubmit={handleSubmit} noValidate>
            <InputField
                name="username"
                label="Enter your username"
                value={values.username}
                onChange={handleChange}                
                              
              />
               <InputField
                name="password"
                label="Enter your password"
                value={values.password}
                onChange={handleChange}                
                              
              />
            
              <div className={classes.greenColor}>
                <FormControlLabel
                  control={
                    <Checkbox   value="remember" color="default" />
                  }
                  label="Keep me logged in"
                />
                <Link
                  href="#"
                  variant="body2"
                  className={classes.forgotPassword}
                >
                  Forgot password?
                </Link>
              </div>
              <Button
                  type="submit"
                  text="Log In" 
              />              
            </form>
            <Box align="center" mt={2}>
              <Typography className={classes.typographyColor}>
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
