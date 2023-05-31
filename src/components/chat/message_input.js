import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@mui/icons-material/Send";
import { socket } from "../../socket";
import { useSelector, useDispatch } from "react-redux";
import { chat } from "../../redux/actions/index";

const useStyles = makeStyles((theme) => ({
  typingArea: {
    display: "flex",
    alignItems: "center",
    padding: "8px 120px 10px 120px",
    position: "relative",
  },
  inputField: {
    flex: 1,

    "& .MuiOutlinedInput-root": {
      borderRadius: "25px 0px 0px 25px",
      height: "40px",
      backgroundColor: "#f5f5f5",
      marginLeft: "10px",
    },
  },
  sendButton: {
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "50%",
    cursor: "pointer",
    height: "40px",
    zIndex: 1,
    right: 28,
  },
}));

const ChatTypingArea = ({
  roomID,
  recepient_id,
  setRecepientStatus,
  recepient_status,
}) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [receiveMessage, setReceiveMessage] = useState([]);
  const classes = useStyles();
  const user = useSelector((state) => state.user_login.details);
  const messages = useSelector((state) => state.chat);
  //   console.log('messages', messages)
  console.log("recipient notifiactions", recepient_status);
  const sendMessage = async () => {
    if (message !== "") {
      const messageData = {
        roomID: roomID,
        author: user?.user?.displayName,
        message: message,
        author_id: user?.user?.id,
        recepient_id: recepient_id,
        recepient_status: true,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
    }
  };
  const notifiactions = async (data) => {
    console.log("norification funct", data);
    if (data.recepient_status == false) {
      console.log("notifications ready", data.recepient_status);
      socket.emit("notification_channel", {
        message: data,
        userID:  user?.user?.id,
        participant : data.recepient_id,
      });
    } else {
      console.log("notification not sending");
    }
  };

  useEffect(() => {
    socket.on("receive_message", async (data) => {
      console.log("receiver message side", data);
      setReceiveMessage((prevMessages) => [...prevMessages, data.message]);
      await dispatch(chat(data));
      await setRecepientStatus(data.recepient_status);
      await notifiactions(data);
    });
  }, []);

  useEffect(() => {
    socket.on("notification_message", async (data) => {
      console.log("notification messge received", data);
      // await dispatch(notification(data));
    });
  }, []);

  return (
    <div className={classes.typingArea}>
      <TextField
        className={classes.inputField}
        variant="outlined"
        placeholder="Type a message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <Button
        className={classes.sendButton}
        variant="contained"
        onClick={sendMessage}
      >
        <SendIcon />
      </Button>
    </div>
  );
};

export default ChatTypingArea;
