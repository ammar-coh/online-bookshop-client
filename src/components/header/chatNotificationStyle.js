import { makeStyles, styled } from "@material-ui/core/styles";

const useStylesChatNotification = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.between('sm', 'md')]: {
      width: "100%"
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "100%"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: "100%"
    },
    [theme.breakpoints.up('xl')]: {
      width: "100%",
      padding: "0px 0px 0px 40px"
    },
  },
  chatNotification: {},
  notificationMailIcon: {
    color: "#fff",
    fontSize: "1.5rem",
    "&.MuiSvgIcon-root ": {
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: "18px",
      },
      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: "1.5rem",
      },
    },
  },
  notification_badge: {
    width: "100%",
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
      fontWeight: 700,
      fontFamily: "Montserrat, sans-se",
    },
    "& .css-1phucj-MuiTypography-root": {
      fontSize: "15px",
      fontFamily: "Montserrat, sans-se",
      color: "#536471",
    }
  },
  button_1: {
    // border: "1px solid #fff",
    justifyContent: 'end',
    padding: "4px 0px",
    "&.MuiButtonBase-root": {
      '&:hover': {
        backgroundColor: 'transparent', // Set the hover background color to transparent
      },
      [theme.breakpoints.between('sm', 'md')]: {
        minWidth: "100%",
        justifyContent: "center"
      },
      [theme.breakpoints.between('md', 'lg')]: {
        minWidth: "100%",
        justifyContent: "center"
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        justifyContent: 'center',
      },
      [theme.breakpoints.up('xl')]: {
        justifyContent: 'end',
      },
    }
  }
}));
export { useStylesChatNotification }