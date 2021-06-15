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
  }));
  
export default useStyles;