import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#F7F6E7",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Krub",
  },
  title: {
    fontWeight: "800",
    marginBottom: "30px",
    textAlign: "center",
    color: "#314E52",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: "20%",
    marginBottom: "10%",
  },
  form: {
    maxWidth: "100%",
    color: "#314E52",
  },
  textField: {
    border: "none",
    background: "#F2A154",
    marginBottom: "15px",
    borderRadius: "4px",
  },
  formControl: {
    color: "#314E52",
  },
  forgotPassword: {
    color: "#314E52",
    textDecoration: "underline",
    lineHeight: 5.3,
    fontSize: "1.2em",
  },
  submit: {
    backgroundColor: "#314E52",
    color: "#F2A154",
    marginTop: "5%",
    marginBottom: "30px",
    fontWeight: "800",
    padding: "10px 14px",
    textTransform: "none",
    fontSize: "1.5em",
  },
  link: {
    color: "#F2A154",
    textDecoration: "underline",
  },
  cssLabel: {
    color: "#314E52",
  },
  typographyColor: {
    color: "#314E52",
  },
  fieldLabel: {
    color: "#314E52",
  },
  fill: {
    color: "#314E52",
  },
  img: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  breakpoints: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "20%",
    },
  },
}));

export default useStyles;
