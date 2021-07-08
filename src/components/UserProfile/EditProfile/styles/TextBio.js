import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import autoprefixer from "autoprefixer";

const TextBio = withStyles(() => ({
	root: {
		background: "#F2A154",
		marginBottom: "2.5%",
		borderRadius: "4px",
		boxShadow: "0 8px 6px -6px rgba(0, 0, 0, 0.1)",
		width: "343px",
		height: "150px",
		"& .MuiOutlinedInput-notchedOutline": {
			borderColor: "transparent",
		},
	},
}))(TextField);

export default TextBio;
