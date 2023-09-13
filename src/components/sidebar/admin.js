import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuItem from '@mui/material/MenuItem';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import Divider from '@mui/material/Divider';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Context from '../../context'
import { clearChat } from '../../redux/actions/index'
import { socket } from '../../socket'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const useStyles = makeStyles({
    admin_button: {
        textTransform: 'none',
        backgroundColor: "transparent",
        width: "100%",
        justifyContent: "start",
        "& .MuiButton-text": {
            padding: "6px 0px"
        },
        "& .MuiButton-label": {
            fontFamily: "Montserrat, sans-se",
            color: "#fff",
        },
    },
    Accordion: {
        "&.MuiAccordion-root": {
            width: "100%",
            backgroundColor: "#FFFFFF",
            color: "#333533",
            padding: "10px 25px",
            boxShadow: "none"
        },
    },
    AccordionSummary: {
        "&.MuiAccordionSummary-root": {
            backgroundColor: "#FFFFFF",
            color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null ? "#d22129" : "#333533"),
            fontFamily: "Montserrat, sans-se",
            width: "100%",
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
        }
    },
    KeyboardArrowRightIconDiv: {
        color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null ? "#d22129" : "#333533"),

        "&:hover": {
            color: "#d22129",

        },
    },
    KeyboardArrowRightIcon: {

        transform: (props) => (props.anchorElAdmin && props.adminSideBarActive != null ? "rotate(-90deg)" : "rotate(0deg)"),
    },
    button_1: {
        textTransform: 'none',
        padding: "0px 0px",
        width: "100%",
        justifyContent: "start",
        color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'books' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
    },
    menuItem_1: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'books' ? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
            padding: "5px 15px"
        },
    },
    button_2: {
        textTransform: 'none',
        padding: "0px 0px",
        width: "100%",
        justifyContent: "start",
        color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'cat' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
    },
    menuItem_2: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'cat' ? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
            padding: "5px 15px"
        },
    },
    button_3: {
        textTransform: 'none',
        padding: "0px 0px",
        width: "100%",
        justifyContent: "start",
        color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'author' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },

    },
    menuItem_3: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'author' ? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
            padding: "5px 15px"
        },
    },
    admin_text: {
        // border:"1px solid white",
        width: "100%",
        height: '34px',
        padding: "2px 120px 0px 0px",
        justifyItems: "start",
    },
    link_1: {
        textDecoration: "none",
        display: "flex",
        color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'books' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
        width: "100%"
    },
    link_2: {
        textDecoration: "none",
        display: "flex",
        color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'cat' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
        width: "100%"
    },
    link_3: {
        textDecoration: "none",
        display: "flex",
        color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'author' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
        width: "100%"
    },
    admin_icon: {
    }
})
function Admin() {
    const {
        roomID,
        setRoomID,
        currentChat,
        setCurrentChat,
        isActive,
        setIsActive,
        recepient_status,
        notification_open,
        setNotificationOpen,
        setRecepientId,
        selectedSideBarMenu,
        setSelectedSideBarMenu,
        setHomeSideBarActive,
        adminSideBarActive,
        setAdminSideBarActive,
        setProfileSideBarActive,
        anchorElAdmin, setAnchorElAdmin,
        setAnchorElHome,
        setAnchorElProfile,
        subMenuItemActiveState, setSubMenuItemActiveState
    } = useContext(Context);
    const dispatch = useDispatch();
    const classes = useStyles({ anchorElAdmin, adminSideBarActive, subMenuItemActiveState });
    const handleClick = (event) => {
        setAnchorElAdmin((previous) => !previous);
    };
    const handleClose = () => {
        setAnchorElAdmin(false);
    };
    const user = useSelector((state) => state.user_login.details);

    const leaveAllRooms = async (data) => {

        await socket.emit("leave_private_room", {
            roomID: data.roomID,
            userID: data.userID,
        });
    }
    const handleChange = (panel) => (event, isSelected) => {
        setSelectedSideBarMenu(isSelected ? panel : null);
        setHomeSideBarActive(null)
        setAdminSideBarActive(panel)
        setProfileSideBarActive(null)
        setAnchorElHome(false)
        setAnchorElProfile(false)
    };
    return (
        <div>

            <Button style={{ padding: "0px", textTransform: "none", width: "100%" }} onClick={handleClick}>
                <Accordion
                    className={classes.Accordion}
                    expanded={selectedSideBarMenu === 'admin'}
                    onChange={handleChange('admin')}
                >
                    <AccordionSummary
                        expandIcon={

                            <div className={classes.KeyboardArrowRightIconDiv}>
                                < KeyboardArrowRightIcon className={classes.KeyboardArrowRightIcon} />
                            </div>
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={classes.AccordionSummary}

                    >
                        <AdminPanelSettingsIcon style={{ padding: " 0px 5px", fontSize: "35px" }} />
                        <Typography style={{ padding: "8px 0px" }}>Admin</Typography>
                    </AccordionSummary >
                    <AccordionDetails>
                        <MenuItem onClick={handleClose} disableRipple className={classes.menuItem_1}>
                            <Button className={classes.button_1} onClick={() => {
                                dispatch(clearChat());
                                setIsActive(null);
                                setCurrentChat("");
                                leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
                                setSubMenuItemActiveState('books')
                            }}>
                                <Link className={classes.link_1} to={{
                                    pathname: "/",
                                }}>
                                    < LibraryBooksOutlinedIcon />
                                    Books
                                </Link>
                            </Button>
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple className={classes.menuItem_2}>
                            <Button className={classes.button_2} onClick={() => {
                                dispatch(clearChat());
                                setIsActive(null);
                                setCurrentChat("");
                                leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
                                setSubMenuItemActiveState('cat')
                            }}>
                                <InventoryOutlinedIcon />
                                Cateogory List
                            </Button>
                        </MenuItem>
                        <Divider sx={{ my: 0.5 }} />
                        <MenuItem onClick={handleClose} disableRipple className={classes.menuItem_3}>
                            <Button className={classes.button_3} onClick={() => {
                                dispatch(clearChat());
                                setIsActive(null);
                                setCurrentChat("");
                                leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
                                setSubMenuItemActiveState('author')
                            }}>
                                <PortraitOutlinedIcon />
                                author
                            </Button>
                        </MenuItem>

                    </AccordionDetails>
                </Accordion>
            </Button>

        </div>
    )
}

export default Admin