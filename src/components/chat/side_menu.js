import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@mui/material/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { socket } from "../../socket";
import { chatFromDBSaga } from "../../redux/actions/index";
import Button from "@material-ui/core/Button";

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
  },
  userAvatar: {},
  userName: {
    width: "100%",
    color: "#1e88e5",
    fontWeight: "bold",
  },

  list: {
    //  border: "1px solid orange",
    display: "grid",
  },

  userInfoList: {
    // border: "2px solid purple",
    display: "flex",
    padding: "10px 10px 10px 4px",
    gap: "15px",
    marginRight: "auto",
  },
  userAvatarList: {
    // border: "2px solid blue ",
  },
  userNameList: {
    // border: "2px solid red",
    width: "100%",
    // color: "#1e88e5",
    fontWeight: "bold",
  },
  button: {
    // border:"2px solid black",
    width: "fit-content",
    borderEndEndRadius: "100%",
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
    console.log("contact from side menu ", data);
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
    setRoomID(room_id);
    setIsActive(data.index);
    setCurrentChat(data.displayName);
    dispatch(chatFromDBSaga(dataObjectForFetchChatAPI));
    setRecepientId(data?.id);
  };

  return (
    <div className={classes.root}>
      <div className={classes.userInfo}>
        <div className={classes.userAvatar}>
          {" "}
          <Avatar sx={{ bgcolor: "#FF9900" }}>
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
                ? { backgroundColor: "#1e88e5", color: "white" }
                : { backgroundColor: "#f5f5f5", color: "#1e88e5" }
            }
          >
            <div className={classes.userInfoList}>
              <div className={classes.userAvatarList}>
                {" "}
                <Avatar sx={{ bgcolor: assignColor()[500] }}>
                  {i.displayName.charAt(0).toUpperCase()}
                </Avatar>
              </div>
              {i.displayName ? (
                <div className={classes.userNameList}>
                  {i.displayName.charAt(0).toUpperCase() +
                    i.displayName.slice(1)}
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
