import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    typingArea: {
    // border:"1px solid red",
    width:"100%",
    gap:10,
      display: "flex",
      alignItems: "center",
      padding: "8px 120px 10px 120px",
      position: "relative",
      [theme.breakpoints.between('sm', 'md')]: {
        width:"100%",
        padding: "0px 5px 0px 5px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width:"100%",
      padding: "0px 5px 0px 5px",

    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width:"100%",
      padding: "0px 5px 0px 10px",
      height:"40px"

    },
    [theme.breakpoints.up('xl')]: {
      width:"100%",
      padding: "8px 5px 10px 10px",
    },
    },
    fieldDiv:{
      // border:"1px solid blue",
      "&.css-1gingnh-MuiInputBase-root":{},
      [theme.breakpoints.between('sm', 'md')]: {
        width:"95%",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width:"95%",

    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width:"95%",
      

    },
    [theme.breakpoints.up('xl')]: {
      width:"95%",
      "&.css-1gingnh-MuiInputBase-root":{
        width:"100%",
        marginLeft:"0px"
      }
    },
    },
    inputField: {
      backgorundColor: "#fff",
      flex: 1,
  "&.css-1gingnh-MuiInputBase-root":{
    borderRadius:"5px",
    marginLeft:"0px",
    [theme.breakpoints.between('sm', 'md')]: {
      width:"100%"
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width:"100%",

    },
    [theme.breakpoints.between('lg', 'xl')]: {
    
      width:"100%"
    },
    [theme.breakpoints.up('xl')]: {
    
      width:"100%"
    },
  },
      "& .MuiOutlinedInput-root": {
        borderRadius: "25px 0px 0px 25px",
        border:"1px solid red",
        height: "40px",
        backgroundColor: "#f5f5f5",
        marginLeft: "10px",
        foucus: "unset",
        
      },
    },
    sendButtonDiv:{
      // border:"1px solid red",
      padding:"2px 0px 0px 0px"
    },

    sendButton: {
      backgroundColor: "#d22129",
      fontSize: "20px",
      color: "#ffffff",
      borderRadius: "50%",
      cursor: "pointer",
      height: "40px",
      zIndex: 1,
      right: 28,
      "&:hover": {
        color: "#d22129",
        backgroundColor: "#ffffff"
      },
      "& .makeStyles-sendButton-1405": {
        backgorundColor: "#fff"
      }
    },
   
  }));

  export{useStyles}