import React from 'react'
import { TextField } from '@material-ui/core';
import useStyles from "../styles/StyleUserForm";

export default function InputField(props) {

    const { name, label, value, onChange, type } = props;
    const classes = useStyles();

    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            type={type}
            onChange={onChange}   
            className={classes.textField}
            fullWidth                                         
        />
    )
}