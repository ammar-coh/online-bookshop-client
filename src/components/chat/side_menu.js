import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@mui/material/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { socket } from "../../socket";
import { chatFromDBSaga } from "../../redux/actions/index";
import Button from "@material-ui/core/Button";
import { clearChat } from "../../redux/actions/index"; //"../src/redux/actions/index";
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
    display: "grid",
    gap: "50px 0px",
  },

  userInfo: {
    display: "flex",
    padding: "10px",
    gap: "15px",
    "& .css-2miw2m-MuiAvatar-root":{
      color:"#d22129"
    }
  },
  userAvatar: { color:"#d22129"},
  userName: {
    fontFamily: "Montserrat, sans-se",
    fontSize: "16px",
    width: "100%",
    fontWeight: 500,
    color: "#ffffff"
  },

  list: {
    display: "grid",
  },

  userInfoList: {
    display: "flex",
    padding: "10px 10px 10px 4px",
    gap: "15px",
    marginRight: "auto",
   
  },
  userAvatarList: {
  },
  userNameList: {
    width: "100%",
    display: "flex",
    fontFamily: "Montserrat, sans-se",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    "&.MuiButton-root": {
      textTransform: "none"
    }
  },
});
function ChatSideMenu({
  list,
  setCurrentChat,
  roomID,
  setRoomID,
  isActive,
  setIsActive,
  setRecepientId,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user_login.details);
  const userName = () => {
    let userNameStr = user?.user?.displayName;
    let arr = userNameStr.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let userNameStr2 = arr.join(" ");
    return userNameStr2;
  };
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
  const finalUpdatedArray = list?.userList?.filter(function (i) {
    return i.displayName !== user?.user?.displayName;
  });
  

  const joinChatRoom = async (data) => {
    let id = [data.displayName, user.user.displayName];
    let sortedID = id.sort();
    const firstID = await list?.userList.filter(function (i) {
      return i.displayName == sortedID[0];
    });
    const secondID = await list?.userList.filter(function (i) {
      return i.displayName == sortedID[1];
    });
    let room_id = await firstID[0].id.concat(secondID[0].id);

    await socket.emit("leave_private_room", {
      roomID: roomID,
      userID: user?.user?.id,
    });

    await socket.emit("private_room", {
      room_id: room_id,
      userID: user?.user?.id,
      participant: data?.id,
    });

    const dataObjectForFetchChatAPI = {
      roomID: room_id,
      participant: user.user.id,
      receiver: data.id,
    };
    localStorage.setItem("roomID", room_id)
    dispatch(clearChat())
    setRoomID(room_id);
    setIsActive(data.index);
    setCurrentChat(data.displayName);
    dispatch(chatFromDBSaga(dataObjectForFetchChatAPI));
    setRecepientId(data?.id);
    await socket.emit("delete_notification_message", {
      userID: user?.user?.id,
      sender_id: data?.id
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.userInfo}>
        <div className={classes.userAvatar}>
          {" "}
          <Avatar sx={{ bgcolor: "#ffffff" }}>
            {user.user.displayName.charAt(0).toUpperCase()}
          </Avatar>
        </div>
        {user.user.displayName ? (
          <div className={classes.userName}>{userName()}</div>
        ) : (
          <div>N/A</div>
        )}
      </div>
      <div className={classes.list}>
        {finalUpdatedArray?.map((i, index) => (
          <Button
            onClick={() =>
              joinChatRoom({
                displayName: i.displayName,
                index: index,
                id: i.id,
              })
            }
            className={classes.button}
            style={
              finalUpdatedArray[isActive] == i
                ? { backgroundColor: "#ffffff", color: "#d22129" }
                : { backgroundColor: "#d22129", color: "#ffffff" }
            }
          >
            <div className={classes.userInfoList}>
              <div className={classes.userAvatarList}>
                {" "}
                <Avatar  style={
              finalUpdatedArray[isActive] == i
                ? { backgroundColor: "#333533", color: "#d22129" }
                : { backgroundColor: "#333533", color: "#ffffff" }
            }>
                  {i.displayName.charAt(0).toUpperCase()}
                </Avatar>
              </div>
              {i.displayName ? (
                <div className={classes.userNameList}>
                  {listUsers({ name: i.displayName })}
                </div>
              ) : (
                <div>N/A</div>
              )}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ChatSideMenu;
