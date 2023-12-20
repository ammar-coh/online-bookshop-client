import { makeStyles, styled } from "@material-ui/core/styles";
import Badge from '@mui/material/Badge';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  }
}));
export { StyledBadge }
const useStylesSDW = makeStyles({
  root: {
    marginLeft: "0px",
    width: "100%",
    zIndex: 1,
    // border:"1px solid black",

  },
  mainContainer: {
    display: "block",
    padding: "10px 0px 10px 45px",
  },
  image_container: {
    padding: "0px 10px 0px 10px",
    width: "125px",
    // border:"1px solid black",
  }
  ,
  information_container: {
    // border: "2px solid yellow",


    display: "block",
    width: "100%",
    "& .MuiCardContent-root": {
      padding: "0px 00px 0px 10px"
    }
  },
  media: {
    width: "100%",
    height: "190px",
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
    width: "120px",
    height: "36px",
    padding: "0px 0px 5px 0px",
    whiteSpace: "normal",
    wordBreak: "break-all",
    overflow: "hidden",
    display: "-webkit-box",
    textAlign: "left",
    margin: "0px",
    textOverflow: "ellipsis",
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    fontSize: "13px",
    fontFamily: "Montserrat, sans-se",

  },
  title: {
    color: "#333533",
    fontFamily: "Montserrat', sans-se",
    fontWeight: 500,
    fontSize: "13px",
    padding: "2px 0px 0px 0px",
    whiteSpace: "normal",
    wordBreak: "break-all",
    overflow: "hidden",
    display: "-webkit-box",
    textAlign: "left",
    margin: "0px",
    textOverflow: "ellipsis",
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    fontFamily: "Montserrat, sans-se",
  },
  author_div: {
    // border:"1px solid black",
    padding: "10px 0px 0px 0px"

  },
  author: {
    color: "#383838",
    fontFamily: "'Montserrat', sans-se",
    width: "120px",
    height: "36px",
    padding: "0px 0px 5px 0px",
    whiteSpace: "normal",
    wordBreak: "break-all",
    overflow: "hidden",
    display: "-webkit-box",
    textAlign: "left",
    margin: "0px",
    textOverflow: "ellipsis",
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    fontSize: "13px",
    fontFamily: "Montserrat, sans-se",

  },
  rating_div: {
    // border: "1px solid black",
    padding: "10px 0px 0px 0px"

  },
  price_div: {
    // border: "1px solid black",
    padding: "10px 0px 10px 10px"

  },
  price: {
    color: "#000",
    fontFamily: "'Montserrat', sans-se",
    fontWeight: 700,
    color: "#333533",
    fontFamily: "Montserrat', sans-se",
    fontSize: "16px",
    padding: "2px 0px 0px 0px",
    whiteSpace: "normal",
    wordBreak: "break-all",
    overflow: "hidden",
    display: "-webkit-box",
    textAlign: "left",
    margin: "0px",
    textOverflow: "ellipsis",
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    fontFamily: "Montserrat, sans-se",
  },
  addtoCart_div: {
    // border: "1px solid black",
    "& .MuiCardActions-root": {
      padding: "0px 0px 0px 0px"
    }
  },

  cart: {
    backgroundColor: "#d22129",
    color: "#ffffff",
    fontSize: "10px",
    zIndex: 1,
    "&:hover": {
      color: "black",
      backgroundColor: "white"
    },
    padding: "7px 5px"
  },

  input: {
    width: "70px",
    marginTop: 5,
    marginLeft: 52,

    fontSize: "10px",
  },
  link: {
    textDecoration: "none",
    width: "100%",
    color: "#fff",
  }
});

export { useStylesSDW }