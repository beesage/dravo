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
      marginTop: "30%",
      marginBottom: "10%",          
    }, 
    form: {
      width: '90%',      
      color: "#314E52",      
    },
    textField: {
      border: "none",
      background: "#F2A154",
      /* borderRadius: "4px",   */    
    },
    formcontrol: {
      color: "#314E52",
    },  
    forgotPassword: {
      color: "#314E52",
      textDecoration: "underline",  
      lineHeight: 2.8,         
    },
    submit: {      
      backgroundColor: "#314E52",
      color: "#F2A154",
      marginTop: "30px",
      fontWeight: "800",
      padding: "18.5px 14px",
    },      
    link: {
       color: "#F2A154",
       textDecoration: "underline"
    }   
  }));
  
export default useStyles;