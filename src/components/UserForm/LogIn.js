import React from "react";
<<<<<<< HEAD
import {
	CssBaseline,
	FormControlLabel,
	Checkbox,
	Link,
	Grid,
	Box,
	Container,
	Typography,
} from "@material-ui/core";
import InputField from "./controls/InputField";
=======
import { CssBaseline, FormControlLabel, Checkbox, Link, Grid, Box, Container, Typography } from "@material-ui/core";
import InputField from "./controls/InputField";
import InputPassword from "./controls/InputPassword";
>>>>>>> 7ca64a9f96f4914dafeffdc905567f2a8fafd801
import Button from "./controls/Submit";
import UseForm from "./UseForm";
import { NavLink } from "react-router-dom";
import useStyles from "./styles/StyleUserForm";
import logo from "../../assets/logo-mobile.png";
import validate from './ValidateInfo';

export default function LogIn() {
<<<<<<< HEAD
	const classes = useStyles();
	const { values, handleChange, handleSubmit } = UseForm();

	return (
		<div>
			<Container component="main" className={classes.container}>
				<CssBaseline />
				<Grid container>
					<Grid item className={classes.img} xs={12} sm={6} md={6}>
						<img className={classes.logo} src={logo} />
					</Grid>
					<Grid item xs={12} sm={6} md={6} className={classes.breakpoints}>
						<Typography className={classes.title} variant="h4">
							Log In
						</Typography>
						<form className={classes.root} onSubmit={handleSubmit} noValidate>
							<InputField
								name="username"
								label="Enter your username"
								value={values.username}
								onChange={handleChange}
							/>
							<InputField
								name="password"
								label="Enter your password"
								value={values.password}
								onChange={handleChange}
							/>
							<Box>
								<FormControlLabel
									control={
										<Checkbox
											className={classes.orangeColor}
											value="remember"
											color="default"
										/>
									}
									className={classes.checkbox}
									label="Keep me logged in"
								/>
								<Link href="#" className={classes.forgotPassword}>
									Forgot password?
								</Link>
							</Box>
							<Button type="submit" text="Log In" />
						</form>
						<Box align="center" mt={2}>
							<Typography className={classes.greenColor}>
								New to Dravo?
							</Typography>
							<NavLink to="/signup" variant="body2" className={classes.link}>
								{"Join Now"}
							</NavLink>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
=======
  const classes = useStyles();
  const { values, handleChange, handleSubmit, handleClickShowPassword, errors, showPassword } = UseForm(validate);

  return (
    <div>
       <Container component="main" className={classes.container}>
        <CssBaseline />
        <Grid container>
          <Grid item className={classes.img} xs={12} sm={6} md={6}>
            <img className={classes.logo} src={logo} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} className={classes.breakpoints}>
            <Typography className={classes.title} variant="h4">
              Log In
            </Typography>
            <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
                <InputField
                    name="username"
                    type="text"
                    label="Enter your username"
                    value={values.username}
                    onChange={handleChange}                                 
                 />
                 {errors.username && <div className={classes.redColor}>{errors.username}</div>}  
                  <InputPassword
                    name="password"                    
                    label="Enter your password"                    
                    value={values.password}
                    onChange={handleChange}  
                    onClick={handleClickShowPassword} 
                    showPassword={showPassword}         
                  />  
                  {errors.password && <div className={classes.redColor}>{errors.password}</div>}               
                  <Box className={classes.box}>
                    <FormControlLabel control={<Checkbox className={classes.orangeColor} value="remember" color="default" />}
                      className={classes.checkbox} label="Keep me logged in"/>
                    <Link href="#" className={classes.forgotPassword}>
                      Forgot password?
                    </Link>
                  </Box>             
                  <Button type="submit" text="Log In" />              
            </form>
            <Box align="center" mt={2}>
              <Typography className={classes.typography}>
                New to Dravo?
              </Typography>
              <NavLink to="/signup" variant="body2" className={classes.link}>
                {"Join Now"}
              </NavLink>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
>>>>>>> 7ca64a9f96f4914dafeffdc905567f2a8fafd801
}
