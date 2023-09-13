import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuItem from '@mui/material/MenuItem';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Context from '../../context'
import { clearChat } from '../../redux/actions/index'
import { socket } from '../../socket'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const useStyles = makeStyles({
   
    Accordion: {
        "&.MuiAccordion-root": {
            width: '100%',
            backgroundColor: "#FFFFFF",
            color: "#333533",
            padding: "10px 25px",
            boxShadow: "none"
        },
    },
    AccordionSummary: {
        "&.MuiAccordionSummary-root": {
            color: (props) => (props.anchorElProfile && props.profileSideBarActive != null ? "#d22129" : "#333533"),
            fontFamily: "Montserrat, sans-se",
            width: '100%',
            backgroundColor: "#FFFFFF",
            "&:hover": {
                color: "#d22129",
            },
        }
    },
    KeyboardArrowRightIconDiv: {
        color: (props) => (props.anchorElProfile && props.profileSideBarActive != null ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#FFFFFF",

        },
    },
    KeyboardArrowRightIcon: {

        transform: (props) => (props.anchorElProfile && props.profileSideBarActive != null ? "rotate(-90deg)" : "rotate(0deg)"),
    },
    button_1: {
        textTransform: 'none',
        padding: "0px 0px",
        width: "100%",
        justifyContent: "start",
        color: (props) => (props.anchorElProfile && props.ProfileSideBarActive != null && props.subMenuItemActiveState == 'profile' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
    },
    menuItem_1: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            color: (props) => (props.anchorElProfile && props.profileSideBarActive != null && props.subMenuItemActiveState == 'profile' ? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
            padding: "5px 15px"
        },
    },

    link_1: {
        textDecoration: "none",
        display: "flex",
        color: (props) => (props.anchorElProfile && props.profileSideBarActive != null && props.subMenuItemActiveState == 'profile' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
        width: "100%"
    },
    profile_text: {
        width: "100%",
        height: '34px',
        padding: "2px 80px 0px 0px",
    },

})
function Profile() {
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
        setAdminSideBarActive,
        setAnchorElHome,
        setAnchorElAdmin,
        profileSideBarActive, setProfileSideBarActive,
        anchorElProfile, setAnchorElProfile,
        subMenuItemActiveState, setSubMenuItemActiveState

    } = useContext(Context);
    const dispatch = useDispatch();

    const classes = useStyles({ anchorElProfile, profileSideBarActive, subMenuItemActiveState });
    const handleClick = (event) => {
        setAnchorElProfile((previous) => !previous);
    };
    const handleClose = () => {
        setAnchorElProfile(null);
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
        setAdminSideBarActive(null)
        setProfileSideBarActive(panel)
        setAnchorElAdmin(false)
        setAnchorElHome(false)
    };
    return (
        <div>
            <Button style={{ padding: "0px", textTransform: "none", width: "100%" }} onClick={handleClick}>
                <Accordion
                    className={classes.Accordion}
                    expanded={selectedSideBarMenu === 'profile'}
                    onChange={handleChange('profile')}
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
                          <AccountCircleIcon style={{ padding: " 0px 5px", fontSize: "35px" }} />
                        <Typography style={{ padding: "8px 0px" }}>My Profile</Typography>
                       
                    </AccordionSummary>
                    <AccordionDetails>
                        <MenuItem onClick={handleClose} disableRipple className={classes.menuItem_1}>
                            <Button className={classes.button_1} onClick={() => {
                                dispatch(clearChat());
                                setIsActive(null);
                                setCurrentChat("");
                                leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
                                setSubMenuItemActiveState('profile')
                            }}>
                                    <Link className={classes.link_1} to={{
                                    pathname: "/",
                                }}>
                                < LibraryBooksOutlinedIcon />
                                Profile
                                </Link>
                            </Button>
                        </MenuItem>
                    </AccordionDetails>

                </Accordion>
            </Button>
        </div>
    )
}

export default Profile