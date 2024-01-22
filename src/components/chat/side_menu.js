import React from "react";
import Avatar from "@mui/material/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { socket } from "../../socket";
import { chatFromDBSaga } from "../../redux/actions/index";
import { clearChat } from "../../redux/actions/index"; //"../src/redux/actions/index";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { sideMenuStyles, StyledBadge } from './sideMenuStyle'
function ChatSideMenu({
  list,
  setCurrentChat,
  roomID,
  setRoomID,
  isRoomActive,
  setIsRoomActive,
  setRecepientId,
  setCurrentChatAvatar,
  setRoomActive,
  online_user,
}) {
  const userLocal = JSON.parse(localStorage.getItem("userInfo"))
  const classes = sideMenuStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user_login.details);
  const userName = () => {
    let userNameStr = userLocal?.displayName;
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
    return name2;
  };
  const finalUpdatedArray = list?.userList?.filter(function (i) {
    return i.userName !== userLocal?.userName;
  });
  const joinChatRoom = async (data) => {
    let id = [data.userName, userLocal.userName];
    let sortedID = id.sort();
    const firstID = await list?.userList.filter(function (i) {
      return i.userName == sortedID[0];
    });
    const secondID = await list?.userList.filter(function (i) {
      return i.userName == sortedID[1];
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
    setIsRoomActive(data.index);
    setCurrentChat(data.displayName);
    setCurrentChatAvatar(data.image)
    dispatch(chatFromDBSaga(dataObjectForFetchChatAPI));
    setRecepientId(data?.id);
    setRoomActive(true)
    await socket.emit("delete_notification_message", {
      userID: user?.user?.id,
      sender_id: data?.id
    });
  };

  const onlineUser = finalUpdatedArray?.filter(function (user) {

    return online_user.some(obj => obj.id == user.id)
  })
  return (
    <div className={classes.root}>
      <div className={classes.userInfo}>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search google maps' }}
            disabled
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <List className={classes.list} >
        {finalUpdatedArray?.map((i, index) => (
          <ListItem className={classes.userInfoList} style={
            finalUpdatedArray[isRoomActive] == i
              ? { backgroundColor: "#f0f2f5" }
              : { backgroundColor: "#fff" }
          }  >
            <ListItemButton onClick={() =>
              joinChatRoom({
                userName: i.userName,
                index: index,
                id: i.id,
                image: i.imageURL,
                displayName: i.displayName
              })
            } className={classes.listButton}
            >
              <div className={classes.userAvatarList}>
                {" "}
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                  userListID={i.id}
                  onlineID={onlineUser}
                >
                  <Avatar
                    src={i.imageURL}
                    onClick={() =>
                      joinChatRoom({
                        userName: i.userName,
                        index: index,
                        id: i.id,
                        image: i.imageURL,
                        displayName: i.displayName
                      })
                    } />
                </StyledBadge>

              </div>
              {i.displayName ? (
                <div className={classes.userNameList}
                >
                  {listUsers({ name: i.displayName })}
                </div>
              ) : (
                <div>N/A</div>
              )}
            </ListItemButton>
          </ListItem>
          // </Button>
        ))}
      </List>
    </div>
  );
}

export default ChatSideMenu;
