import React from "react";
import InputField from "./controls/InputField";
import Button from "./controls/Submit";
import UseForm from "./UseForm";
import useStyles from "./styles/StyleUserForm";
import NavBar from "../../components/Header/styles/StylesNavBar";
import { Container } from "@material-ui/core";
import Tool from "../Header/styles/StylesTool";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  const classes = useStyles();
  const { values, handleChange } = UseForm();

 const handleNewEmail = e => {   
    e.preventDefault();   
  };

  return (
    <>
      <NavBar position="static" className="tablet-navbar">
        <Tool>
          <>
            <p className="menu-item">Forgot Password</p>
          </>
        </Tool>
      </NavBar>
      <Container component="main" maxWidth={false} className={classes.container} >
        <p className="edit-caption">Email</p>
        <form className={classes.root} onSubmit={handleNewEmail} noValidate autoComplete="off" >
          <InputField
            name="email"
            type="email"
            label="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          <Button type="submit" text="Recover password" />
        </form>
        <NavLink to="/" variant="body2" className={classes.link}>{"Log In"}</NavLink>
      </Container>
    </>
  );
};

export default ForgotPassword;
