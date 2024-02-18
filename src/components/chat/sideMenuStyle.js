import { makeStyles, styled } from "@material-ui/core/styles";
import Badge from '@mui/material/Badge';
const sideMenuStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gap: "5px 0px",
    // border: "1px solid red ",
    width: "100%",
    [theme.breakpoints.between('sm', 'md')]: {
      padding: "0px"
    },
    [theme.breakpoints.between('md', 'lg')]: {
      // padding:"5px"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      // padding:"5px"
    },
    [theme.breakpoints.up('xl')]: {
      // padding:"5px"
    },
  },

  userInfo: {
    display: "flex",
    padding: "20px 10px 10px 10px",
    gap: "15px",
    height: "auto",
    "& .css-2miw2m-MuiAvatar-root": {
      color: "#d22129"
    },
    background: '#f0f0f0',
    // border:"1px solid blue"

  },
  searchBar:{
    [theme.breakpoints.between('sm', 'md')]: {
    // border:"1px solid red",
        height:"25px"
    },
    [theme.breakpoints.between('md', 'lg')]: {
      height:"27px"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      height:"36px"
    },
    [theme.breakpoints.up('xl')]: {
      height:"36px"
    },
  },
  divider:{
    [theme.breakpoints.between('sm', 'md')]: {
          height:"25px",
          margin: 0.5
      },
      [theme.breakpoints.between('md', 'lg')]: {
        height: 28,
        margin: 0.5
      },
      [theme.breakpoints.between('lg', 'xl')]: {
      height: 28,
      margin: 0.5
      },
      [theme.breakpoints.up('xl')]: {
        height:28,
        margin: 0.5
      },
  },
  userAvatar: { color: "#d22129" },
  userName: {
    fontFamily: "Montserrat, sans-se",
    fontSize: "10px",
    width: "100%",
    fontWeight: 500,
    color: "#ffffff",

  },

  list: {
    display: "grid",
    // border: "1px solid black",
    width: "100%",
    [theme.breakpoints.between('sm', 'md')]: {
      width: "100%",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "100%"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: "100%"
    },
    [theme.breakpoints.up('xl')]: {
      width: "100%",
    },

  },

  userInfoList: {
    display: "flex",
    padding: "10px 0px 10px 4px",
    gap: "15px",
    marginRight: "auto",
    cursor: "pointer",
    // border: "1px solid red",
    [theme.breakpoints.between('sm', 'md')]: {
      width: "100%",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "100%"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: "100%"
    },
    [theme.breakpoints.up('xl')]: {
      width: "100%",
    },

  },
  userAvatarList: {
    // border: "1px solid blue",
    [theme.breakpoints.between('sm', 'md')]: {

    },
    [theme.breakpoints.between('md', 'lg')]: {

    },
    [theme.breakpoints.between('lg', 'xl')]: {

    },
    [theme.breakpoints.up('xl')]: {

    },
  },
  avatarList: {
    "&.css-1wlk0hk-MuiAvatar-root": {
      [theme.breakpoints.between('sm', 'md')]: {
        height: "35px",
        width: "35px"
      },
      [theme.breakpoints.between('md', 'lg')]: {
        height: "40px",
        width: "40px"
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        height: "40px",
        width: "40px"
      },
      [theme.breakpoints.up('xl')]: {
        height: "45px",
        width: "45px"
      },
    },

  },

  userNameList: {
    width: "100%",
    display: "flex",
    fontFamily: "Montserrat, sans-se",
    fontSize: "20px",
    // border: "1px solid green",
    padding: "15px",
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: "12px",
      padding: "0px 0px 0px 10px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "20px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "20px",
    },

  },
  button: {
    width: "100%",
    "&.MuiButton-root": {
      textTransform: "none"
    }
  },
  listButton: {
    width: "100%",
    "&.css-16ac5r2-MuiButtonBase-root-MuiListItemButton-root": {
      // border: "1px solid red",
      width: "100%",
      backgroundColor: 'none',
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: '#f5f6f6',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: "116px"
      },
      [theme.breakpoints.between('md', 'lg')]: {
        width: "100%"
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: "100%"

      },
      [theme.breakpoints.up('xl')]: {
        width: "100%"
      },
    },

    borderRadius: "5px",
  }
}))

export { sideMenuStyles }


const StyledBadge = styled(Badge)(({ theme, userListID, onlineID }) => {
  const isOnline = onlineID.some(user => user.id === userListID);
  return {
    '& .MuiBadge-badge': {
      backgroundColor: isOnline ? '#44b700' : '#e0e0e0',
      color: isOnline ? '#44b700' : '#e0e0e0',
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
  }
});
export { StyledBadge }

