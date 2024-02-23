import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "50px",
    flexWrap: "wrap",
    gap: "31px",
    zIndex: 2,
    width: "100%",
    marginLeft: "auto"
  },
  main: {
    display: "flex",
    width: "100%",
  },
  header_content_side: {
    width: "80%",
    // backgroundColor: "#fbfcff",
    // border:'1px solid red',
    [theme.breakpoints.between('sm', 'md')]: {
      width: "75%",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "75%",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: "80%",
    },
    [theme.breakpoints.up('xl')]: {
      width: "80%",
    },
  },
  sidebar_container: {
    display: "block",
    width: "20%",
    // border:"1px solid orange",
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