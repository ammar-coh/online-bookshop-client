import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Paper from "@mui/material/Paper";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { socket } from "../../socket";
import { Route, Link, useHistory } from "react-router-dom";
import { chatFromDBSaga } from "../../redux/actions/index";

const useStyles = makeStyles({
  root: {},
  chatNotification: {},
  notificationMailIcon: { color: "white" },
  notification_badge: {},
  notification_list: {
    position: "absolute",
    zIndex: 9999,
    "& .css-h4y409-MuiList-root": { display: "grid" },
  },
  button: {
    // border:"2px solid black",
    width: "fit-content",
  },
});
function Chat_Notifications({
  roomID,
  setRoomID,
  currentChat,
  setCurrentChat,
  isActive,
  setIsActive,
  list,
  recepient_status,
}) {
  const classes = useStyles();
  const history = useHistory();
  const [show_user_notifications, setShowUserNotifications] = useState(false);
  const user = useSelector((state) => state.user_login.details);
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat);
  console.log('messages', messages)
console.log("recipient notifiactions", recepient_status)
  const user_notifications = [
    {
      id: "641199830966bb18365391fe",
      avatartext: "S",
      displayName: "shaiza",
      message: "hi",
    },
    { id: 2, avatartext: "A", displayName: "ammar", message: "hi" },
    { id: 3, avatartext: "J", displayName: "Joe", message: "humm okey dokie" },
    // Add more notifications as needed
  ];
  const joinChatRoom = async (data) => {
    console.log("?>?>?>", data);
    let index;
    const getUserFromList = list?.userList?.filter(function (user) {
      if (user.id == data?.id) {
        index = list?.userList?.indexOf(user);
      }
    });

    let id = [data.displayName, user.user.displayName];
    let sortedID = id.sort();
    const firstID = await list?.userList.filter(function (i) {
      return i.displayName == sortedID[0];
    });
    const secondID = await list?.userList.filter(function (i) {
      return i.displayName == sortedID[1];
    });
    let room_id = await firstID[0].id.concat(secondID[0].id);

    await socket.emit("leave_private_room", roomID);

    await socket.emit("private_room", {
      room_id: room_id,
      participant: data.id,
    });
    const dataObjectForFetchChatAPI = {
      roomID: room_id,
      participant: user.user.id,
    };
    setRoomID(room_id);
    setIsActive(index);
    setCurrentChat(data.displayName);
    dispatch(chatFromDBSaga(dataObjectForFetchChatAPI));
    history.push("/chatroom");
    setShowUserNotifications(false);
  };
  // await socket.emit("notification_channel", {
  //   room_id: room_id,
  //   participant: data.id,
  // });
  // useEffect(() => {
  //   if (!recepient_status) {
  //     console.log("notifications ready")
  //     // socket.emit("notification_channel", {});
  //   }
  // }, [recepient_status]);

  // useEffect(() => {
  //   socket.on("notification_channel_receive_server", (data) => {
  //     console.log("receiver message side", data);
  //     setReceiveMessage((prevMessages) => [...prevMessages, data.message]);
  //     dispatch(chat(data));
  //     setRecepientStatus(data.recepient_status);
  //   });
  // }, []);
  useEffect(() => {
    socket.on("user_notifications", (data) => {
      console.log(data);
      if (data.userId === data.receiver) {
        console.log("match");
      } else {
        console.log("not match");
      }
      // setReceiveMessage((prevMessages) => [...prevMessages, data.message]);
      // dispatch(chat(data))
    });
  }, []);

  const openNotifications = () => {
    setShowUserNotifications((previous) => !previous);
  };
  return (
    <div className={classes.root}>
      {" "}
      <div className={classes.notification_badge}>
        <Button onClick={() => openNotifications()}>
          {" "}
          <Badge
            // className={classes.chatNotification}
            badgeContent={2}
            color="error"
          >
            <MailIcon className={classes.notificationMailIcon} />
          </Badge>
        </Button>
      </div>
      {show_user_notifications ? (
        <div className={classes.notification_list}>
          <Paper>
            <List>
              {user_notifications.map((content, index) => (
                <Button
                  onClick={() =>
                    joinChatRoom({
                      displayName: content.displayName,
                      index: index,
                      id: content.id,
                    })
                  }
                  className={classes.button}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar>{content.avatartext} </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={content.displayName}
                      secondary={
                        // <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {content.message}
                        </Typography>
                        // </React.Fragment>
                      }
                    />
                  </ListItem>
                </Button>
              ))}
            </List>
          </Paper>
        </div>
      ) : null}
    </div>
  );
}

export default Chat_Notifications;
