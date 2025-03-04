import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@mui/icons-material/Send";
import { socket } from "../../socket";
import { useSelector, useDispatch } from "react-redux";
import { chat } from "../../redux/actions/index";
import Context from '../../context';
import InputBase from '@mui/material/InputBase';
import { useStyles } from './messageInputStyle'

const ChatTypingArea = ({
  roomID,
  recepient_id,
  setRecepientStatus,
  recepient_status,
  receieveMessage,
  setReceiveMessage
}) => {
  const { isRoomActive } = useContext(Context);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const classes = useStyles();
  const user = useSelector((state) => state.user_login.details);
  const notifiactions = async (data) => {
    if (data.receipent_status
      .recepient_status == false) {
      socket.emit("notification_channel", {
        message: data.receipent_status,
        userID: data?.receipent_status?.author_id,
        participant: data?.receipent_status?.recepient_id,
      });
    } else {
      console.log("notification not sending");
    }
  };

  const sendMessage = async () => {
    if (message !== "") {
      const messageData = {
        roomID: roomID,
        author: user?.user?.displayName,
        authorUserName: user?.user?.userName,
        authorImage: user?.user?.imageURL,
        message: message,
        author_id: user?.user?.id,
        displayName: user?.user?.displayName,
        recepient_id: recepient_id,
        recepient_status: true,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setReceiveMessage(true)
    }

  };
  const clearInput = () => {
    setMessage("")
  }
  useEffect(() => {
    socket.on("receive_message", async (data) => {
      console.log("message?received", data)
      await dispatch(chat(data));
      await setRecepientStatus(data?.recepient_status?.receipent_status);
      await notifiactions(data);
    });
  }, [receieveMessage]);
  return (
    <>
      {isRoomActive != null ? <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent the default form submission behavior
          sendMessage();
          clearInput();
        }}
      >
        <div className={classes.typingArea}>
          <div className={classes.fieldDiv}>
            <InputBase
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              value={message}
              className={classes.inputField}
              sx={{
                ml: 1, flex: 1, bgcolor: "#fff",
                // borderRadius: "25px", 
                padding: "0px 0px 0px  10px"
              }}
              placeholder="type here..."
              inputProps={{ 'aria-label': 'search google maps' }}

            />
          </div>

          <div className={classes.sendButtonDiv}>
            <SendIcon
              onClick={() => {
                sendMessage()
                clearInput()
              }}
              className={classes.sendButton}
              variant="contained"
              type="submit"
              sx={{
                p: '10px', width: '35px', // Set your desired width
                height: '35px',
              }}
              aria-label="search">
            </SendIcon>
          </div>
        </div>
      </form> : null}

    </>
  );
};

export default ChatTypingArea;
