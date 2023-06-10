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
import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles({
  root: {
    padding: "0px 15px",
    width: "100%"
  },
  chatNotification: {},
  notificationMailIcon: { color: "white" },
  notification_badge: { width: "100%" },
  notification_list: {
    position: "absolute",
    zIndex: 9999,
    width: "19%",
    "& .css-h4y409-MuiList-root": { display: "grid", },
  },
  button: {
    width: "100%",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgb (247 ,249 249)",
      color: "#333533"
    },
    "& .css-10hburv-MuiTypography-root": {
      fontSize: "15px",
      fontWeight:700,
      fontFamily: "Montserrat, sans-se"
    },
    "& .css-1phucj-MuiTypography-root":{
      fontSize: "15px",
      fontFamily: "Montserrat, sans-se",
      color:"#536471",
    }
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
    console.log("name2", name2)
    return name2;
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
          <ThemeProvider theme={theme}>
            <Badge
              badgeContent={my_notifications.recipient_id == user?.user?.id ? my_notifications.total_notifications : 0}
              color="primary"
            >
              <MailIcon className={classes.notificationMailIcon} />
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
                      displayName: content.displayName,
                      index: index,
                      sender_id: content.author_id,
                    })
                  }
                  className={classes.button}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar style={{ backgroundColor: "#d22129", color: "#ffffff" }}> {content.displayName.charAt(0).toUpperCase()} </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={listUsers({ name: content.author })}
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
