import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root:{
    fontFamily: "Krub",
  },
  container: {
    backgroundColor: "#F7F6E7",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Krub",
  },
  title: {
    fontWeight: "800",
    marginBottom: "25px",
    textAlign: "center",
    color: "#314E52",
    fontFamily: "Krub",
  },  
  logo: {
    marginTop: "10%",
    marginBottom: "10%",
  },  
  textField: {    
    background: "#F2A154",
    marginBottom: "2.5%",
    borderRadius: "4px",
    boxShadow: "0 8px 6px -6px rgba(0, 0, 0, 0.1)",
  }, 
  forgotPassword: {
    color: "#314E52",
    textDecoration: "underline",
    lineHeight: 5.3,
    fontSize: "1.1em",
    // marginLeft: "10px",
    fontFamily: "Krub",
    fontWeight: "500",
  },
  submit: {
    backgroundColor: "#314E52",
    color: "#F2A154",    
    marginBottom: "2%",
    fontWeight: "800",    
    textTransform: "none",
    fontSize: "1.5em",
    cursor: "pointer",
    transitionDuration: "0.4s",
    boxShadow: "0 8px 6px -6px rgba(0, 0, 0, 0.5)",  
    '&:hover': {     
      backgroundColor: "#5A8288",      
  },
  },
  link: {
    color: "#F2A154",
    textDecoration: "underline",
  },
  greenColor: {
    color: "#314E52",
  },
  orangeColor: {
    color: "#F2A154",
    fontWeight: "500",
  },
 redColor: {
    color: "red",
  },
  checkbox: {
    color: "#314E52",
    fontFamily: "Krub",
    fontWeight: "500",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
  },
  img: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  breakpoints: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "30%",
    },
  },
}));

export default useStyles;
