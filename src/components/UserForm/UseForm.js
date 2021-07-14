import React, { useEffect, useState } from 'react';

const UseForm = (validate) => {  
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",       
  });    

  const [errors, setErrors] = useState({});  
 // const [isSubmitting, setIsSubmitting] = useState(false);
 
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
  const handleChange = e => {    
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
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
    setPasswordShown( !showPassword );
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
   const handleSubmit = e => {   
    e.preventDefault();  
    setErrors(validate(values));

    //setIsSubmitting(true);
  };

 /*  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  ); */
  
 
    return { values, handleChange, handleSubmit, errors, handleClickShowPassword };
}

export default UseForm;