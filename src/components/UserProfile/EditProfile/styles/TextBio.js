import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const TextBio = withStyles(() => ({
	root: {
		background: "#F2A154",
		marginBottom: "2.5%",
		borderRadius: "4px",
		boxShadow: "0 8px 6px -6px rgba(0, 0, 0, 0.1)",
		width: "300px",
		height: "150px",
	},
}))(TextField);

export default TextBio;
