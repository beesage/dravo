import { makeStyles } from "@material-ui/core/styles";

const useStylesEdit = makeStyles((theme) => ({
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
		alignItems: "center",
		backgroundColor: "#F7F6E7",
	},
	containerTabletEmail: {
		display: "flex",
		justifyContent: "space-evenly",
		backgroundColor: "#F7F6E7",
		height: "0",
		paddingTop: "50px",
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
	buttonEdit: {
		background: "#314E52",
		padding: "8px 80px",
		color: "#F2A154",
		marginTop: "3%",
		boxShadow: "0 8px 6px -6px rgba(0, 0, 0, 0.5)",
		"&:hover": {
			backgroundColor: "#5A8288",
		},
	},
	containerLocationTablet: {
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		paddingTop: "50px",
	},
	buttonTablet: {
		background: "#314E52",
		padding: "8px 40px",
		color: "#F2A154",
		marginBottom: "2%",
		boxShadow: "0 8px 6px -6px rgba(0, 0, 0, 0.5)",
		"&:hover": {
			backgroundColor: "#5A8288",
		},
	},
	containerBioTablet: {
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		paddingTop: "70px",
	},
	buttonTabletPic: {
		background: "#314E52",
		padding: "8px 40px",
		marginTop: "20px",
		color: "#F2A154",
		marginBottom: "2%",
		boxShadow: "0 8px 6px -6px rgba(0, 0, 0, 0.5)",
		"&:hover": {
			backgroundColor: "#5A8288",
		},
	},
}));

export default useStylesEdit;
