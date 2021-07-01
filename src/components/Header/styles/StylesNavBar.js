import { withStyles } from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";

const NavBar = withStyles((theme) => ({
	root: {
		backgroundColor: "#F2A154",
		padding: "0.5rem",
		boxShadow: "none",
		[theme.breakpoints.up("md")]: {
			backgroundColor: "#f7f6e7",
			borderBottom: "0.5px solid #314e52",
		},
	},
}))(AppBar);

export default NavBar;
