import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CottageIcon from '@mui/icons-material/Cottage';
import Context from '../../context'
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import Divider from '@mui/material/Divider';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { clearChat } from '../../redux/actions/index'
import { socket } from '../../socket'
import RoofingIcon from '@mui/icons-material/Roofing';
import CategoryIcon from '@mui/icons-material/Category';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';
const useStyles = makeStyles({
    home_button: {
        "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#d22129"
        },
        "& .MuiButton-text": {
            padding: "6px 0px",
            "&:hover": {
                color: "#FFFFFF",
                backgroundColor: "#d22129"
            },
        },
        "& .MuiButton-label": {
            fontFamily: "Montserrat, sans-se",
            color: "#fff",
            "&:hover": {
                color: "#FFFFFF",
                backgroundColor: "#d22129"
            },
        },
    },
    homeMenu: {
        display: "none",
        transform: "none",
        transitionTimingFunction: "ease-in-out",
        transition: "0.3s",



    },
    homeMenu2: {
        display: "block",
        backgroundColor: "red",
        transform: (props) => (props.anchorEl ? "translateY(20%)" : "translateY(10%)"),
        transition: "0.25s",
        transitionTimingFnction: "ease-out",

        transform: "translateY(10%)",
        opacity: 1

    },
    icon: {
        fontSize: "20px",
        color: "#333533",
        width: "20%",
        border: "1px solid black"
    },
    Accordion: {
        padding: "10px 25px",
        width: "100%",
        "&.MuiAccordion-root": {
            backgroundColor: "#FFFFFF",
            color: "#333533",
            fontFamily: "Montserrat, sans-se",
            boxShadow: "none"



        },
    },
    AccordionSummary: {
        "&.MuiAccordionSummary-root": {
            width: "100%",
            backgroundColor:"#ffffff",
            color: (props) => (props.anchorElHome && props.homeSideBarActive != null ? "#d22129" : "#333533"),
            fontFamily: "Montserrat, sans-se",
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#FFFFFF"
            },

        },

    },
    AccordionDetails: {
        "&.MuiAccordionDetails-root": {
            width: "100%",
            backgroundColor: (props) => (props.anchorElHome && props.homeSideBarActive != null ? "#ffffff" : "#ffffff"),
            color: (props) => (props.anchorElHome && props.homeSideBarActive != null ? "#333533" : "#333533"),
            fontFamily: "Montserrat, sans-se",
            "&:hover": {
                color: "#333533",
                backgroundColor: "#ffffff"
            },

        },
    },
    KeyboardArrowRightIconDiv: {
        color: (props) => (props.anchorElHome && props.homeSideBarActive != null ? "#d22129" : "#333533"),

        "&:hover": {
            color: "#d22129",

        },
    },
    KeyboardArrowRightIcon: {
        "&:hover": {
            color: "#d22129",

        },
        "&.MuiAccordion-region": {
            "&:hover": {
                color: "#FFFFFF",
                backgroundColor: "#d22129"
            },
        },
        transform: (props) => (props.anchorElHome && props.homeSideBarActive != null ? "rotate(-90deg)" : "rotate(0deg)"),
    },
    home_text: {
        width: "100%",
        height: '34px',
        padding: "2px 130px 0px 0px",
        justifyItems: "start",
    },
    home_icon: {

    },
    home_page: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            color: (props) => (props.anchorElHome && props.homeSideBarActive != null ? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
            padding: "5px 15px"
        },

    },
    home_link: {
        textDecoration: "none",
        display: "flex",
        color: (props) => (props.anchorElHome && props.homeSideBarActive != null && props.subMenuItemActiveState == 'home_page' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
        width: "100%"
    },
    secondItem: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            color: (props) => (props.anchorElHome && props.homeSideBarActive != null && props.subMenuItemActiveState == 'book_club' ? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
            padding: "5px 15px"
        },
    },
    button_1: {
        textTransform: 'none',
        padding: "0px 0px",
        width: "100%",
        justifyContent: "start",
        color: (props) => (props.anchorElHome && props.homeSideBarActive != null ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
    },
    link_2: {
        textDecoration: "none",
        display: "flex",
        color: (props) => (props.anchorElHome && props.homeSideBarActive != null && props.subMenuItemActiveState == 'book_club' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
        width: "100%"
    },
    button_2: {
        textTransform: 'none',
        padding: "0px 0px",
        width: "100%",
        justifyContent: "start",
        color: (props) => (props.anchorElHome && props.homeSideBarActive != null && props.subMenuItemActiveState == 'book_club' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
    }
})
function Home() {
    const dispatch = useDispatch();
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
        homeSideBarActive,
        setHomeSideBarActive,
        setAdminSideBarActive,
        setProfileSideBarActive,
        anchorElHome, setAnchorElHome,
        setAnchorElAdmin,
        setAnchorElProfile,
        subMenuItemActiveState, setSubMenuItemActiveState

    } = useContext(Context);
    const classes = useStyles({ anchorElHome, homeSideBarActive, subMenuItemActiveState });
    const handleClick = (event) => {
        setAnchorElHome((previous) => !previous);
    };
    const handleClose = () => {
        setAnchorElHome(false);
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
        setHomeSideBarActive(panel)
        setAdminSideBarActive(null)
        setProfileSideBarActive(null)
        setAnchorElAdmin(false)
        setAnchorElProfile(false)
    };
    return (
        <div>
            <Button style={{ padding: "0px", textTransform: "none", width: "100%" }} onClick={handleClick}>
                <Accordion
                    className={classes.Accordion}
                    expanded={selectedSideBarMenu === 'home'}
                    onChange={handleChange('home')}
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
                        <RoofingIcon style={{padding:" 0px 5px", fontSize:"35px"}}/>
                        <Typography style={{ padding:"8px 0px"}}>Home</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.AccordionDetails}>
                        <div >
                            <MenuItem className={classes.home_page} onClick={handleClose} disableRipple>
                                {" "}
                                <Button
                                    className={classes.button_1}
                                    onClick={() => {
                                        dispatch(clearChat());
                                        setIsActive(null);
                                        setCurrentChat("");
                                        leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
                                        setSubMenuItemActiveState('home_page')
                                    }}
                                >
                                    <Link className={classes.home_link} to="/">
                                        {" "}
                                        <CottageIcon />
                                        Home page
                                    </Link>
                                </Button>
                            </MenuItem>
                            <MenuItem className={classes.secondItem} onClick={handleClose} disableRipple>
                                <Button className={classes.button_2} onClick={() => {
                                    dispatch(clearChat());
                                    setIsActive(null);
                                    setCurrentChat("");
                                    leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
                                    setSubMenuItemActiveState('book_club')
                                }}>
                                    <Link className={classes.link_2} to={{
                                        pathname: "/chatroom",
                                    }}>
                                        <GroupsIcon />
                                        Book Club
                                    </Link>
                                </Button>
                            </MenuItem>

                        </div>
                    </AccordionDetails>

                </Accordion>
            </Button>
        </div >
    )
}

export default Home