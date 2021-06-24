import { withStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";

const Tool = withStyles({
	root: {
		height: "4rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "1.5rem",
	},
})(Toolbar);

export default Tool;
