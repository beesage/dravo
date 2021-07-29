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

  /** The signup function to the server an HTTP POSTgir request to the chosen API endpoint.
	 * <p>
	 * Before sending the request to the server, the value of "password" and "confirmPassword" stored in the edited object are compared: if they are the same, 
   * then the POST request can be sent through axios; on the contrary, the value of "res" and "err" are updated (respectively in "setRes" and "setErr").
	 * <p>
	 * The POST request is sent through axios to the relevant endpoint, using "password" as a second argument, and "config", which contains the headers information, as a third.
	 * If the request is successfully executed, the value of the "err" and "res" variables are updated (respectively in "setErr" and "setRes").
	 * <p>
	 * If the response from the server is not successful, the relevant error is catched and its value stored in the "err" variable (in "setErr"); 
   * "res" is simultaneously updated (in "setErr")
	 * @author Pamela Feijo
	 */

  const signup = () => {
    if (values.password == values.confirmPassword) {
      Axios.post("http://202.61.225.240:3000/auth/signup", {
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
    Axios.post("http://202.61.225.240:3000/auth/login", {
      username: values.username,
      password: values.password,
    })
      .then((data) => {       
        setResponse("Successfully logged in!");
        setError("");
        history.push("/leaderboard");
        return setSelectedUser(data.data[0]);
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data);         
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
