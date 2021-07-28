import React, { useState } from "react";
import Axios from "axios";
import { createBrowserHistory } from "history";

const UseForm = () => {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [isLoginCorrect, setIsLoginCorrect] = useState(true);
  const history = createBrowserHistory({ forceRefresh: true });

  /**
   * handleChange sets a new state based on the input from the user.
   * <p>
   * This function updates the values of useState.
   * Name and value are destructured and assigned to e.target.
   * The spread operator contains the current state object.
   * With the current value of username, email, password,
   * confirmpassword the entered input is added to the state variables.
   * @param e
   * @returns updated state of values
   * @author Pamela Feijo
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  /**
   * handleClickShowPassword sets a new state based on the eye icon click.
   * <p>
   * Each action on the eye icon will produce a counter reaction to the the state of
   * showPassword. The function setPasswordShown updates the boolean value of showPassword.
   * @returns the oposite value of showPassword
   * @author Pamela Feijo
   */
  const handleClickShowPassword = () => {
    setPasswordShown(!showPassword);
  };

  /**
   * The e.preventDefault() method stops the default action of the button from happening.
   * It prevents the submit button from submitting the form so it does not refresh the page.
   * setErrors receives the validate function and passes the values to check them
   * according to conditions set out in ValidateInfo.js.
   * @param e
   * @returns the default action of the submit will not be triggered
   * @returns updated state of erros
   * @author Pamela Feijo
   */
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const signup = () => {
    if (values.password == values.confirmPassword) {
      Axios.post("http://localhost:3000/auth/signup", {
        username: values.username,
        email: values.email,
        password: values.confirmPassword,
      })
        .then((response) => {
          setResponse("Successfully registered!");
          setError("");
        })
        .catch((error) => {
          if (error.response) {
            setError(error.response.data);
            setResponse("");
          }
        });
    } else {
      setResponse("Password and Confirm Password should match");
      setError("");
    }
  };

  const login = () => {
    Axios.post("http://localhost:3000/auth/login", {
      username: values.username,
      password: values.password,
    })
      .then((data) => {
        console.log(data);
        setResponse("Successfully logged in!");
        setError("");
        history.push("/leaderboard");
        return setSelectedUser(data.data[0]);
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data);
          console.log(error.response.data);
          setResponse("");
          setIsLoginCorrect(false);
        }
      });
  };

  return {
    values,
    handleChange,
    handleSubmit,
    error,
    setError,
    response,
    setResponse,
    handleClickShowPassword,
    signup,
    login,
  };
};

export default UseForm;
