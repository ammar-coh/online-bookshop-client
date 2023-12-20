import { makeStyles, styled } from "@material-ui/core/styles";

const useStylesHeaderNavTitle = makeStyles((theme)=>({
    root: {
      width: "100%",
      padding: "0px 5px",
    },
    title: {
      fontFamily: "Montserrat, sans-se",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto,sans-serif",
      textAlign: "start",
      lineHeight: 1.5,
      fontSize: "19.2px",
      [theme.breakpoints.between('lg','xl')]: {
        fontSize: "16px"

      },
      [theme.breakpoints.up('xl')]: {
        fontSize: "19.2px"

      },
    },
    breadcrumb: {
      fontFamily: "Montserrat, sans-se",
      color: "#fff",
      fontWeight: 500,
      textAlign: "center",
      padding: "0px",
      [theme.breakpoints.between('lg','xl')]: {
        fontSize: "10px"

      },
      [theme.breakpoints.up('xl')]: {
        fontSize: "19.2px"

      },
    },
    link: {
      textDecoration: "none",
      fontFamily: "Montserrat, sans-se",
      fontSize: "14px",
      color: "#fff",
      padding: "0px 0px 0px 0px",
      padding: "0px",
      [theme.breakpoints.between('lg','xl')]: {
        fontSize: "13px"

      },
      [theme.breakpoints.up('xl')]: {
        fontSize: "13px"

      },
    }
  
  
  
  }));
  export { useStylesHeaderNavTitle }
  