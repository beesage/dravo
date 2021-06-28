import { withStyles } from "@material-ui/core/styles";
//import { deepOrange } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";

const Pic = withStyles((theme) => ({
	root: {
		width: "100%",
		height: "auto",
		borderRadius: "50%",
		border: "9px solid #314e52",
		justifySelf: "center",
		marginTop: "1rem",
		[theme.breakpoints.up("md")]: {
			width: "50%",
		},
	},
}))(Avatar);

//CHECK deepOrange on material-ui

export default Pic;
