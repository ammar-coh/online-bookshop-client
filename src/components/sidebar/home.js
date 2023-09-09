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
const useStyles = makeStyles({
    home_button: {
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
    homeMenu: {
        display: "block",
        backgroundColor: "white",
     
        transform:"none",
        transition: 'transform 0.3s ease-in-out',


    },
    homeMenu2: {
        display: "block",
        backgroundColor: "red",
        transform: (props) => (props.anchorEl ? "translateY(100%)" : "translateY(0%)"),

    
        },
    icon: {
        fontSize: "20px",
        color: "#333533",
        width: "20%",
        border: "1px solid black"
    },
    KeyboardArrowRightIconDiv: {
        display: "flex",
        width: "100%",
        height: "30px",
        justifyContent: "end",
        //   border:"1px solid white",

    },
    KeyboardArrowRightIcon: {

        transform: (props) => (!props.anchorEl ? null : "rotate(90deg)"),
    },
    home_text: {
        width: "100%",
        height: '34px',
        padding: "2px 130px 0px 0px",
        justifyItems: "start",
    },
    home_icon: {
        // border:"1px solid white",

    },
    home_page_text: {
        width: "100%",
        height: '34px',
        padding: "2px 120px 0px 0px",
        justifyItems: "start",
        textDecoration: "none",
        fontFamily: "Montserrat, sans-se",
    },
    home_link: {
        textDecoration: "none",
        display: "flex",
    },
    homeSidebarButton: {
        textTransform: 'none',

    }
})
function Home() {
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles({ anchorEl });
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl((previous) => !previous);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const user = useSelector((state) => state.user_login.details);
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
        setRecepientId
    } = useContext(Context);
    const leaveAllRooms = async (data) => {

        await socket.emit("leave_private_room", {
            roomID: data.roomID,
            userID: data.userID,
        });
    }
    return (
        <div>
            <Button
                className={classes.home_button}
                onClick={handleClick}
            >
                <div className={classes.home_icon}>
                    < RoofingIcon />

                </div>
                <div className={classes.home_text}>
                    Home
                </div>
                <div className={classes.KeyboardArrowRightIconDiv}>
                    <KeyboardArrowRightIcon className={classes.KeyboardArrowRightIcon} />
                </div>
            </Button>
       
                <div className= {`${classes.homeMenu} ${!anchorEl ?'':  classes.homeMenu2 }`}>

                    <div> <span>Home Page</span></div>
                    <div>  <span>Book Club</span></div>

                </div> 

            {/* <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                elevation={0}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose} disableRipple>
                    <div className={classes.homeIconMainContainer}>
                        {" "}
                        <Button
                            className={classes.homeSidebarButton}
                            onClick={() => {
                                dispatch(clearChat());
                                setIsActive(null);
                                setCurrentChat("");
                                leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
                            }}
                        >
                            <Link className={classes.home_link} to="/">
                                <div className={classes.icon}>
                                    {" "}
                                    <CottageIcon />
                                </div>
                                <div className={classes.home_page_text}>
                                    Home page
                                </div>

                            </Link>

                        </Button>
                    </div >
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <CategoryIcon />
                    Category page
                </MenuItem>

            </Menu> */}
        </div>
    )
}

export default Home