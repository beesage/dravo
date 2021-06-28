import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "auto",
		borderRadius: "50%",
		border: "9px solid #314e52",
		justifySelf: "center",
		marginTop: "1rem",
	},
	orange: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
	},
}));

//CHECK deepOrange on material-ui

export default useStyles;
