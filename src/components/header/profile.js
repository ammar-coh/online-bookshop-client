import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { clearChat, sign_out_saga } from "../../redux/actions/index"; //"../src/redux/actions/index";
import Context from "../../context";
import { socket } from "../../socket";
import Button from "@material-ui/core/Button";
import { useStylesProfile } from './style'
import sample from '../../Assets/867d7f81-d66f-465c-8bb2-17a212dd9919.jpg'

import {
    sign_in_reducer,
    resetCart,
} from "../../redux/actions"
import { StyledBadge } from './style'
import Grid from '@mui/material/Grid';
export default function AccountMenu({ profileUpdate, setProfileUpdate }) {
    const userLocal = JSON.parse(localStorage.getItem("userInfo"))
    const classes = useStylesProfile();
    const history = useHistory();
    const dispatch = useDispatch();
    const {
        roomID,
        setCurrentChat,
        setIsActive,
        setSubMenuItemActiveState,
        setNavBarRoute,
        setCurrentChatAvatar
    } = useContext(Context);
    const user = useSelector((state) => state.user_login.details);
    const leaveAllRooms = async (data) => {
        await socket.emit("leave_private_room", {
            roomID: data.roomID,
            userID: data.userID,
        });
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div style={{ padding: "0px" }} >
            <Box sx={{ display: 'flex' }}
            >

                <Tooltip title="Account settings" style={{ padding: "0px" }}>
                    <IconButton
                        onClick={handleClick}
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        style={{ padding: "0px" }}
                    >
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar sizes='large'
                                sx={{
                                    fontSize: '64px',
                                }} src={userLocal.imageURL ? userLocal.imageURL : sample} />
                        </StyledBadge>
                    </IconButton>
                </Tooltip>


            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose} className={classes.profileMenuItem}>
                    <Link className={classes.link_1} to={{
                        pathname: "/profile",
                    }}>
                        <Button className={classes.profielButton} onClick={() => {
                            dispatch(clearChat());
                            setIsActive(null);
                            setCurrentChat("");
                            setCurrentChatAvatar("")
                            leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
                            setSubMenuItemActiveState('profile')
                            setNavBarRoute("Profile")
                        }}>

                            <Avatar />Profile

                        </Button>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} disabled={true}>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} disabled={true}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleClose} disabled={true}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem className={classes.logutMenuItem} onClick={handleClose}>
                    <Button
                        className={classes.logutButton}
                        size="small"
                        startIcon={
                            <ListItemIcon className={classes.logoutIcon}>
                                <Logout fontSize="small" />
                            </ListItemIcon>}
                        onClick={() => {
                            leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
                            // dispatch(sign_in_reducer({}));
                            dispatch(resetCart());
                            localStorage.removeItem("authorization");
                            localStorage.removeItem("cart");
                            localStorage.removeItem("for_reducer");
                            localStorage.removeItem("roomID")
                            dispatch(clearChat());
                            setIsActive(null)
                            dispatch(clearChat());
                            setCurrentChat("")
                            setCurrentChatAvatar('')
                            dispatch(sign_out_saga(user))
                            history.push("/login_page");
                        }}
                    >

                        <span className={classes.logoutText}>
                            Logout
                        </span>
                    </Button>

                </MenuItem>
            </Menu>
        </div>
    );
}