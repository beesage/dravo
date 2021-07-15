import { makeStyles } from "@material-ui/core/styles";

const useStylesTablet = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
	},
	listItem: {
		paddingLeft: "0",
		paddingRight: "0",
		justifyContent: "center",
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		height: "0",
	},
	containerTablet: {
		display: "flex",
		justifyContent: "space-evenly",
		backgroundColor: "#F7F6E7",
		height: "0",
		paddingLeft: "50px",
	},
	containerTabletEmail: {
		display: "flex",
		justifyContent: "space-evenly",
		backgroundColor: "#F7F6E7",
		height: "0",
		paddingLeft: "50px",
		paddingTop: "200px",
	},
	textField: {
		background: "#FFFFFF",
		padding: "10.5px 14px",
		border: "1px solid #D3D3D3",
		fontSize: "0.9rem",
		borderRadius: "4px",
		marginBottom: "2.5%",
		boxShadow: "0 8px 6px -6px rgba(0, 0, 0, 0.1)",
	},
	buttonTablet: {
		background: "#314E52",
		padding: "10px 80px",
		color: "#F2A154",
		marginBottom: "2%",
		fontSize: "1em",
		fontWeight: "500",
		boxShadow: "0 8px 6px -6px rgba(0, 0, 0, 0.5)",
		"&:hover": {
			backgroundColor: "#5A8288",
		},
	},
}));

export default useStylesTablet;
