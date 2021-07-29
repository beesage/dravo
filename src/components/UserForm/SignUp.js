import React from "react";
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
import { NavLink } from "react-router-dom";
import useStyles from "./styles/StyleUserForm";
import logo from "../../assets/logo-mobile.png";
import "../../styles.css";

export default function SignUp() {
  const classes = useStyles();
  const { values, handleChange, handleSubmit, signup, error, response } =
    UseForm();

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
                Sign Up
              </Typography>
              <form
                className={classes.root}
                onSubmit={handleSubmit}
                autoComplete="off"
                noValidate
              >
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
                <InputPassword
                  name="password"
                  label="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                />
                <InputPassword
                  name="confirmPassword"
                  label="Confirm your password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                {response && <div className="res-message">{response}</div>}
                {error && (
                  <div className="err-message">
                    {error.validationErrors[0].message}
                  </div>
                )}
                <Box className={classes.box}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        className={classes.orangeColor}
                        value="remember"
                        color="default"
                      />
                    }
                  />
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
    </>
  );
}
