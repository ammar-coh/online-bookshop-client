import React, { useRef, useEffect, createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { useState } from "react";


const useStyles = makeStyles((theme) => ({
  root: { display: "grid" },
  sender: {
    textAlign: "left",
    width: "100%",
    padding: "10px 0px 0px 10px ",
  },
  senderText: {
    width: "fit-content",
    padding: "5px",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    borderTopLeftRadius: "5px",
    backgroundColor: "#f5f5f5",
    color: "#212121",
  },
  receiver: {
    textAlign: "right",
    padding: "10px 25px 10px 0px ",
  },
  receiverTextDiv: {
    width: "fit-content",
    float: "right",
  },
  receiverText: {
    width: "fit-content",
    padding: "5px",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
    borderTopRightRadius: "5px",
    float: "right",
    color: "white",
    backgroundColor: "#2196f3",
  },
}));


function ChatConversation({ roomID }) {
  const classes = useStyles();
  const user = useSelector((state) => state.user_login.details);
  const messages = useSelector((state) => state.chat);
  const [roomIDMatch, setRoomIDMatch] = useState(false);
  const chatContainerRef = useRef(null);
  const [display_messages , setDisplayMessages] = useState([])
 
  useEffect(() => {
    if (messages.roomID == roomID) {
      setDisplayMessages(messages.messages)
      setRoomIDMatch(true)
    } else {
      setRoomIDMatch(true)
    }
  }, [messages, roomID]);

  return (
    <div className={classes.root} ref={chatContainerRef}>
      {roomIDMatch ?
       display_messages.map((i) =>
        display_messages.length != 0 && user?.user?.displayName == i.author ? (
          <div className={classes.sender}>
            <div className={classes.senderText}>{i.message}</div>
          </div>
        ) : (
          <div className={classes.receiver}>
            {" "}
            <div className={classes.receiverTextDiv}>
              <div className={classes.receiverText}>{i.message}</div>
            </div>
          </div>
        )
      ) : null}
    </div>
  );
}

export default ChatConversation;
