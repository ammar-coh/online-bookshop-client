import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Admin from './admin'
import Context from '../../context'
import { AiOutlineHome } from "react-icons/ai";
import { socket } from "../../socket";
import { clearChat } from '../../redux/actions/index'
import libertyBookslogo from '../../Assets/newlogoliberty-250x67 (1)-250x67.png'
import Profile from './Profile'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Home from './home';
import  MiniDrawer from './drawer'
const useStyles = makeStyles({
    root: {
        backgroundColor: "#d22129",
        // backgroundColor:"#0dd6b8",
        width: "100%",
        height: "100%",
    },
    libertyBooks_logo: {},
    home:{
        padding: " 15px 20px",

    },
    admin_panel: {
        padding: " 15px 20px",
    },
    user_profile: {
        padding: " 15px 20px",
    },
  
   
})

function Sidebar() {
    const dispatch = useDispatch();
    const classes = useStyles();
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
        <div className={classes.root}>
            < MiniDrawer/>
            {/* <div className={classes.libertyBooks_logo}>
                <img src={libertyBookslogo} />
            </div>
          
            <div className={classes.home}>
                <Home/>
            </div>
            <div className={classes.admin_panel}>
                <Admin />
            </div>
            <div className={classes.user_profile}>
                <Profile />
            </div> */}
        </div>
    )
}

export default Sidebar