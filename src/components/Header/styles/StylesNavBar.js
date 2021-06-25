import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const NavBar = withStyles({
	root: {
		backgroundColor: "#F2A154",
		padding: "0.5rem",
		boxShadow: "none",
	},
})(AppBar);

export default NavBar;
