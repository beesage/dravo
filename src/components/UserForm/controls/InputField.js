import React from "react";
import { TextField } from "@material-ui/core";
import useStyles from "../styles/StyleUserForm";

export default function InputField({ InputProps, ...props }) {
  const { name, label, value, onChange, type } = props;
  const classes = useStyles();

  const iprops = Object.assign(
    {
      disableUnderline: true,
    },
    InputProps
  );

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
      InputProps={iprops}
      {...props}
    />
  );
}
