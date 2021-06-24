import React from 'react';



const UseForm = () => {
  
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",    
  });  
  //console.log(values)
   
  /**
   * handleChange sets a new state based on the input from the user.
   * <p>
   * This function updates the values of useState. 
   * Name and value are destructured and assigned to e.target.
   * The spread operator contains the current state object.
   * With the current value of username, email, password, 
   * confirmpassword the entered input is added or to the state variables.
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
  };
 
    return { values, handleChange, handleSubmit};
}

export default UseForm;