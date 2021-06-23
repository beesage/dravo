import React from "react";
import {  
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";

import InputField from "./controls/InputField"
import Button from "./controls/Submit";

import useStyles from "./styles/StyleUserForm";
import logo from "../../assets/logo-mobile.png";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
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
                  Sign Up
                </Typography>
                
                <form className={classes.root} noValidate>
                <InputField
                    name="username"
                    label="Enter your username"
                    value={values.username}
                    onChange={handleChange}                
                                  
                  />
                  <InputField
                    name="email"
                    label="Enter your email"
                    value={values.email}
                    onChange={handleChange}                
                                  
                  />
                  
                  <InputField
                    name="password"
                    label="Enter your password"
                    value={values.password}
                    onChange={handleChange}              
                                  
                  />
                  <InputField
                    name="confirmPassword"
                    label="Confirm your password"
                    value={values.confirmPassword}
                    onChange={handleChange}                
                                  
                  />
                  
                  <Box>
                    <FormControlLabel control={<Checkbox className={classes.fill} value="remember" color="default" />} label="Keep me logged in" />
                    <Link href="#" variant="body2" className={classes.forgotPassword} >
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
