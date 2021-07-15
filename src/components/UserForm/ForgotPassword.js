import React, { useState } from "react";
import InputField from "./controls/InputField";
import Button from "./controls/Submit";
import UseForm from "./UseForm";
import useStyles from "./styles/StyleUserForm";
import NavBar from "../../components/Header/styles/StylesNavBar";
import { Container } from "@material-ui/core";
import Tool from "../Header/styles/StylesTool";

//import axios from "axios";
// import Form from "../../components/Form";
// import Row from "../../components/Row";
// import Input from "../../components/Input";
// import Button from "../../components/Button";

const ForgotPassword = () => {
  const classes = useStyles();
  const { values, handleChange, handleSubmit, errors } = UseForm();

  // const [email, setEmail] = useState("");
  // const [emailSent, setEmailSent] = useState(false);

  // const submitHandler = (e) => {
  //     e.preventDefault();
  //     const body = {
  //         email,
  //     };
  //     axios({
  //         url: "/auth/forgot",
  //         data: body,
  //         method: "post",
  //     }).then(res => {
  //         setEmailSent(true);
  //     })
  // }

  // let body;
  // if (emailSent) {
  //     body = (
  //         <span>An email with reset instructions is on its way</span>
  //     );
  // } else {
  //     body = (
  //         <Form onSubmit={submitHandler}>
  //             <Row>
  //                 <Input
  //                     name="email"
  //                     placeholder="email"
  //                     type="text"
  //                     value={email}
  //                     onChange={e => setEmail(e.target.value)}
  //                 />
  //             </Row>
  //             <Row>
  //                 <Button>Get reset link</Button>
  //             </Row>
  //         </Form>
  //     );
  // }

  return (
    <>
      <NavBar position="static" className="tablet-navbar">
        <Tool>
          <>
            <p className="menu-item" >Forgot Password</p>
          </>
        </Tool>
      </NavBar>
      <Container component="main" maxWidth={false} className={classes.container} >
        <p className="edit-caption">Enter a valid email</p>
        <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off" >
          <InputField
            name="email"
            type="email"
            label="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          <Button type="submit" text="Submit" />
        </form>
      </Container>
    </>
  );
};

export default ForgotPassword;
