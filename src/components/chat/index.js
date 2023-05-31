import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import ChatSideMenu from "./side_menu";
import ChatConversation from "./room";
import ChatTypingArea from "./message_input";
import ContactInfo from "./user_info";
import Divider from "@mui/material/Divider";
import Context from "../../context";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "0px 20px 20px 20px ",
    height: "550px",
  },

  list: {
    width: "30%",
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    height: "550px" /* Set the desired height for your scrollable container */,
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#FF9900",
      borderRadius: "12px",
    },
  },
  coversationContainer: {
    width: "70%",
    boxShadow: "12px 2px 15px  #f5f5f5",
    zIndex: 2,
    paddingTop: "30px",
  },
  receiverInfo: {
    height: "fit-content",
  },

  room: {
    zIndex: -1,
    height: "400px" /* Set the desired height for your scrollable container */,
    overflowY: "auto",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#FF9900",
      borderRadius: "12px",
    },
  },
  roomContent: {
    overflowY: "auto", // Enable vertical scrolling
    maxHeight: "100%", // Ensure the content expands to fit the container
    border: "1px solid #ccc",
    overflowWrap: "break-word",
  },
  chatBar: {},

  divider: {
    border: "60px solid black",
  },
});
function Chatroom() {
  const classes = useStyles();
  const location = useLocation();
  const {
    roomID,
    setRoomID,
    currentChat,
    setCurrentChat,
    isActive,
    setIsActive,
    list,
    setList,
    recepient_id,
    setRecepientId,
    recepient_status,
    setRecepientStatus,
  } = useContext(Context);
  const allUsers = () => {
    axios.get(`http://localhost:8081/users/userList`).then((response) => {
      const allUserList = response.data;
      setList(allUserList);
    });
  };
  useEffect(() => {
    localStorage.getItem("authorization") && allUsers();
  }, []);
  const shouldHideScrollbar = location.pathname === "/chatroom";

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // console.log("handleScroll", isSticky);
  return (
    <div className={classes.root}>
      <div className={classes.list}>
        <ChatSideMenu
          setCurrentChat={setCurrentChat}
          roomID={roomID}
          setRoomID={setRoomID}
          isActive={isActive}
          setIsActive={setIsActive}
          list={list}
          setRecepientId={setRecepientId}
        />
      </div>
      <div className={classes.coversationContainer}>
        <div
          className={classes.receiverInfo}
          // style={isSticky ? { position: "fixed", top: 0 } : {}}
        >
          {/* <Divider /> */}
          <ContactInfo currentChat={currentChat} />
          <Divider className={classes.divider} variant="middle" />
        </div>

        <div className={classes.room}>
          <div className={classes.roomContent}></div>
          <ChatConversation roomID={roomID} />{" "}
        </div>
        <Divider />

        <div className={classes.chatBar}>
          <ChatTypingArea
            roomID={roomID}
            recepient_id={recepient_id}
            setRecepientStatus={setRecepientStatus}
            recepient_status={recepient_status}
          />
        </div>
      </div>
    </div>
  );
}

export default Chatroom;
