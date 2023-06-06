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
import { useHistory } from "react-router-dom";
import { chatFromDBSaga } from "../../redux/actions/index";
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
    padding: "0px 15px",
  },
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
  setCurrentChat,
  setIsActive,
  list,
  setNotificationOpen,
  setRecepientId
}) {
  const classes = useStyles();
  const history = useHistory();
  const [show_user_notifications, setShowUserNotifications] = useState(false);
  const user = useSelector((state) => state.user_login.details);
  const dispatch = useDispatch();
  const my_notifications = useSelector((state) => state.notification)
  const finalUpdatedArray = list?.userList?.filter(function (i) {
    return i.displayName !== user?.user?.displayName;
  });
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
  const joinChatRoom = async (data) => {
    let index;

    const getUserFromList = finalUpdatedArray?.filter(function (user) {
      if (user.id == data?.sender_id) {
        index = finalUpdatedArray.indexOf(user);
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
    let room_id = await firstID[0]?.id.concat(secondID[0]?.id);

    await socket.emit("leave_private_room", { roomID: roomID, userID: user?.user?.id });


    await socket.emit("private_room", {
      room_id: room_id,
      userID: user?.user?.id,
      participant: data?.sender_id,
    });
    const dataObjectForFetchChatAPI = {
      roomID: room_id,
      participant: user?.user?.id,
    };
    localStorage.setItem("roomID", room_id)
    setRoomID(room_id);
    setIsActive(index);
    setCurrentChat(data.displayName);
    dispatch(chatFromDBSaga(dataObjectForFetchChatAPI));
    setRecepientId(data?.sender_id)
    history.push("/chatroom");
    setShowUserNotifications(false);
    await socket.emit("delete_notification_message", {
      userID: user?.user?.id,
      sender_id: data?.sender_id
    });
    setNotificationOpen((previous) => !previous)
  };

  useEffect(() => {
    socket.on("user_notifications", (data) => {
      console.log(data);
      if (data.userId === data.receiver) {
        console.log("match");
      } else {
        console.log("not match");
      }

    });
  }, []);

  const openNotifications = () => {
    if (my_notifications.recipient_id == user?.user?.id) {
      setShowUserNotifications((previous) => !previous);
    }
  };
  return (
    <div className={classes.root}>
      {" "}
      <div className={classes.notification_badge}>
        <Button onClick={() => {
          openNotifications()
          setNotificationOpen((previous) => !previous)
        }}>
          {" "}
          <Badge
            // className={classes.chatNotification}
            badgeContent={my_notifications.recipient_id == user?.user?.id ? my_notifications.total_notifications : 0}
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
              {my_notifications.notifications.map((content, index) => (
                <Button
                  onClick={() =>
                    joinChatRoom({
                      displayName: content.displayName,
                      index: index,
                      sender_id: content.author_id,
                    })
                    //function
                  }
                  className={classes.button}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: assignColor()[500] }}> {content.displayName.charAt(0).toUpperCase()} </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={content.author}  //{userName()}
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
