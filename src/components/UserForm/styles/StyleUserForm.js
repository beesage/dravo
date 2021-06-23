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
  logo: {
    marginTop: "20%",
    marginBottom: "10%",
  },  
  textField: {    
    background: "#F2A154",
    marginBottom: "2.5%",
    borderRadius: "4px",
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
    marginBottom: "2%",
    fontWeight: "800",    
    textTransform: "none",
    fontSize: "1.5em",
  },
  link: {
    color: "#F2A154",
    textDecoration: "underline",
  },
  greenColor: {
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
