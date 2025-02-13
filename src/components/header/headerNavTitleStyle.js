import { makeStyles, styled } from "@material-ui/core/styles";

const useStylesHeaderNavTitle = makeStyles((theme)=>({
    root: {
      width: "100%",
      padding: "0px 5px",
      // border:"1px solid #fff"
    },
    title: {
      // border:"1px solid green",
      fontFamily: "Montserrat, sans-se",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto,sans-serif",
      textAlign: "start",
      lineHeight: 1.5,
      fontSize: "19.2px",
      [theme.breakpoints.between('sm','md')]: {
        fontSize: "16px"

      },
      [theme.breakpoints.between('md','lg')]: {
        fontSize: "16px"
      },
      [theme.breakpoints.between('lg','xl')]: {
        fontSize: "16px"

      },
      [theme.breakpoints.up('xl')]: {
        fontSize: "19.2px"

      },
    },
    breadcrumbDiv: {
      fontFamily: "Montserrat, sans-se",
      color: "#fff",
      fontWeight: 500,
      textAlign: "center",
      padding: "0px",
      // border:"1px solid yellow",
      display:"flex",
      [theme.breakpoints.between('sm','md')]: {
        fontSize: "14px"

      },
      [theme.breakpoints.between('md','lg')]: {
        fontSize: "16px"
      },
      [theme.breakpoints.between('lg','xl')]: {
        fontSize: "10px"

      },
      [theme.breakpoints.up('xl')]: {
        fontSize: "19.2px"

      },
    },
    breadcrumb:{
  "& .MuiBreadcrumbs-separator":{
    color:"#fff",
    // border:"1px solid #fff"
  }},

    link: {
      textDecoration: "none",
      fontFamily: "Montserrat, sans-se",
      fontSize: "14px",
      color: "#fff",
      padding: "0px 0px 0px 0px",
      padding: "0px",
      // border:"1px solid blue",
      [theme.breakpoints.between('sm','md')]: {
        fontSize: "14px"

      },
      [theme.breakpoints.between('md','lg')]: {
        fontSize: "12px"
      },
      [theme.breakpoints.between('lg','xl')]: {
        fontSize: "13px"

      },
      [theme.breakpoints.up('xl')]: {
        fontSize: "13px"

      },
    }
  
  
  
  }));
  export { useStylesHeaderNavTitle }
  