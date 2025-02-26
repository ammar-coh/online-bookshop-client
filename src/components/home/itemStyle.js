import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginLeft: "10px",
    width: "100%",
    zIndex: 1,
    // border:"1px solid black",
    [theme.breakpoints.up('sm')]: {
      width: "257px",
      height:"195px",
      marginLeft:"00px"
    },
    [theme.breakpoints.up('md')]: {
      width: "220px",
      height:"175px",
      marginLeft:"5px"
    },
    [theme.breakpoints.up('lg')]: {
      width: "300px",
      height:"219px",
      // marginLeft:"17px"
    },
    [theme.breakpoints.up('xl')]: {
      width: "401px",
      height:"219px",
      // marginLeft:"110px"
    },

  },
  mainContainer: {
    display: "flex",
    padding: "5px 5px",
    [theme.breakpoints.between('xs', 'sm')]: {
      width:"100%"
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width:"100%"
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "10px 5px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "5px 8px",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "8px 10px",
    },
    // border:"1px solid red"
  },
  image_container: {
    padding: "0px 10px 0px 0px",
    [theme.breakpoints.up('xs')]: {
      width: "40%",
      padding: "0px 0px 0px 0px",
      // height: "200px"
    },
    [theme.breakpoints.up(360)]: {
      width: "35%",
      padding: "0px 0px 0px 0px",
      // height: "200px"
    },
    [theme.breakpoints.up(375)]: {
      width: "30%",
      padding: "0px 0px 0px 0px",
      // height: "200px"
    },
    [theme.breakpoints.up(425)]: {
      width: "30%",
      padding: "0px 0px 0px 0px",
      // height: "200px"
    },
    [theme.breakpoints.up(426)]: {
      width: "25%",
      padding: "0px 0px 0px 0px",
      // height: "200px"
    },
    [theme.breakpoints.up(560)]: {
      width: "18%",
      padding: "0px 0px 0px 0px",
      // height: "200px"
    },
    [theme.breakpoints.up('sm')]: {
      width: "20%",
      padding: "0px 0px 0px 0px",
      height: "fit-content"
    },
    [theme.breakpoints.up(820)]: {
      width: "18%",
      padding: "0px 0px 0px 0px",
      height: "fit-content"
    },
       [theme.breakpoints.up(912)]: {
      width: "30%",
      padding: "0px 0px 0px 0px",
      height: "fit-content"
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "30%",
      padding: "0px 0px 0px 0px",
      height: "fit-content"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: "40%",
      padding: "10px 0px 10px 0px",
      // height: "fit-content"
    },
    [theme.breakpoints.up('xl')]: {
      width: "40%",
      padding: "10px 10px 10px 10px",
    },
  }
  ,
  information_container: {
    display: "grid",
    width: "70%",
    // border: "1px solid blue",
    [theme.breakpoints.up('xs')]: {
      width: "60%",
    },
    [theme.breakpoints.up(360)]: {
      width: "75%",
    },
    [theme.breakpoints.up(375)]: {
      width: "70%",
    },
    [theme.breakpoints.up(425)]: {
      width: "80%",
    },
    [theme.breakpoints.up(426)]: {
      width: "75%",
    },
    [theme.breakpoints.up(560)]: {
      width: "82%",
    },
    [theme.breakpoints.up('sm')]: {
      width: "80%",
    },
    [theme.breakpoints.up(820)]: {
      width: "82%",
    
    },
    [theme.breakpoints.up(912)]: {
      width: "70%",
    
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "70%",
     
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: "60%",
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
    height: "188px",borderTopLeftRadius:'5px',
    borderBottomLeftRadius:'5px',
    [theme.breakpoints.up('xs')]: {
      width: "100%",
      height: "187px",
      padding: "0px 0px 0px 4px",
      marginTop: "0px",
    },
    [theme.breakpoints.up(375)]: {
      padding: "0px 0px 0px 4px",
      marginTop:"0px",
      height:'187px'
    },
    
    [theme.breakpoints.between(425,'sm')]: {
      width: "100%",
      height: "187px",
    },
    
    [theme.breakpoints.between('sm', 'md')]: {
      width: "100%",
      height: "210px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "100%",
      height: "157px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: "100%",
      height: "198px"
    },
    [theme.breakpoints.up('xl')]: {
      width: "100%",
      height: "198px",
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
  linkTitle:{
    textDecoration: "none",
    // border:"1px solid black",
    [theme.breakpoints.between('sm', 'md')]: {
    },
    [theme.breakpoints.between('md', 'lg')]: {
    },
    [theme.breakpoints.between('lg', 'xl')]: {
    },
    [theme.breakpoints.up('xl')]: {

    },
  },
  title_div: {
    // border:"0.5px solid red",
    height: "35px",
    padding: "10px 0px 0px 0px",
    width:'100%', 
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: "0px 0px 0px 3px",
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: "0px 0px 0px 3px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "0px 0px 0px 3px",
    },
    [theme.breakpoints.up('lg')]: {
      padding: "3px",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "0px 0px 0px 3px",

    },

  },
  title: {
    color: "#333533",
    fontFamily: "Montserrat', sans-se",
    fontWeight: 500,
    fontSize: "14px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "normal",
    WebkitLineClamp: 2,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: "15px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "14px"
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "14px"
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "14px"
    },
  },
  author_div: {
    // border:"1px solid blue",
    padding: "10px 0px 0px 0px",
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: "0px 0px 0px 3px",
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: "10px 0px 0px 2px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "10px 0px 0px 2px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "10px 0px 0px 3px",
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
      fontSize: "13px"
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "13px"
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "14px"
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "14px"
    },

  },
  rating_div: {
    // border: "1px solid black",
    padding: "10px 0px 0px 0px",
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: "10px 0px 0px 3px",
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: "15px",
      padding: "5px 0px 0px 2px",
      marginRight:"0px"
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "14px",
      padding: "5px 0px 0px 2px",
      marginRight:"0px"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: "16px",
      padding: "10px 0px 0px 2px",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "10px 0px 0px 1px",
      fontSize: "16px"
    },

  },
  price_div: {
    // border: "1px solid green",
    padding: "10px 0px 10px 0px",
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: "5px 0px 5px 3px",
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: "5px 0px 5px 5px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "5px 0px 2px 2px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "10px 0px 10px 2px",
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
      fontSize: "16px"
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "16px"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: "17px"
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "17px"
    },
  },
  addtoCart_div: {
    // border: "1px solid black",
    alignItems:'end',
    display:'flex',
    width:'100%',
    "& .MuiCardActions-root": {
      padding: "0px 0px 0px 0px"
    },
    [theme.breakpoints.between('xs', 425)]: {
      padding: "0px 0px 0px 4px",
      marginTop:"0px",
      height:'61px'
    },
   
    [theme.breakpoints.between(425, 'sm')]: {
      padding: "0px 0px 0px 4px",
      marginTop:"0px",
      height:'61px'
    },
   
    [theme.breakpoints.between('sm', 'md')]: {
      padding: "0px 0px 0px 4px",
      marginTop:"0px",
        height:'80px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "0px 0px 0px 2px",
      marginTop:"0px",
      height:'30px',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "0px 0px 0px 3px",
      marginTop:"0px"
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
    "&.MuiButtonBase-root":{
      borderRadius:"2px"
    },
    "&:hover": {
      color: "black",
      backgroundColor: "white"
    },
    padding: "7px 5px",
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: "16px",
      padding: "0px 0px",
      width:"100%",
      height:"29px",
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: "16px",
      padding: "0px 0px",
      width:"100%",
      height:"39px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "12px",
      padding: "0px 0px",
      width:"126px",
      height:"29px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: "16px",
      padding: "0px 0px",
      width:"172px",
      height:"43px"
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "18px",
      padding: "0px 0px",
      height:"46px",
      width:"204px",
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