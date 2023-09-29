import { makeStyles, styled  } from "@material-ui/core/styles";
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
export {StyledBadge}

const useStylesIndex = makeStyles({
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      zIndex: 3,
      height: "65px",
      backgroundColor: "#fbfcff"
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
      padding: "14px 0px 0px 0px",
      width: "25%",
      justifyContent: "flex-end",
  
    },
    notificationMailIcon: {
      color: "#777d74",
    },
    searchBarDiv: {
      width: "50%",
      display: "flex",
      justifyContent: "center",
      // border: "2px solid blue",
      padding: "10px 120px 10px 120px",
    },
    searchBar: {
      padding: "0 15px",
      width: "480px",
      backgroundColor: "#ffffff",
      boxShadow: "  0 3px 10px rgb(0 0 0 / 0.2)",
      borderRadius: "5px",
      "& .css-yz9k0d-MuiInputBase-input": {
        fontFamily: "Montserrat, sans-se",
        fontSize: "16px"
      }
    },
    headerThirdContainer: {
      justifyContent: "flex-start",
      width: "30%",
      padding: "0px 15px 10px 15px",
      height: "auto",
      display: "flex",
      // border: "2px solid green",
    },
    homeIconMainContainer: {
      width: "20%",
      display: "flex",
      justifyContent: "flex-start",
      padding: "4px 20px 0px 20px",
    },
    cartContainer: {
      display: "flex",
      justifyContent: "dtart",
      width: "15%",
      padding: "12px 5px 0px 0px",
      '&:hover .cartButton': {
        backgroundColor: 'transparent', // Set the hover background color to transparent
      },
    },
    profile: {
      width: "19%",
      padding: "2px 0px 0px 0px"
    },
    userName: {
      width: "35%",
      padding: "14px 5px 0px 0px",
    }
  });

  export {useStylesIndex}

const useStylesHeaderNavTitle = makeStyles({
    root: {
        width: "100%",
        padding: "0px 5px"
    },
    title: {
        fontFamily: "Montserrat, sans-se",
        color: "#11141b",
        fontWeight: 500,
        fontFamily: "Roboto,sans-serif",
        textAlign: "start",
        lineHeight: 1.5,
        fontSize: "19.2px"
    },
    breadcrumb: {
        fontFamily: "Montserrat, sans-se",
        color: "#11141b",
        fontWeight: 500,
        textAlign: "center",
        padding: "0px"
    },
    link: {
        textDecoration: "none",
        fontFamily: "Montserrat, sans-se",
        fontSize: "14px",
        color: "#d22129",
        padding: "0px 0px 5px 0px",
    }



});
export { useStylesHeaderNavTitle }

const useStylesProfile = makeStyles({
    logutMenuItem: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            padding: "0px 5px"
        },
    },
    logutButton: {
        width: "100%",
        textTransform: "none",
        justifyContent: "start",
        "&:hover ": {
            color: "#FFFFFF",
            backgroundColor: "#42a5f5"
        },
    },
    logoutIcon: {
        padding:"0px 0px 0px 12px",
        "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#42a5f5"
        },
    },
    logoutText: {
        fontSize: "16px",
    },
    profileMenuItem:{
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            padding: "0px 5px"
        },
    },
    profielButton:{
        width: "100%",
        textTransform: "none",
        fontSize:"16px",
        justifyContent: "start",
        "&:hover ": {
            color: "#FFFFFF",
            backgroundColor: "#42a5f5"
        },
    },
    link_1:{
        width:"100%",
        display:"flex",
        textDecoration: "none",
        fontSize:"16px",
        fontFamily: "Montserrat, sans-se",
        color:"#333533",
        "&:hover ": {
            color: "#FFFFFF",
            backgroundColor: "#42a5f5"
        },
        borderRadius:"5px"
    }
})
export { useStylesProfile }

const useStylesChatNotification = makeStyles({
    root: {
    },
    chatNotification: {},
    notificationMailIcon: { color: "#777d74",
  fontSize:"120px" },
    notification_badge: { width: "100%",
   },
    notification_list: {
      position: "absolute",
      zIndex: 9999,
      width: "19%",
      "& .css-h4y409-MuiList-root": { display: "grid", },
    },
    button: {
      width: "100%",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "rgb (247 ,249 249)",
        color: "#333533"
      },
      "& .css-10hburv-MuiTypography-root": {
        fontSize: "15px",
        fontWeight:700,
        fontFamily: "Montserrat, sans-se",
      },
      "& .css-1phucj-MuiTypography-root":{
        fontSize: "15px",
        fontFamily: "Montserrat, sans-se",
        color:"#536471",
      }
    },
    button_1:{
      justifyContent:'end',
      padding:"4px 0px",
      '&:hover': {
        backgroundColor: 'transparent', // Set the hover background color to transparent
      },
    }
  });

  export {useStylesChatNotification}