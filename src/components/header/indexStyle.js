import { makeStyles, styled } from "@material-ui/core/styles";
const useStylesIndex = makeStyles((theme) => ({
  root: {
    // border:"2px solid black",
    // width: "100%",
    // width: "95.7vw",
    display: "flex",
    justifyContent: "space-between",
    zIndex: 3,
    // backgroundColor: "#d22129",
    // borderColor: "#d22129",
    boxShadow:'none'
  },
  sign_out: {
    backgroundColor: "#ffffff",
    color: "#333533",
    fontSize: "10px",
    height: "25px",
    "&:hover": {
      color: "#d22129",
      backgroundColor: "white",
    }
  },
  icon: {
    fontSize: "20px",
    color: "white",
    width: "20px",
    margin: "auto",
    border: "1px solid pink",
  },
  chatNotificationContainer: {
    display: "flex",
    padding: "20px 0px 0px 0px",
    width: "25%",
    // border:"1px solid green",
    justifyContent: "flex-end",
    [theme.breakpoints.between('sm', 'md')]: {
      justifyContent: "center",
      padding: "14px 10px 12px 0px",
      width:"20%"
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "20px 0px 0px 0px",
      width: "20%",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "20px 0px 0px 0px",
      width: "25%",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "20px 0px 0px 0px",
      width: "25%",
    },

  },
  notificationMailIcon: {
    color: "#fff",
  },
  searchBarDiv: {
    // border:"1px solid #fff",
    position: "relative",
    width: "50%",
    display: "block",
    justifyContent: "center",
    padding: "17px 120px 0px 120px",
   
    [theme.breakpoints.between('sm', 'md')]: {
      padding: "15px 0px 0px 0px",
      width: "35%",
      "& .MuiInputBase-root": {
        marginLeft: "0px"
      }
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "13px 40px 0px 40px",
      width: "40%",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "13px 60px 0px 60px",
      width: "50%",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "17px 120px 0px 120px",
      width: "50%",
    },
  },
  searchBar: {
    padding: "0 15px",
    width: "480px",
    height: "40px",
    backgroundColor: "#ffffff",
    [theme.breakpoints.between('xs','sm')]: {
      width: "100%",
      height: "32px",
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: "100%",
      height: "32px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "100%",
      height: "32px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: "100%",
      height: "34px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "480px",
      height: "40px",
    },
    boxShadow: "  0 3px 10px rgb(0 0 0 / 0.2)",
    borderTopLeftRadius: (props) => (props.searchResult.length > 0 ? "5px" : "5px"),
    borderTopRightRadius: (props) => (props.searchResult.length > 0 ? "5px" : "5px"),
    borderBottomLeftRadius: (props) => (
      props.searchResult.length > 0
        || props.searchLoading ? "0px" : "5px"),
    borderBottomRightRadius: (props) => (
      props.searchResult.length > 0
        || props.searchLoading ? "0px" : "5px"),
    "& .MuiInputBase-root": {
      fontFamily: "Montserrat, sans-se",
      fontSize: "16px"
    }
  },
  searchBarMobile:{
    padding: "0 15px",
    width: "480px",
    height: "40px",
    backgroundColor: "#ffffff",
    [theme.breakpoints.between('xs','sm')]: {
      width: "100%",
      height: "32px",
      "&.MuiInputBase-root": {
        marginLeft: "0px"
      }
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: "100%",
      height: "32px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "100%",
      height: "32px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: "100%",
      height: "34px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "480px",
      height: "40px",
    },
    boxShadow: "  0 3px 10px rgb(0 0 0 / 0.2)",
    borderTopLeftRadius: (props) => (props.searchResult.length > 0 ? "5px" : "5px"),
    borderTopRightRadius: (props) => (props.searchResult.length > 0 ? "5px" : "5px"),
    borderBottomLeftRadius: (props) => (
      props.searchResult.length > 0
        || props.searchLoading ? "0px" : "5px"),
    borderBottomRightRadius: (props) => (
      props.searchResult.length > 0
        || props.searchLoading ? "0px" : "5px"),
    "& .MuiInputBase-root": {
      fontFamily: "Montserrat, sans-se",
      fontSize: "16px"
    }
  },
  headerThirdContainer: {
    // border:"1px solid black",
    justifyContent: "flex-start",
    width: "30%",
    padding: "0px 15px 0px 15px",
    height: "auto",
    display: "flex",
    gap: "5px",
    [theme.breakpoints.between('sm', 'md')]: {
      padding: "0px 5px 0px 5px",
      width: "25%",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "0px 10px 0px 10px",
      width: "30%",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "0px 15px 0px 15px",
      width: "30%",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "0px 15px 0px 15px",
      width: "30%",
    },
  },
  homeIconMainContainer: {
    // border:"1px solid black",
    width: "20%",
    display: "flex",
    justifyContent: "flex-start",
    padding: "4px 20px 0px 20px",
    [theme.breakpoints.between('sm', 'md')]: {
      width: "40%",
      padding: "4px 20px 0px 20px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "30%",
      padding: "8px 20px 0px 20px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "8px 20px 0px 20px",
      width: "20%",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "4px 20px 0px 20px",
      width: "20%",
    },
  },

  cartContainer: {
    display: "flex",
    justifyContent: "start",
    width: "15%",
    // border:"1px solid red",
    padding: "13px 5px 0px 0px",
    '&:hover .cartButton': {
      backgroundColor: 'transparent', // Set the hover background color to transparent
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: "13px 5px 0px 0px",
      justifyContent: "center",
      width: "15%",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "13px 0px 0px 0px",
      width: "13%",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "13px 0px 0px 0px",
      width: "15%",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "13px 5px 0px 0px",
      width: "15%",
    },
  },
  profile: {
    width: "19%",
    // border:"1px solid blue",
    padding: "12px 12px 0px 12px",
    [theme.breakpoints.between('sm', 'md')]: {
      padding: "12px 0px 0px 5px",
      width: "24%",
      // "&.css-4occqz":{
      //   margin:0
      // }
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "12px 0px 0px 0px",
      width: "25%",
      "&.css-4occqz":{
        margin:0
      }
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "12px 5px 0px 0px",
      width: "19%"
    },
    [theme.breakpoints.up('xl')]: {
      padding: "12px 12px 0px 12px",
      width: "19%"
    },
  },
  userName: {
    width: "35%",
    padding: "22px 5px 0px 0px",
    whiteSpace: 'nowrap',
    // border:"1px solid yellow",
    [theme.breakpoints.between('sm', 'md')]: {
      padding: "16px 0px 0px 3px",
      width: "fit-content",
      whiteSpace: 'nowrap',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "22px 0px 0px 3px",
      width: "35%",
      whiteSpace: 'nowrap',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "22px 0px 0px 15px",
      width: "35%",
      whiteSpace: 'nowrap',
    },
    [theme.breakpoints.up('xl')]: {
      backgroundColor: 'transparent',
      padding: "22px 5px 0px 0px",
      width: "35%",
      whiteSpace: 'nowrap',

    },
  },
  userNameText: {
    fontFamily: "Montserrat, sans-se",
    fontSize: "18px",
    color: "#fff",
    fontWeight: 500,
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: "12px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "12px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: "18px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "18px",

    },
  },
 
}));

export { useStylesIndex }