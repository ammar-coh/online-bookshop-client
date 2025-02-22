import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "50px",
    flexWrap: "wrap",
    // border:"1px solid blue",
    gap: "31px",
    zIndex: 2,
    width: "100%",
    padding:"50px 0px 50px 0px" ,

   
      [theme.breakpoints.between('sm', 'md')]: {
        width:"100%",
        gap:"50px",
        padding:"50px 0px 50px 0px" ,
      },
      [theme.breakpoints.between('md', 'lg')]: {
        width: "100%",
        padding:"50px 50px 50px 0px" ,
        gap:"10px"
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: "100%",
        gap: "15px",
        padding:"50px 50px 50px 0px" ,
      },
      [theme.breakpoints.up('xl')]: {
        width: "100%",
        padding:"50px 50px 50px 0px" ,
        gap: "30px",
      
      },
  
    // marginLeft: "auto"
  },

  book_container:{
    border:"1px solid blue",
    [theme.breakpoints.between('sm', 'md')]: {
      width:"100%",
      border:"1px solid blue"
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "100%",
      border:"1px solid red"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      border:"1px solid blue"
    },
    [theme.breakpoints.up('xl')]: {
      width: "100%",
      border:"1px solid blue"
    },
  },

  main: {
    display: "flex",
    width: "100%",
  },
  header_content_side: {
    // width: "80%",
    width:'100%',
    // backgroundColor: "#fbfcff",
    // border:'1px solid red',
    // [theme.breakpoints.between('sm', 'md')]: {
    //   width: "75%",
    // },
    // [theme.breakpoints.between('md', 'lg')]: {
    //   width: "75%",
    // },
    // [theme.breakpoints.between('lg', 'xl')]: {
    //   width: "80%",
    // },
    // [theme.breakpoints.up('xl')]: {
    //   width: "80%",
    // },
  },
  body:{
    // border:"1px solid black",
    [theme.breakpoints.between('sm', 'md')]: {
      width: "100%",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "100%",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: "100%",
    },
    [theme.breakpoints.up('xl')]: {
      width: "100%",
    },
  },
  banner:{
    border:"1px solid blue",
    [theme.breakpoints.between('sm', 'md')]: {
      width: "100%",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "100%",
      // padding: "10px"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: "100%",
    },
    [theme.breakpoints.up('xl')]: {
      width: "100%",
    },
  },
  sidebar_container: {
    display: "block",
    width: "20%",
    border:"2px solid blue",
    overFlowX:"hidden",
    [theme.breakpoints.between('sm', 'md')]: {
      width: "25%",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "25%",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: "20%",
    },
    [theme.breakpoints.up('xl')]: {
      width: "20%",
    },
    backgroundColor: "#ffffff"
  },
  book_container: {
    width: "22.2%!important",
    minHeight: "208px",
    // border:"1px solid black"
  },
  footer: {
    backgroundColor: "#fbfcff",
    display: "flex",
    justifyContent: "center",
    paddingTop: "10px",
  },
  footer_p: {
    color: "#333533",
    fontFamily: "Montserrat, sans-se",
    fontSize: "12px",
    textAlign: "center",
    margin: "20px"
  },
  banner: {
    justifyContent: "center",
    padding: "10px 340px",
    width: "100%",
    marginLeft: "auto"
  },
  chat: {
    padding: "10px 0px 0px 0px",
  }
}));
export { useStyles }