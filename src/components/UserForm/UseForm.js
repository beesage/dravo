import React from 'react';

const UseForm = () => {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  });
  
  console.log(values)

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