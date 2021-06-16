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
import "../styles.css";
import useStyles from "../style";
import logo from "../assets/logo-mobile.png";
import { NavLink } from "react-router-dom";

export default function LogIn() {
	const classes = useStyles();

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
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password-login"
							label="Enter your password"
							type="password"
							id="password-login"
							autoComplete="current-password"
							className={classes.textField}
							InputLabelProps={{
								classes: {
									root: classes.cssLabel,
									focused: classes.cssFocused,
								},
							}}
						/>
						<Grid container>
							<Grid item xs className={classes.formControl}>
								<FormControlLabel
									control={<Checkbox value="remember" color="default" />}
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
