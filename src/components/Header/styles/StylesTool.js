import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

const Tool = withStyles((theme) => ({
	root: {
		height: "4rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "0",
		gap: "1.5rem",
		[theme.breakpoints.up("md")]: {
			gap: "4rem",
		},
	},
}))(Toolbar);

export default Tool;
