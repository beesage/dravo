import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({   
    container: {
    backgroundColor: "#F7F6E7",
    alignItems: 'center',    
    height: "100vh",    
    }, 
    title: {
    fontWeight: "800", 
    marginBottom: "30px",
    },
    wrapper: {      
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: "#314E52"
    },
    logo: {
      marginTop: "20%",
      marginBottom: "10%",          
    }, 
    form: {
      width: '90%',      
      color: "#314E52",      
    },
    textField: {
      border: "none",
      background: "#F2A154",
      marginBottom: "-2px",      
      //outline: 'none',      
      borderRadius: "4px",    
    },
    formControl: {
      color: "#314E52",
      marginTop: "18px",
    },
    forgotPassword: {
      color: "#314E52",
      textDecoration: "underline",  
      lineHeight: 5.3,   
      fontSize: "1.03em",      
    },
    submit: {      
      backgroundColor: "#314E52",
      color: "#F2A154",
      marginTop: "25px",
      marginBottom: "30px",
      fontWeight: "800",
      padding: "18.px 14px",
      textTransform: "none",
      fontSize: "1.2em",
    },      
    link: {
       color: "#F2A154",
       textDecoration: "underline"
    },
    cssLabel: {
      color : "#314E52",
    },
    typographyColor: {
      color : "#314E52",
    }
  }));
  
export default useStyles;