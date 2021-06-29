import React from 'react';

const UseForm = (validate) => {  
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",    
  });    

  const [errors, setErrors] = React.useState({});
   
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

  const handleSubmit = e => {
    e.preventDefault(); 
    setErrors(validate(values))  
  };
 
    return { values, handleChange, handleSubmit, errors};
}

export default UseForm;