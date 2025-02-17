import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useStylesCart } from './cartStyle';
import Button from "@material-ui/core/Button";
import { clearChat } from '../../redux/actions/index'
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Checkout from '../../checkout';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#d22129',
      contrastText: '#ffffff',
    },
  },
});

function Cart({
  setSelectedSideBarMenu,
  setHomeSideBarActive,
  setSelectedSideBarMenuHome,
  setAdminSideBarActive,
  setProfileSideBarActive,
  setAnchorElHome,
  setAnchorElAdmin,
  setAnchorElProfile,
  setSubMenuItemActiveState,
  setBookClubMenuItem,
  setNavBarRoute,
  setActiveSideBar,
  setIsRoomActive,
  roomID,
  setCurrentChatAvatar,
  setCurrentChat,
  leaveAllRooms }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user_login.details);
  const classes = useStylesCart();
  const counts = useSelector((state) => state.checkout);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => {
    dispatch(clearChat());
    setIsRoomActive?.(null);
    setCurrentChat?.("");
    setCurrentChatAvatar?.("");
    leaveAllRooms?.({ roomID: roomID, userID: user?.user?.id });
    setIsCartOpen(true);
    setSelectedSideBarMenu?.(null);
    setHomeSideBarActive?.(null);
    setSelectedSideBarMenuHome?.(null);
    setAdminSideBarActive?.(null);
    setProfileSideBarActive?.(null);
    setAnchorElHome?.(null);
    setAnchorElAdmin?.(null);
    setAnchorElProfile?.(null);
    setSubMenuItemActiveState?.(null);
    setBookClubMenuItem?.(null);
    setActiveSideBar?.(null);
    setNavBarRoute?.('Cart');
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <Button
          className={classes.cartContainerButton}
          onClick={handleCartOpen}
        >
          <span className={classes.icon}>
            <ThemeProvider theme={theme}>
              <Badge
                badgeContent={counts.totalItems}
                color="primary"
                sx={{
                  '& .MuiBadge-badge': {
                    fontSize: {
                      xs:'10px',
                      sm:'10px',
                      md: '10px'
                    }
                  }
                }}
              >
                <ShoppingCartOutlinedIcon className={classes.cartIcon} />
              </Badge>
            </ThemeProvider>
          </span>
        </Button>
      </div>

      <Checkout 
        open={isCartOpen} 
        onClose={handleCartClose}
      />
    </>
  );
}

Cart.propTypes = {
  setSelectedSideBarMenu: PropTypes.func,
  setHomeSideBarActive: PropTypes.func,
  setSelectedSideBarMenuHome: PropTypes.func,
  setAdminSideBarActive: PropTypes.func,
  setProfileSideBarActive: PropTypes.func,
  setAnchorElHome: PropTypes.func,
  setAnchorElAdmin: PropTypes.func,
  setAnchorElProfile: PropTypes.func,
  setSubMenuItemActiveState: PropTypes.func,
  setBookClubMenuItem: PropTypes.func,
  setNavBarRoute: PropTypes.func,
  setActiveSideBar: PropTypes.func,
  setIsRoomActive: PropTypes.func.isRequired,
  roomID: PropTypes.string,
  setCurrentChatAvatar: PropTypes.func.isRequired,
  setCurrentChat: PropTypes.func.isRequired,
  leaveAllRooms: PropTypes.func.isRequired
};

export default Cart;
