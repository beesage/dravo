import React from 'react';


/**
   * Sorting the passed down array user by their value weight delta
   * in descending order.
   * <p>
   * This function recieves the array "user" and uses the sort() method
   * to sort the array. The default sort order is ascending, built upon
   * converting the elements into strings, then comparing their sequences
   * of UTF-16 code units values. This function recieves b as a first argument
   * and a as a second argument to change the sort oder to descending.
   *
   * @param   a  starting point of the elements in an array
   * @param   b  endpoint of the element in an array
   * @return     returns the sorted array "user"
   * @author    Pamela Feijo
   */

const UseForm = () => {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",    
  });  
  //console.log(values)

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