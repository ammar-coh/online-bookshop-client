import React, { useContext, useEffect, useState } from "react";
import ChatSideMenu from "./side_menu";
import ChatConversation from "./room";
import ChatTypingArea from "./message_input";
import ContactInfo from "./user_info";
import Context from "../../context";
import axios from "axios";
import { useStylesIndex } from './style'
import Paper from '@mui/material/Paper';
import useSWRSubscription from 'swr/subscription'
import {socket} from '../../socket'
import { useSelector, useDispatch } from "react-redux";


function Chatroom() {
  const user = useSelector((state) => state.user_login.details);
  const url = process.env.REACT_APP_BASE_URL
  const [roomActive, setRoomActive] = useState(false)
  const classes = useStylesIndex({ roomActive });
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
    receieveMessage, setReceiveMessage,
    online_user,
    setOnlineUser
  } = useContext(Context);
  const allUsers = () => {
    axios.get(`${url}users/userList`).then((response) => {
      const allUserList = response.data;
      setList(allUserList);
    });
  };
  useEffect(() => {
    localStorage.getItem("authorization") && allUsers();
  }, [notification_open]);
  const fetcher = () => {
    const handleUserOnline = (data) => {
        setOnlineUser(data)
    };
    socket.emit('join_login_room_refresh', {
      user: data?.user?.userName,
      id: data?.user?.id
    });
        socket.on('userOnline', handleUserOnline);
        return () => {
            socket.off('userOnline', handleUserOnline);
        };
};
const { data, error} = useSWRSubscription( `${user}` , fetcher,{ revalidateOnReconnect: false});

return (
    <div className={classes.root}>
      <Paper elevation={3} style={{
        width: "100%", display: "flex", borderRadius: "19px",
        // border:"1px solid red"
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
            setRoomActive={setRoomActive}
            online_user={online_user}
            setOnlineUser={setOnlineUser}
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
              setRoomActive={setRoomActive} />
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
