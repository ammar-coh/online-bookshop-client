import React, { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {useStylesChatNotification} from './style'
function Chat_Notifications({
  roomID,
  setRoomID,
  setCurrentChat,
  setCurrentChatAvatar,
  setIsActive,
  list,
  setNotificationOpen,
  setRecepientId
}) {
  const classes = useStylesChatNotification();
  const history = useHistory();
  const [show_user_notifications, setShowUserNotifications] = useState(false);
  const user = useSelector((state) => state.user_login.details);
  const dispatch = useDispatch();
  const my_notifications = useSelector((state) => state.notification)
  const finalUpdatedArray = list?.userList?.filter(function (i) {
    return i.userName !== user?.user?.userName;
  });
  const theme = createTheme({
    palette: {
      neutral: {
        main: '#333533',
        contrastText: '#ffffff',
      },
    },
  });
  const listUsers = ({ name }) => {
    let list_name = name;
    let arr = list_name.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let name2 = arr.join(" ");
    return name2;
  };
  const joinChatRoom = async (data) => {
    let index;

    const getUserFromList = finalUpdatedArray?.filter(function (user) {
      if (user.id == data?.sender_id) {
        index = finalUpdatedArray.indexOf(user);
      }
    });
    await socket.emit("leave_private_room", { roomID: roomID, userID: user?.user?.id });
    await socket.emit("private_room", {
      room_id: data.roomID,
      userID: user?.user?.id,
      participant: data?.sender_id,
    });
    const dataObjectForFetchChatAPI = {
      roomID: data.roomID,
      participant: user?.user?.id,
    };
    localStorage.setItem("roomID", data.roomID)
    setRoomID(data.roomID);
    setIsActive(index);
    setCurrentChat(data.displayName);
    setCurrentChatAvatar(data.image)
    dispatch(chatFromDBSaga(dataObjectForFetchChatAPI));
    setRecepientId(data?.sender_id)
    history.push("/book club");
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
    if (my_notifications?.recipient_id == user?.user?.id) {
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
        }}
        className={classes.button_1}
        >
          {" "}
          <ThemeProvider theme={theme}>
            <Badge
              badgeContent={my_notifications.recipient_id == user?.user?.id ? my_notifications.total_notifications : 0}
              color="error"
              fontSize = "small"
            >
              < MailOutlineIcon fontSize="small"  className={classes.notificationMailIcon} />
            </Badge>
          </ThemeProvider>
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
                      userName:content.authorUsername,
                      displayName: content.displayName,
                      index: index,
                      sender_id: content.author_id,
                      image:content.imageURL,
                      roomID:content.roomID
                    })
                  }
                  className={classes.button}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar  src={content.imageURL}/> 
                    </ListItemAvatar>
                    <ListItemText
                      primary={listUsers({ name: content.displayName })}
                      secondary={
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {content.message}
                        </Typography>
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
