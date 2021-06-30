import React from 'react'
import { Button } from "@material-ui/core";
import useStyles from "../styles/StyleUserForm";


export default function Submit(props) {

    const { text, type, onClick } = props
    const classes = useStyles();

    return (
        <Button  
            fullWidth  
            type={type}       
            onClick={onClick}           
            className={classes.submit}>
            {text}
        </Button>
    )
}