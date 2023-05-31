import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  deepOrange,
  deepPurple,
  green,
  blue,
  red,
  yellow,
  brown,
} from "@mui/material/colors";
const useStyles = makeStyles({
  root: {
    display: "grid",
    gap: "50px 0px",
    zIndex: 1,
  },

  userInfo: {
    // border: "1px solid purple",
    zIndex: 1,
    display: "flex",
    padding: "10px",
    gap: "15px",
  },
  userAvatar: {
    // border: "2px solid orange ",
    zIndex: 1,
  },
  userName: {
    // border: "2px solid black",
    width: "100%",
    color: "#1e88e5",
    fontWeight: "bold",
    zIndex: 1,
  },
});
function ContactInfo({ currentChat }) {
  const classes = useStyles();
  const user = useSelector((state) => state.user_login.details);

  const userName = () => {
    let userNameStr = currentChat;
    let arr = userNameStr.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let userNameStr2 = arr.join(" ");
    return userNameStr2;
  };
  const assignColor = () => {
    let number = Math.floor(Math.random() * 9);
    switch (number) {
      case 0:
        return deepOrange;
        break;
      case 1:
        return deepPurple;
        break;
      case 2:
        return red;
        break;
      case 3:
        return brown;
        break;
      case 4:
        return yellow;
        break;
      case 5:
        return green;
        break;
      case 6:
        return blue;
        break;
      case 7:
        return red;
        break;

      default:
        return "none";
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.userInfo}>
        <div className={classes.userAvatar}>
          {" "}
          <Avatar sx={{ bgcolor: "#bdbdbd" }}>
            {currentChat.charAt(0).toUpperCase()}
          </Avatar>
        </div>
        {user.user.displayName ? (
          <div className={classes.userName}>{userName()}</div>
        ) : (
          <div>N/A</div>
        )}
      </div>
    </div>
  );
}

export default ContactInfo;
