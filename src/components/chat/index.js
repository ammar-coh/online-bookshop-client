import React, { useContext, useEffect } from "react";
import { makeStyles, createMuiTheme} from "@material-ui/core/styles";
import ChatSideMenu from "./side_menu";
import ChatConversation from "./room";
import ChatTypingArea from "./message_input";
import ContactInfo from "./user_info";
import Context from "../../context";
import axios from "axios";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1366, // Custom breakpoint for 1366x768
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "20px 315px 60px 325px ",
    [theme.breakpoints.only('lg')]: {
      padding: "20px 215px 20px 225px ",
    },
  },

  list: {
    width: "20%",
    backgroundColor: "#d22129",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
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
    [theme.breakpoints.only('lg')]: {
      width: "30%",
    },
  },
  coversationContainer: {
    width: "80%",
    boxShadow: "12px 2px 15px  #f5f5f5",
    zIndex: 2,
    paddingTop: "30px",
    [theme.breakpoints.only('lg')]: {
      width: "70%",

    },
    backgroundColor:"#d22129"
  },
  receiverInfo: {
  },

  room: {
    zIndex: -1,
    backgroundColor:"#ffffff",
    height: "57vh",
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
    [theme.breakpoints.only('lg')]: {
      height: "56vh",
    },
  },
  roomContent: {
    overflowY: "auto",
    maxHeight: "100%", 
    overflowWrap: "break-word",
  },
  chatBar: {
    padding: "30px 50px",
    backgroundColor: "#303030",
    [theme.breakpoints.only('lg')]: {
      padding: "20px 10px",
    },
  },

  divider: {
    border: "60px solid black",
  },
}))

function Chatroom() {
  const classes = useStyles();
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
    notification_open
  } = useContext(Context);
  const allUsers = () => {
    axios.get(`http://localhost:8081/users/userList`).then((response) => {
      const allUserList = response.data;
      setList(allUserList);
    });
  };
  useEffect(() => {
    localStorage.getItem("authorization") && allUsers();
  }, [notification_open]);


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
        >
          <ContactInfo currentChat={currentChat} />
        </div>

        <div className={classes.room}>
          <div className={classes.roomContent}></div>
          <ChatConversation roomID={roomID} />{" "}
        </div>
      

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
