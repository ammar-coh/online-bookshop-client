import React, { useState, useEffect, useContext, useRef } from "react";
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
import { useStylesIndex } from './indexStyle'
import { fetchSearchResult } from './api'
import SearchResultsDisplay from './searchDisplayWindow'
import Loading from '../loading'
import Card from "@material-ui/core/Card";
import { Typography } from "@mui/material";
import { Diversity1 } from "@mui/icons-material";
function Header() {
  const url = process.env.REACT_APP_BASE_URL
  const userLocal = JSON.parse(localStorage.getItem("userInfo"))
  const [searchErrorMessage, setErrorMessage] = useState(null)
  const [searchLoading, setSearchLoading] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const classes = useStylesIndex({ searchResult, searchLoading });
  const [searchKey, setSearchKey] = useState('')
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

  const containerRef = useRef(null);
  // Function to handle clicks outside the Card
  function handleClickOutside(event) {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setErrorMessage(null)
    }
  }

  // Attach click event listener when the component mounts
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
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
    axios.get(`${url}users/userList`).then((response) => {
      const allUserList = response.data;
      setList(allUserList);
    });
  };
  useEffect(() => {
    localStorage.getItem("authorization") && allUsers();
  }, [notification_open]);
  const handleSearchChange = (e) => {
    setSearchKey(e.target.value);
    if (e.target.value !== '') {
      fetchSearchResult(e.target.value, setSearchResult, setSearchLoading, setErrorMessage)
    }
    else {
      setSearchResult([])
      setSearchKey('')
      setErrorMessage(null)
    }
  }
  const handleChange = () => {
    if (searchKey !== '') {
      fetchSearchResult(searchKey, setSearchResult, setSearchLoading, setErrorMessage)
    }
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      handleChange()
    }}
    >   <div
      className={classes.root}
      style={isSticky ? { position: "fixed", top: 0, width: "100%" } : {}}
    >
        <div className={classes.homeIconMainContainer}>
          {" "}
          <NavBarRoute />
        </div>
        <div className={classes.searchBarDiv}>
          <div>
            <InputBase
              onChange={(event) => {
                handleSearchChange(event)
              }}
              value={searchKey}
              className={classes.searchBar}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search google maps' }}
              startAdornment={
                <IconButton type="submit"
                  sx={{ p: '10px' }}
                  aria-label="search">
                  <SearchIcon onClick={handleChange} />
                </IconButton>}
            />
          </div>
          <div style={{
            display: "flex",
            position: "absolute",
            zIndex: 9999,
            width: "482px",
            left: '127px',
            borderTopLeftRadius: searchResult.length > 0 ? "0px" : null,
          }}>
            {searchLoading ?
              <Card
                style={{
                  background: "#fff",
                  display: "flex",
                  position: "absolute",
                  zIndex: 9999,
                  width: "482px",
                  left: '0px',
                }}>
                <Loading
                  appScreenPadding="search" appScreenSize='true' />
              </Card> :
              searchErrorMessage != null ? <Card
                style={{
                  background: "#fff",
                  display: "flex",
                  position: "absolute",
                  zIndex: 9999,
                  width: "482px",
                  left: '0px',
                  justifyContent: "center",
                  padding: "65px"
                }}
                ref={containerRef}>
                <Typography
                  style={{
                    fontFamily: "Montserrat, sans-se",
                    fontSize: "20px",
                    color: "#d22129",
                    fontWeight: 700
                  }}>{searchErrorMessage}</Typography>
              </Card> :
                searchResult.length > 0 ?
                  <SearchResultsDisplay
                    searchResult={searchResult}
                    setSearchResult={setSearchResult}
                    setSearchKey={setSearchKey}
                  />
                  : null
            }
          </div>
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
             className={classes.cartContainerButton}
              onClick={() => {
                dispatch(clearChat());
                setIsRoomActive(null);
                setCurrentChat("");
                setCurrentChatAvatar("")
                leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
              }}>
                <div>
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
                setActiveSideBar={setActiveSideBar} />
                </div>
            </Button>
          
          </div>
          <div className={classes.profile}>
            <AccountMenu profileUpdate={profileUpdate} setProfileUpdate={setProfileUpdate} />
          </div>
          <div className={classes.userName}>
            <span className={classes.userNameText}>
              {userLocal?.displayName.replace(/\b\w/g, (match) => match.toUpperCase())}
            </span>
          </div>
        </div>
      </div>
    </form >
  );
}

export default Header;


