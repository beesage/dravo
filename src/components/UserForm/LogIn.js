import React, { useState } from "react";
import {
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
import InputField from "./controls/InputField";
import InputPassword from "./controls/InputPassword";
import Button from "./controls/Submit";
import UseForm from "./UseForm";
import { NavLink, useHistory } from "react-router-dom";
import useStyles from "./styles/StyleUserForm";
import logo from "../../assets/logo-mobile.png";
import validate from "./ValidateInfo";
import Axios from "axios";
import "../../styles.css";

export default function LogIn() {
  const classes = useStyles();
  const { values, handleChange, handleSubmit, errors } = UseForm(validate);
  const [usernameError, setusernameError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [responseError, setResponseError] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [isLoginCorrect, setIsLoginCorrect] = useState(true);
  let history = useHistory();

  const login = () => {
    Axios.post("http://localhost:3000/auth/login", {
      username: values.username,
      password: values.password,
    })
      .then((data) => {
        console.log(data.data[0]);
        history.push("/leaderboard");
        return setSelectedUser(data.data[0]);
      })
      .catch((e) => {
        const usernameError = e.response.data.err.details[0]?.message;
        const passwordError = e.response.data.err.details[1]?.message;
        setusernameError(usernameError);
        setpasswordError(passwordError);
        setIsLoginCorrect(false);
      });
  };
  return (
    <>
      <div className="login-grid">
        <Container
          component="main"
          maxWidth={false}
          className={classes.container}
        >
          <CssBaseline />
          <Grid container>
            <Grid item className={classes.img} xs={12} sm={6} md={6}>
              <img className={classes.logo} src={logo} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} className={classes.breakpoints}>
              <Typography className={classes.title} variant="h4">
                Log In
              </Typography>
              <form
                className={classes.root}
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
              >
                <InputField
                  name="username"
                  type="text"
                  label="Enter your username"
                  value={values.username}
                  onChange={handleChange}
                />
                {errors.username && (
                  <div className={classes.redColor}>{usernameError}</div>
                )}
                <InputPassword
                  name="password"
                  label="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className={classes.redColor}>{passwordError}</div>
                )}
                {<div className={classes.redColor}>{responseError}</div>}
                <Box className={classes.box}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        className={classes.orangeColor}
                        value="remember"
                        color="default"
                      />
                    }
                    className={classes.checkbox}
                    label="Keep me logged in"
                  />
                  <NavLink
                    to="/forgotpassword"
                    className={classes.forgotPassword}
                  >
                    Forgot password?
                  </NavLink>
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
    </>
  );
}
