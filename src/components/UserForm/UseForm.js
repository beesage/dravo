import React, { useState } from 'react';

const UseForm = (validate) => {  
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",       
  });    

  const [errors, setErrors] = useState({});
  const [showPassword, setPasswordShown] = React.useState(false);
  
 
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
   * This function updates the boolean value of showPassword.   
   * @returns the oposite value of showPassword
   * @author Pamela Feijo
   */
  const handleClickShowPassword = () => {
    setPasswordShown( !showPassword );
  };

  /**
   * handleSubmit  sets a new state based on the input from the user.
   * <p> 
   * This function prevents the
   * preventDefault() is used to avoid refreshing page by adding a preventDefault()
   * updates the values of useState. 
   * Name and value are destructured and assigned to e.target.
   * The spread operator contains the current state object.
   * With the current value of username, email, password, 
   * confirmpassword the entered input is added to the state variables.
   * @param e 
   * @returns 
   * @returns updated state of erros
   * @author Pamela Feijo
   */
   const handleSubmit = e => {   
    e.preventDefault();  
    setErrors(validate(values)) 
  };
  
 
    return { values, handleChange, handleSubmit, errors, handleClickShowPassword, showPassword };
}

export default UseForm;