import React, { useContext } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link} from "react-router-dom";
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
import { useStylesHome} from './style'

function Home() {
    const dispatch = useDispatch();
    const {
        roomID,
        setRoomID,
        setCurrentChat,
        setIsRoomActive,
        selectedSideBarMenu,
        setSelectedSideBarMenu,
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
    } = useContext(Context);
    const classes = useStylesHome({ anchorElHome, homeSideBarActive, subMenuItemActiveState });
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
                                        leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
                                        dispatch(clearChat());
                                        setIsRoomActive(null);
                                        setCurrentChat("");
                                        setCurrentChatAvatar("")
                                        setSubMenuItemActiveState('home_page')
                                        setNavBarRoute("Home")
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