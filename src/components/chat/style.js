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
      // border:"1px solid black",
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
      [theme.breakpoints.between('sm', 'md')]: {
        width:"30%",
        // padding:"5px"
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width:"30%"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
    width:"30%"
    },
    [theme.breakpoints.up('xl')]: {
     width:"20%"
    },
      // [theme.breakpoints.only('lg')]: {
      //   width: "30%",
      // },
    },
    coversationContainer: {
      // border:"1px solid red",
      width: "80%",
      borderTopRightRadius: "20px",
      borderBottomRightRadius: "20px",
      boxShadow: "12px 2px 15px  #f5f5f5",
      zIndex: 2,
      paddingTop: props =>(props.roomActive?"18px":"30px" ),
      [theme.breakpoints.between('sm', 'md')]: {
        width:"70%",
        paddingTop: props =>(props.roomActive?"16px":"20px" ),
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width:"70%",
      paddingTop: props =>(props.roomActive?"18px":"30px" ),
    },
    [theme.breakpoints.between('lg', 'xl')]: {
    width:"70%",
    paddingTop: props =>(props.roomActive?"18px":"30px" ),
 
    },
    [theme.breakpoints.up('xl')]: {
     width:"80%",
     paddingTop: props =>(props.roomActive?"18px":"30px" ),
    },
     
      // backgroundColor: "#f0f2f5",
      background:'#f0f0f0'
    },
    receiverInfo: {
      // background:"#e0e0e0"
    },
    receiverInfo:{
      // border:"1px solid black",
      [theme.breakpoints.between('sm', 'md')]: {
       height: props =>(props.roomActive?"39px":"35px"),
        },
        [theme.breakpoints.between('md', 'lg')]: {
          height: props =>(props.roomActive?"39px":"27px"),
        },
        [theme.breakpoints.between('lg', 'xl')]: {
          height: props =>(props.roomActive?"48px":"36px"),
        },
        [theme.breakpoints.up('xl')]: {
          height: props =>(props.roomActive?"48px":"36px")
        },
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
      // border:"1px solid black",
      backgroundColor: "#f0f0f0",   
      [theme.breakpoints.between('sm', 'md')]: {
        width:"100%",
        padding: "8px 0px",
        height: props=>(props.roomActive?"60px":"45px")
      },
      [theme.breakpoints.between('md', 'lg')]: {
        width:"100%",
        padding: "8px 0px",
        height: props=>(props.roomActive?"60px":"45px")
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        padding: "8px 0px",
        width:"100%",
        height: props=>(props.roomActive?"60px":"45px")
      },
      [theme.breakpoints.up('xl')]: {
        padding: "8px 0px",
        width:"100%",
        height:"auto"
      },
    },
  
    divider: {
      border: "60px solid black",
    },
  }))
  export{useStylesIndex}