import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Cart from "./Cart";
import { clearChat } from "../../redux/actions/index"; //"../src/redux/actions/index";
import Chat_Notifications from "./chat_notification";
import Context from "../../context";
import axios from "axios";
import { socket } from "../../socket";
import NavBarRoute from './headerNavTitle'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountMenu from './profile'
import { useStylesIndex } from './style'

function Header() {
  const userLocal = JSON.parse(localStorage.getItem("userInfo"))
  const classes = useStylesIndex();
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user_login.details);
  const [isSticky, setIsSticky] = useState(false);
  const {
    roomID, setRoomID,
    currentChat, setCurrentChat,
    isRoomActive, setIsRoomActive,
    recepient_status,
    notification_open, setNotificationOpen,
    setRecepientId,
    profileUpdate,
    setProfileUpdate,
    setCurrentChatAvatar,
    setSelectedSideBarMenu,
    setHomeSideBarActive,
    setSelectedSideBarMenuHome,
    setAdminSideBarActive,
    setProfileSideBarActive,
    setAnchorElHome,
    setAnchorElAdmin,
    setAnchorElProfile,
    setSubMenuItemActiveState,
    setBookClubMenuItem,
    setActiveSideBar, 
    setNavBarRoute
  } = useContext(Context);
  const leaveAllRooms = async (data) => {

    await socket.emit("leave_private_room", {
      roomID: data.roomID,
      userID: data.userID,
    });
  }
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const allUsers = () => {
    axios.get(`http://localhost:8081/users/userList`).then((response) => {
      const allUserList = response.data;
      setList(allUserList);
    });
  };
  useEffect(() => {
    localStorage.getItem("authorization") && allUsers();
  }, [notification_open]);
  return (
    <div
      className={classes.root}
      style={isSticky ? { position: "fixed", top: 0, width: "100%" } : {}}
    >
      <div className={classes.homeIconMainContainer}>
        {" "}
        <NavBarRoute />
      </div>
      <div className={classes.searchBarDiv}>
        <InputBase
          className={classes.searchBar}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search google maps' }}
          startAdornment={<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>}
        />
      </div>
      <div className={classes.headerThirdContainer}>
        <div className={classes.chatNotificationContainer}>
          <Chat_Notifications
            roomID={roomID}
            setRoomID={setRoomID}
            currentChat={currentChat}
            setCurrentChat={setCurrentChat}
            setCurrentChatAvatar={setCurrentChatAvatar}
            isRoomActive={isRoomActive}
            setIsRoomActive={setIsRoomActive}
            list={list}
            recepient_status={recepient_status}
            setNotificationOpen={setNotificationOpen}
            setRecepientId={setRecepientId}
          />
        </div>
        <div className={classes.cartContainer}>
          <Button
            className={classes.s}
            style={{
              padding: "0px 0px 0px 30px",
            }}
            onClick={() => {
              dispatch(clearChat());
              setIsRoomActive(null);
              setCurrentChat("");
              setCurrentChatAvatar("")
              leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
            }}>
            <Cart setSelectedSideBarMenu={setSelectedSideBarMenu}
              setHomeSideBarActive={setHomeSideBarActive}
              setSelectedSideBarMenuHome={setSelectedSideBarMenuHome}
              setAdminSideBarActive={setAdminSideBarActive}
              setProfileSideBarActive={setProfileSideBarActive}
              setAnchorElHome={setAnchorElHome}
              setAnchorElAdmin={setAnchorElAdmin}
              setAnchorElProfile={setAnchorElProfile}
              setSubMenuItemActiveState={setSubMenuItemActiveState}
              setBookClubMenuItem={setBookClubMenuItem}
              setNavBarRoute={setNavBarRoute} 
              setActiveSideBar={setActiveSideBar}/>
          </Button>
        </div>
        <div className={classes.profile}>
          <AccountMenu profileUpdate={profileUpdate} setProfileUpdate={setProfileUpdate} />
        </div>
        <div className={classes.userName}>
          <span style={{
            fontFamily: "Montserrat, sans-se",
            fontSize: "18px",
            color: "#fff",
            fontWeight: 500
          }}>
            {userLocal?.displayName.replace(/\b\w/g, (match) => match.toUpperCase())}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;


