import { withStyles } from "@material-ui/core/styles";
import json2mq from "json2mq";
import Toolbar from "@material-ui/core/Toolbar";

const Tool = withStyles((theme) => ({
	root: {
		height: "4rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "1.5rem",
		[theme.breakpoints.up(
			json2mq({
				minWidth: 768,
			})
		)]: {
			gap: "4rem",
		},
	},
}))(Toolbar);

export default Tool;
