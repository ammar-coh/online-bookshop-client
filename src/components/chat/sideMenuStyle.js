import { makeStyles, styled } from "@material-ui/core/styles";
import Badge from '@mui/material/Badge';
const sideMenuStyles = makeStyles({
  root: {
    display: "grid",
    gap: "5px 0px",
    // border: "1px solid red "
  },

  userInfo: {
    display: "flex",
    padding: "20px 10px 10px 10px",
    gap: "15px",
    // backgroundColor: "#f0f2f5",
    height: "auto",
    "& .css-2miw2m-MuiAvatar-root": {
      color: "#d22129"
    },
    background: '#f0f0f0'

  },
  userAvatar: { color: "#d22129" },
  userName: {
    fontFamily: "Montserrat, sans-se",
    fontSize: "10px",
    width: "100%",
    fontWeight: 500,
    color: "#ffffff"
  },

  list: {
    display: "grid",
    // border: "1px solid black",
  },

  userInfoList: {
    display: "flex",
    padding: "10px 0px 10px 4px",
    gap: "15px",
    marginRight: "auto",
    cursor: "pointer",
    // border: "1px solid black",

  },
  userAvatarList: {
  },
  userNameList: {
    width: "100%",
    display: "flex",
    fontFamily: "Montserrat, sans-se",
    fontSize: "20px",
    // border:"1px solid black",
    padding: "15px",

  },
  button: {
    width: "100%",
    "&.MuiButton-root": {
      textTransform: "none"
    }
  },
  listButton: {
    "&.css-16ac5r2-MuiButtonBase-root-MuiListItemButton-root": {
      backgroundColor: 'none',
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: '#f5f6f6',
      },
    },

    borderRadius: "5px",
  }
})

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

