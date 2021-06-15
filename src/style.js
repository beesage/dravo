import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({   
    container: {
    backgroundColor: "#F7F6E7",
    alignItems: 'center',    
    height: "100vh",    
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
    },
    formcontrol: {
      color: "#314E52",
    },  
    submit: {      
      backgroundColor: "#314E52",
      color: "#F2A154"
    },      
    link: {
       color: "#314E52",
       textDecoration: "underline"
    }   
  }));
  
export default useStyles;