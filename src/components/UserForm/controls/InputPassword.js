import React from "react";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputField from "./InputField";

export default function InputPassword(props) {
  //const {  } = props;

  const [showPassword, setPasswordShown] = React.useState(false);
  
  return (
    <InputField
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"            
            onClick={(e) => setPasswordShown(!showPassword)}
          >
            <IconButton>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
      {...props}
    />
  );
}

