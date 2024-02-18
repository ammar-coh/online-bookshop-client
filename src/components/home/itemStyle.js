import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "0px",
    width: "100%",
    zIndex: 1,
    // border:"1px solid black"

  },
  mainContainer: {
    display: "flex",
    padding: "10px 5px",
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "5px 5px",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "10px 5px",
    },
    // border:"1px solid red"
  },
  image_container: {
    padding: "0px 10px 0px 0px",
    width: "35%",
    // border:"1px solid green",
    [theme.breakpoints.between('sm', 'md')]: {
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "35%",
      padding: "11px 0px 0px 0px",
      height: "fit-content"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: "50%",
      padding: "0px 5px 0px 0px",
      height: "fit-content"
    },
    [theme.breakpoints.up('xl')]: {
      width: "40%",
      padding: "0px 5px 0px 0px",
    },
  }
  ,
  information_container: {
    display: "grid",
    width: "70%",
    // border: "1px solid blue",
    [theme.breakpoints.between('sm', 'md')]: {
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "65%",
      padding: "0px 5px 0px 0px",
      height: "fit-content"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: "50%",
    },
    [theme.breakpoints.up('xl')]: {
      width: "60%",
    },
    "& .MuiCardContent-root": {
      padding: "0px"
    }
  },
  media: {
    width: "100%",
    height: "168px",
    [theme.breakpoints.between('sm', 'md')]: {
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "100%",
      height: "90px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: "100%",
      height: "168px"
    },
    [theme.breakpoints.up('xl')]: {
      width: "100%",
      height: "168px",
    },
    zIndex: 2,
  },
  update: {
    fontSize: "10px",
    marginLeft: "124px",
    marginTop: "-32px",
    color: "#FFC312",
    width: "26px",
  },
  title_div: {
    // border:"1px solid red",
    height: "36px",
    padding: "10px 0px 0px 0px",
    [theme.breakpoints.between('sm', 'md')]: {
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "10px 0px 0px 3px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "10px 0px 0px 0px",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "10px 0px 0px 3px",

    },

  },
  title: {
    color: "#333533",
    fontFamily: "Montserrat', sans-se",
    fontWeight: 500,
    fontSize: "14px",
    [theme.breakpoints.between('sm', 'md')]: {
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "11px"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: "12px"
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "14px"
    },
  },
  author_div: {
    // border:"1px solid black",
    padding: "10px 0px 0px 0px",
    [theme.breakpoints.between('sm', 'md')]: {
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "0px 0px 0px 2px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "10px 0px 0px 0px",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "10px 0px 0px 3px",

    },

  },
  author: {
    color: "#383838",
    fontFamily: "'Montserrat', sans-se",
    fontSize: "13px",
    [theme.breakpoints.between('sm', 'md')]: {
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "10px"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: "11px"
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "13px"
    },

  },
  rating_div: {
    // border: "1px solid black",
    padding: "10px 0px 0px 0px",
    [theme.breakpoints.between('sm', 'md')]: {
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "8px",
      padding: "5px 0px 0px 2px",
      marginRight:"0px"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: "11px",
      padding: "10px 0px 0px 0px",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "10px 0px 0px 1px",
      fontSize: "14px"
    },

  },
  price_div: {
    // border: "1px solid black",
    padding: "10px 0px 10px 0px",
    [theme.breakpoints.between('sm', 'md')]: {
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "5px 0px 2px 2px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "10px 0px 10px 0px",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "10px 0px 10px 2px",
    },

  },
  price: {
    color: "#000",
    fontFamily: "'Montserrat', sans-se",
    fontWeight: 700,
    fontSize: "15px",
    [theme.breakpoints.between('sm', 'md')]: {
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "10px"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: "12px"
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "15px"
    },
  },
  addtoCart_div: {
    // border: "1px solid black",
    "& .MuiCardActions-root": {
      padding: "0px 0px 0px 0px"
    },
    [theme.breakpoints.between('sm', 'md')]: {
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "0px 0px 0px 1px",
      marginTop:"0px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "0px 0px 0px 0px",
      marginTop:"15px"
    },
    [theme.breakpoints.up('xl')]: {
      padding: "0px 0px 0px 1px",
      marginTop:"0px"
    },
  },

  cart: {
    backgroundColor: "#d22129",
    color: "#ffffff",
    fontSize: "10px",
    zIndex: 1,
    height:"auto",
    "&:hover": {
      color: "black",
      backgroundColor: "white"
    },
    padding: "7px 5px",
    [theme.breakpoints.between('sm', 'md')]: {
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "7px",
      padding: "5px 5px",
      height:"17px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: "8px",
      padding: "5px 5px",
      height:"auto",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "10px",
      padding: "7px 5px",
      height:"auto",
    },
  },

  input: {
    width: "70px",
    marginTop: 5,
    marginLeft: 52,

    fontSize: "10px",
  },
  del: {
    hover: {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
}));

export { useStyles }