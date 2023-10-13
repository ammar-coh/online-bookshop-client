import React, { useContext, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuItem from '@mui/material/MenuItem';
import CottageIcon from '@mui/icons-material/Cottage';
import Context from '../../context'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { clearChat } from '../../redux/actions/index'
import { socket } from '../../socket'
import RoofingIcon from '@mui/icons-material/Roofing';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';
import Grid from '@mui/material/Grid';
import {useStylesHome} from './style'
function Home() {
    const dispatch = useDispatch();
    const {
        roomID,
        setCurrentChat,
        setIsRoomActive,
        selectedSideBarMenu,
        setSelectedSideBarMenu,
        activeSideBar,
        setActiveSideBar,
        homeSideBarActive,
        setHomeSideBarActive,
        setAdminSideBarActive,
        setProfileSideBarActive,
        anchorElHome, setAnchorElHome,
        setAnchorElAdmin,
        setAnchorElProfile,
        subMenuItemActiveState, setSubMenuItemActiveState,
        setNavBarRoute,
        setCurrentChatAvatar,
        selectedSideBarMenuHome, setSelectedSideBarMenuHome,
        bookClubMenuItem, setBookClubMenuItem
    } = useContext(Context);
   
    const classes = useStylesHome({ anchorElHome,  activeSideBar, homeSideBarActive, subMenuItemActiveState, selectedSideBarMenuHome, bookClubMenuItem });
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
        setSelectedSideBarMenuHome(null)
    };
    const handleChangeBookClub = (panel) => (event, isSelected) => {
        setSelectedSideBarMenuHome(isSelected ? panel : null);
        setBookClubMenuItem(
            bookClubMenuItem == 'chat_menu' ? 'chat_menu' :
                bookClubMenuItem == 'create_group' ? 'create_group' : null)
        setSubMenuItemActiveState(panel)
    };
    return (
        <div>
            <Button
                disableRipple
                style={{ padding: "0px", textTransform: "none", width: "100%" }}
                onClick={handleClick}>
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
                        <RoofingIcon style={{ padding: " 0px 5px", fontSize: "35px" }} />
                        <Typography style={{ padding: "8px 0px" }}>Home</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.AccordionDetails}>
                        <div >
                            <MenuItem className={classes.home_page} onClick={handleClose} disableRipple>
                                {" "}
                                <Button
                                    className={classes.button_1}
                                    onClick={() => {
                                        leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
                                        dispatch(clearChat());
                                        setIsRoomActive(null);
                                        setCurrentChat("");
                                        setCurrentChatAvatar("")
                                        setSubMenuItemActiveState('home_page')
                                        setNavBarRoute("Home")
                                        setSelectedSideBarMenuHome(null)
                                        setBookClubMenuItem(null)
                                        setActiveSideBar('home_page')
                                    }}
                                >
                                    <Link className={classes.home_link} to="/">
                                        {" "}
                                        <Grid className={classes.menuItemIcon}><CottageIcon /></Grid>
                                        <Grid className={classes.menuItemText}><Typography style={{ padding: "8px 0px", fontFamily: "Montserrat, sans-se", }}>  Home page</Typography></Grid>

                                    </Link>
                                </Button>
                            </MenuItem>
                            <MenuItem className={classes.secondItem} onClick={handleClose} disableRipple>
                                <Accordion
                                    className={classes.AccordionBookClub}
                                    expanded={selectedSideBarMenuHome === 'book_club'}
                                    onChange={handleChangeBookClub('book_club')}>
                                    <AccordionSummary expandIcon={
                                        <div className={classes.KeyboardArrowRightIconDivBookClub}>
                                            < KeyboardArrowRightIcon className={classes.KeyboardArrowRightIconBookClub} />
                                        </div>
                                    }
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className={classes.AccordionSummaryBookClub}>
                                        <Grid className={classes.menuItemIcon}>  <GroupsIcon /></Grid>
                                        <Grid className={classes.menuItemText}> <Typography style={{ padding: "8px 0px", fontFamily: "Montserrat, sans-se", }}> Book Club </Typography> </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails className={classes.AccordionDetailsBookClub}>
                                        <MenuItem className={classes.subMenuItemCreateGroup}>
                                            <Button onClick={() => {
                                                dispatch(clearChat());
                                                setIsRoomActive(null);
                                                setCurrentChat("");
                                                leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
                                                setSubMenuItemActiveState('book_club')
                                                setNavBarRoute("Book Club")
                                                setBookClubMenuItem("create_group")
                                                setActiveSideBar('create_group')
                                            }}
                                                className={classes.buttonCreateGroup}>
                                                <Link className={classes.link_CreateGroup} to={{
                                                    pathname: "/create group",
                                                }}>
                                                    <Typography style={{ fontFamily: "Montserrat, sans-se", }}> Create Group</Typography>
                                                </Link>
                                            </Button>
                                        </MenuItem>
                                        <MenuItem className={classes.subMenuItemChatMenu}>
                                            <Button onClick={() => {
                                                dispatch(clearChat());
                                                setIsRoomActive(null);
                                                setCurrentChat("");
                                                leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
                                                setSubMenuItemActiveState('book_club')
                                                setNavBarRoute("Book Club")
                                                setBookClubMenuItem("chat_menu")
                                                setActiveSideBar('chat_menu')
                                            }}
                                                className={classes.buttonChatMenu}>
                                                <Link className={classes.link_ChatMenu} to={{
                                                    pathname: "/book club",
                                                }}>
                                                    <Typography style={{ fontFamily: "Montserrat, sans-se", }}>My Groups </Typography>
                                                </Link>
                                            </Button>
                                        </MenuItem>
                                    </AccordionDetails>
                                </Accordion>
                            </MenuItem>

                        </div>
                    </AccordionDetails>

                </Accordion>
            </Button>
        </div >
    )
}
export default Home


{/* <Button className={classes.button_2} onClick={() => {
    dispatch(clearChat());
    setIsRoomActive(null);
    setCurrentChat("");
    leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
    setSubMenuItemActiveState('book_club')
    setNavBarRoute("Book Club")
}}>
    <Link className={classes.link_2} to={{
        pathname: "/book club",
    }}>
        <GroupsIcon />
        Book Club
    </Link>
</Button> */}