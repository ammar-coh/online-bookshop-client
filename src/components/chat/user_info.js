import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import Context from "../../context";
import {useStyles}from './userInfoStyle'
;
function ContactInfo({ currentChat, currentChatAvatar ,setRoomActive,roomActive }) {
  const user = useSelector((state) => state.user_login.details);
  const { isRoomActive } = useContext(Context);
  const classes = useStyles({roomActive});
  const userLocal = JSON.parse(localStorage.getItem("userInfo"))

  const userName = () => {
    let userNameStr = currentChat;
    let arr = userNameStr.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let userNameStr2 = arr.join(" ");
    return userNameStr2;
  };

  return (
    <div className={classes.root}>
      {isRoomActive != null ? <div className={classes.userInfo}>
        <div className={classes.userAvatar}>
          {" "}
          <Avatar className={classes.avatar}
          sx={{ bgcolor: "#bdbdbd" }} 
          src = {currentChatAvatar}/>
        </div>
        {user.user.displayName ? (
          <div className={classes.userName}>{userName()}</div>
        ) : (
          <div>N/A</div>
        )}
      </div> :
        <div className={classes.welcomeMessage}>
          <span className={classes.welcomeMessageText}>Welcome to Book Club!
          </span>
        </div>}

    </div>
  );
}

export default ContactInfo;
