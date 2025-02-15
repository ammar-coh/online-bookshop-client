// import React, { useState, useEffect, useContext } from 'react'
// import { useSelector, useDispatch } from "react-redux";
// import { Link, useHistory } from "react-router-dom";
// import Button from "@material-ui/core/Button";
// import MenuItem from '@mui/material/MenuItem';
// import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import Context from '../../context'
// import { clearChat } from '../../redux/actions/index'
// import { socket } from '../../socket'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { useStylesProfile } from './style'

// function ProfileSide() {
//     const {
//         roomID, setCurrentChat,
//         setIsRoomActive, selectedSideBarMenu,
//         setSelectedSideBarMenu, setHomeSideBarActive,
//         activeSideBar,setActiveSideBar,
//         setAdminSideBarActive, setAnchorElHome,
//         setAnchorElAdmin, profileSideBarActive, setProfileSideBarActive,
//         anchorElProfile, setAnchorElProfile,
//         subMenuItemActiveState, setSubMenuItemActiveState,
//         setNavBarRoute,
//         setCurrentChatAvatar,
//         setSelectedSideBarMenuHome,
//         setBookClubMenuItem
//     } = useContext(Context);
//     const dispatch = useDispatch();

//     const classes = useStylesProfile({ anchorElProfile, activeSideBar, profileSideBarActive, subMenuItemActiveState });
//     const handleClick = (event) => {
//         setAnchorElProfile((previous) => !previous);
//     };
//     const handleClose = () => {
//         setAnchorElProfile(null);
//     };
//     const user = useSelector((state) => state.user_login.details);

//     const leaveAllRooms = async (data) => {

//         await socket.emit("leave_private_room", {
//             roomID: data.roomID,
//             userID: data.userID,
//         });
//     }
//     const handleChange = (panel) => (event, isSelected) => {
//         setSelectedSideBarMenu(isSelected ? panel : null);
//         setHomeSideBarActive(null)
//         setAdminSideBarActive(null)
//         setProfileSideBarActive(panel)
//         setAnchorElAdmin(false)
//         setAnchorElHome(false)
//         setSelectedSideBarMenuHome(null)
//         setBookClubMenuItem(null)
//     };
//     return (
//         <div>
//             <Button style={{ padding: "0px", textTransform: "none", width: "100%" }} onClick={handleClick}>
//                 <Accordion
//                     className={classes.Accordion}
//                     expanded={selectedSideBarMenu === 'profile'}
//                     onChange={handleChange('profile')}
//                 >
//                     <AccordionSummary
//                         expandIcon={

//                             <div className={classes.KeyboardArrowRightIconDiv}>
//                                 < KeyboardArrowRightIcon className={classes.KeyboardArrowRightIcon} />
//                             </div>

//                         }
//                         aria-controls="panel1a-content"
//                         id="panel1a-header"
//                         className={classes.AccordionSummary}
//                     >
//                         <AccountCircleIcon style={{ padding: " 0px 5px", fontSize: "35px" }} />
//                         <Typography style={{ padding: "8px 0px" }}>My Profile</Typography>

//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <MenuItem onClick={handleClose} disableRipple className={classes.menuItem_1}>
//                             <Button className={classes.button_1} onClick={() => {
//                                 dispatch(clearChat());
//                                 setIsRoomActive(null);
//                                 setCurrentChat("");
//                                 setCurrentChatAvatar("")
//                                 leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
//                                 setSubMenuItemActiveState('profile')
//                                 setNavBarRoute("Profile")
//                                 setActiveSideBar('profile')
//                             }}>
//                                 <Link className={classes.link_1} to={{
//                                     pathname: "/profile",
//                                 }}>
//                                     < LibraryBooksOutlinedIcon />
//                                     Profile
//                                 </Link>
//                             </Button>
//                         </MenuItem>
//                     </AccordionDetails>

//                 </Accordion>
//             </Button>
//         </div>
//     )
// }

// export default ProfileSide


import React, { useContext } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Box, List, ListItemText, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import Context from '../../context';
import { clearChat } from '../../redux/actions/index';
import { socket } from '../../socket';

function ProfileSide() {
    const {
        roomID, setCurrentChat,
        setIsRoomActive, setActiveSideBar,
        setNavBarRoute, setCurrentChatAvatar,
        setSubMenuItemActiveState
    } = useContext(Context);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user_login.details);

    const leaveAllRooms = async (data) => {
        await socket.emit("leave_private_room", {
            roomID: data.roomID,
            userID: data.userID,
        });
    };

    const handleProfileClick = () => {
        dispatch(clearChat());
        setIsRoomActive(null);
        setCurrentChat("");
        setCurrentChatAvatar("");
        leaveAllRooms({ roomID: roomID, userID: user?.user?.id });
        setSubMenuItemActiveState('profile');
        setNavBarRoute("Profile");
        setActiveSideBar('profile');
    };

    return (
        <Box>
            <Box sx={{ px: '14px' }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", padding: "10px 0" }}>
                    My Profile
                </Typography>
            </Box>
            <List>
                <ListItemText
                    sx={{
                        width: '100%',
                        px: '14px',
                        marginBottom: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        '&:hover': {
                            background: '#eaeded',
                            cursor: 'pointer'
                        }
                    }}
                    onClick={handleProfileClick}
                    primary={
                        <Link to="/profile" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
                           
                            <Typography sx={{ ml: 1 }}>Profile</Typography>
                        </Link>
                    }
                />
            </List>
        </Box>
    );
}

export default ProfileSide;
