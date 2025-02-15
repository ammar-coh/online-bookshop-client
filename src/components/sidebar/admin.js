// import React, { useState, useEffect, useContext } from 'react'
// import { useSelector, useDispatch } from "react-redux";
// import { Link, useHistory } from "react-router-dom";
// import Button from "@material-ui/core/Button";
// import MenuItem from '@mui/material/MenuItem';
// import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
// import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
// import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
// import Divider from '@mui/material/Divider';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import Context from '../../context'
// import { clearChat } from '../../redux/actions/index'
// import { socket } from '../../socket'
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import { useStylesAdmin } from './style'

// function Admin() {
//     const {
//         roomID,
//         setCurrentChat,
//         setIsRoomActive,
//         selectedSideBarMenu,
//         setSelectedSideBarMenu,
//         setHomeSideBarActive,
//         activeSideBar,setActiveSideBar,
//         adminSideBarActive,
//         setAdminSideBarActive,
//         setProfileSideBarActive,
//         anchorElAdmin, setAnchorElAdmin,
//         setAnchorElHome,
//         setAnchorElProfile,
//         subMenuItemActiveState, setSubMenuItemActiveState,
//         setNavBarRoute,
//         setCurrentChatAvatar,
//         setSelectedSideBarMenuHome,
//         setBookClubMenuItem
//     } = useContext(Context);
//     const dispatch = useDispatch();
//     const classes = useStylesAdmin({ anchorElAdmin, activeSideBar, adminSideBarActive, subMenuItemActiveState , activeSideBar});
//     const handleClick = (event) => {
//         setAnchorElAdmin((previous) => !previous);
//     };
//     const handleClose = () => {
//         setAnchorElAdmin(false);
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
//         setAdminSideBarActive(panel)
//         setProfileSideBarActive(null)
//         setAnchorElHome(false)
//         setAnchorElProfile(false)
//         setSelectedSideBarMenuHome(null)
//         setBookClubMenuItem(null)
//     };
//     return (
//         <div>

//             <Button style={{ padding: "0px", textTransform: "none", width: "100%" }} onClick={handleClick}>
//                 <Accordion
//                     className={classes.Accordion}
//                     expanded={selectedSideBarMenu === 'admin'}
//                     onChange={handleChange('admin')}
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
//                         <AdminPanelSettingsIcon style={{ padding: " 0px 5px", fontSize: "35px" }} />
//                         <Typography style={{ padding: "8px 0px" }}>Admin</Typography>
//                     </AccordionSummary >
//                     <AccordionDetails>
//                         <MenuItem onClick={handleClose} disableRipple className={classes.menuItem_1}>
//                             <Button className={classes.button_1} onClick={() => {
//                                 dispatch(clearChat());
//                                 setIsRoomActive(null);
//                                 setCurrentChat("");
//                                 setCurrentChatAvatar("")
//                                 leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
//                                 setSubMenuItemActiveState('books')
//                                 setNavBarRoute("Book Section")
//                                 setActiveSideBar('books')
//                             }}>
//                                 <Link className={classes.link_1} to={{
//                                     pathname: "/books",
//                                 }}>
//                                     < LibraryBooksOutlinedIcon />
//                                     Books
//                                 </Link>
//                             </Button>
//                         </MenuItem>
//                         <MenuItem onClick={handleClose} disableRipple className={classes.menuItem_2} disabled={true}>
//                             <Button className={classes.button_2} onClick={() => {
//                                 dispatch(clearChat());
//                                 setIsRoomActive(null);
//                                 setCurrentChat("");
//                                 leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
//                                 setSubMenuItemActiveState('cat')
//                                 setActiveSideBar('cat')
//                             }}>
//                                 <InventoryOutlinedIcon />
//                                 Cateogory List
//                             </Button>
//                         </MenuItem>
//                         <Divider sx={{ my: 0.5 }} />
//                         <MenuItem onClick={handleClose} disableRipple className={classes.menuItem_3} disabled={true}>
//                             <Button className={classes.button_3} onClick={() => {
//                                 dispatch(clearChat());
//                                 setIsRoomActive(null);
//                                 setCurrentChat("");
//                                 leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
//                                 setSubMenuItemActiveState('author')
//                                 setActiveSideBar('author')
//                             }}>
//                                 <PortraitOutlinedIcon />
//                                 author
//                             </Button>
//                         </MenuItem>

//                     </AccordionDetails>
//                 </Accordion>
//             </Button>

//         </div>
//     )
// }

// export default Admin


import React, { useContext } from 'react';
import { List, ListItemButton, ListItemText, Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Context from '../../context';
import { clearChat } from '../../redux/actions/index';
import { socket } from '../../socket';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';

const adminMenuItems = [
    { label: "Books", route: "/books", icon: <LibraryBooksOutlinedIcon />, key: "books" },
    { label: "Category List", route: "#", icon: <InventoryOutlinedIcon />, key: "cat", disabled: true },
    { label: "Author", route: "#", icon: <PortraitOutlinedIcon />, key: "author", disabled: true }
];

const Admin = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.user_login.details);

    const {
        roomID,
        setCurrentChat,
        setIsRoomActive,
        setSelectedSideBarMenu,
        setActiveSideBar,
        setHomeSideBarActive,
        setAdminSideBarActive,
        setProfileSideBarActive,
        setAnchorElAdmin,
        setAnchorElProfile,
        setSelectedSideBarMenuHome,
        setBookClubMenuItem,
        setSubMenuItemActiveState,
        setNavBarRoute,
        setCurrentChatAvatar,
    } = useContext(Context);

    const leaveAllRooms = async (data) => {
        await socket.emit("leave_private_room", {
            roomID: data.roomID,
            userID: data.userID,
        });
    };

    const handleMenuClick = (key, label, route) => {
        leaveAllRooms({ roomID, userID: user?.user?.id });
        dispatch(clearChat());
        setIsRoomActive(null);
        setCurrentChat("");
        setCurrentChatAvatar("");
        setSubMenuItemActiveState(key);
        setNavBarRoute(label);
        setActiveSideBar(key);
        if (route !== "#") history.push(route);
    };

    return (
        <Box>
            <Box sx={{ px: '14px' }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", padding: "10px 0" }}>
                    Admin
                </Typography>
            </Box>
            <List>
                {adminMenuItems.map(({ label, route, key, disabled }) => (
                    <ListItemText
                        key={key}
                        sx={{
                            width: '100%',
                            px: '14px',
                            marginBottom: '0px',
                            '&:hover': {
                                background: '#eaeded',
                                cursor: disabled ? 'default' : 'pointer'
                            },
                            opacity: disabled ? 0.5 : 1
                        }}
                        onClick={!disabled ? () => handleMenuClick(key, label, route) : undefined}
                        primary={label}
                    />
                ))}
            </List>

        </Box>
    );
};

export default Admin;