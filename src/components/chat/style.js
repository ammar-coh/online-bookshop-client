import { makeStyles, createMuiTheme } from "@material-ui/core/styles";


const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1366, // Custom breakpoint for 1366x768
      },
    },
  });
  const useStylesIndex = makeStyles((theme) => ({
    root: {
      display: "flex",
      padding: "20px 15px 60px 25px ",
      [theme.breakpoints.only('lg')]: {
        padding: "20px 215px 20px 225px ",
      },
      // border:"1px solid black "
    },
  
    list: {
       boxShadow: "2px 0 0px rgb(0 0 0 / 0.2)",
      width: "20%",
      backgroundColor: "#fff",
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
      overflow: "auto",
      "&::-webkit-scrollbar": {
        width: "5px",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#FF9900",
        borderRadius: "12px",
      },
      [theme.breakpoints.only('lg')]: {
        width: "30%",
      },
    },
    coversationContainer: {
      width: "80%",
      borderTopRightRadius: "20px",
      borderBottomRightRadius: "20px",
      boxShadow: "12px 2px 15px  #f5f5f5",
      zIndex: 2,
      paddingTop: props =>(props.roomActive?"18px":"30px" ),
      [theme.breakpoints.only('lg')]: {
        width: "70%",
  
      },
      backgroundColor: "#f0f2f5"
    },
    receiverInfo: {
      // background:"#e0e0e0"
    },
  
    room: {
      zIndex: -1,
      backgroundColor: "#ffffff",
      height: "57vh",
      overflowY: "auto",
      overflowX: "hidden",
      "&::-webkit-scrollbar": {
        width: "5px",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#FF9900",
        borderRadius: "12px",
      },
      [theme.breakpoints.only('lg')]: {
        height: "56vh",
      },
    },
    roomContent: {
      overflowY: "auto",
      maxHeight: "100%",
      overflowWrap: "break-word",
    },
    chatBar: {
      padding: "30px 50px",
      backgroundColor: "#303030",
      [theme.breakpoints.only('lg')]: {
        padding: "20px 10px",
      },
    },
  
    divider: {
      border: "60px solid black",
    },
  }))
  export{useStylesIndex}