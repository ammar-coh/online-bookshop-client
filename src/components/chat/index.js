import React, { useContext, useEffect, useState } from "react";
import ChatSideMenu from "./side_menu";
import ChatConversation from "./room";
import ChatTypingArea from "./message_input";
import ContactInfo from "./user_info";
import Context from "../../context";
import axios from "axios";
import {useStylesIndex} from './style'
import Paper from '@mui/material/Paper';


function Chatroom() {
  const [roomActive,setRoomActive] = useState(false) 
  const classes = useStylesIndex({roomActive});
  const {
    roomID,
    setRoomID,
    currentChat,
    setCurrentChat,
    currentChatAvatar, setCurrentChatAvatar,
    isRoomActive,
    setIsRoomActive,
    list,
    setList,
    recepient_id,
    setRecepientId,
    recepient_status,
    setRecepientStatus,
    notification_open,
    receieveMessage, setReceiveMessage
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
      <Paper elevation={3} style={{width:"100%", display:"flex", borderRadius:"19px",
      // border:"1px solid black"
      }}>    
          <div className={classes.list}>
        <ChatSideMenu
          setCurrentChat={setCurrentChat}
          roomID={roomID}
          setRoomID={setRoomID}
          isRoomActive={isRoomActive}
          setIsRoomActive={setIsRoomActive}
          list={list}
          setRecepientId={setRecepientId}
          currentChatAvatar={currentChatAvatar}
          setCurrentChatAvatar={setCurrentChatAvatar}
          roomActive={roomActive}
          setRoomActive= {setRoomActive}
        />
      </div>
      <div className={classes.coversationContainer}>
        <div
          className={classes.receiverInfo}
        >
          <ContactInfo currentChat={currentChat}
            currentChatAvatar={currentChatAvatar}
            setCurrentChatAvatar={setCurrentChatAvatar} 
            roomActive={roomActive}
            setRoomActive= {setRoomActive}/>
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
            receieveMessage={receieveMessage}
            setReceiveMessage={setReceiveMessage}

          />
        </div>
      </div>
      </Paper>
    </div>
  );
}

export default Chatroom;
