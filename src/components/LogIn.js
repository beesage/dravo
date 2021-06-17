import React from "react";
import {
	Button,
	CssBaseline,
	TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Grid,
	Box,
	Container,
	Typography,
} from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';

import "../styles.css";
import useStyles from "../style";
import logo from "../assets/logo-mobile.png";
import { NavLink } from "react-router-dom";

export default function LogIn() {
	const classes = useStyles();
	const [values, setValues] = React.useState({    
		password: '',
		weight: '',    
		showPassword: false,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	
	return (
		<div>
			<Container component="main" maxWidth="xs" className={classes.container}>
				<CssBaseline />
				<div className={classes.wrapper}>
					<img className={classes.logo} src={logo} />
					<Typography className={classes.title} variant="h4">
						Log In
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Enter your email"
							name="email"
							autoComplete="email"
							autoFocus
							className={classes.textField}
							InputLabelProps={{
								classes: {
									root: classes.cssLabel,
									focused: classes.cssFocused,
								},
							}}
						/>
						<FormControl className={clsx(classes.textField)}  fullWidth variant="outlined">
							<InputLabel className={classes.fieldLabel} htmlFor="outlined-adornment-password" required >
								Password
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"								
								type={values.showPassword ? 'text' : 'password'}
								value={values.password}
								onChange={handleChange('password')}
								endAdornment={
								<InputAdornment position="end">
									<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
									className={classes.fieldLabel}
									>
									{values.showPassword ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
								}
								labelWidth={70}
							/>
						</FormControl> 
						<Grid container>
							<Grid item xs className={classes.formControl}>
								<FormControlLabel
									control={<Checkbox className={classes.fill} value="remember" color="default" />}
									label="Keep me logged in"
								/>
							</Grid>
							<Grid item>
								<Link
									href="#"
									variant="body2"
									className={classes.forgotPassword}
								>
									Forgot password?
								</Link>
							</Grid>
						</Grid>
						<NavLink to="/leaderboard">
							<Button
								type="submit"
								fullWidth
								variant="contained"
								className={classes.submit}
							>
								Log In
							</Button>
						</NavLink>
					</form>
				</div>
				<Box align="center" mt={2}>
					<Typography variant="body2" className={classes.typographyColor}>
						New to Dravo?
					</Typography>
					<NavLink to="/signup" variant="body2" className={classes.link}>
						{"Join Now"}
					</NavLink>
				</Box>
			</Container>
		</div>
	);
}
