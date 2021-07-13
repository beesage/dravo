import React from "react";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputField from "./InputField";
import useStyles from "../styles/StyleUserForm";

export default function InputPassword(props) {
  
  const classes = useStyles();
  const [showPassword, setPasswordShown] = React.useState(false);
  
  return (
    <InputField
    {...props}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"            
            onClick={(e) => setPasswordShown(!showPassword)}
          >
            <IconButton className={classes.greenColor}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
        ...props.InputProps
      }}
     
    />
  );
}




