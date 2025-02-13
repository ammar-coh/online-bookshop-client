import React, { useState, useEffect, useContext, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";
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
import Card from "@mui/material/Card";
import { Typography, Box, Grid } from "@mui/material";
import Hidden from '@material-ui/core/Hidden';

function Header() {
  const url = process.env.REACT_APP_BASE_URL
  const userLocal = JSON.parse(localStorage.getItem("userInfo"))
  const [searchErrorMessage, setErrorMessage] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const classes = useStylesIndex({ searchResult, searchLoading });
  const [searchKey, setSearchKey] = useState('');
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user_login.details);
  const { roomID, setRoomID, currentChat, setCurrentChat, isRoomActive, setIsRoomActive, recepient_status, setNotificationOpen, setRecepientId } = useContext(Context);

  const containerRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setErrorMessage(null);
    }
  };

  const handleSearchChange = (e) => {
    setSearchKey(e.target.value);
    if (e.target.value !== '') {
      fetchSearchResult(e.target.value, setSearchResult, setSearchLoading, setErrorMessage);
    } else {
      setSearchResult([]);
      setSearchKey('');
      setErrorMessage(null);
    }
  };

  return (
    <Box component="form" onSubmit={(e) => { e.preventDefault(); }}>
      {/* Main Header Container */}
      <Grid container alignItems={{xs:'end',sm:'center'}} sx={{
        // border:'1px solid black',
        height:{ xs:'100px',sm:'64.5px'},
        width: { "@media (max-width: 375px)": {
          width: "calc(100% - 53px)", // Apply only on screens ≤ 375px
        },
        "@media (max-width: 320px)": {
          width: "calc(100% - 53px)", // Apply only on screens ≤ 375px
        },
          xs:'calc(100% - 44px)',sm:'100%'}
        // width:'100px'
        // width: '100vw',  // Ensures it stays within the viewport
        // margin: 0,      // Removes any unwanted spacing
        // overflow: 'hidden' // Prevents overflow
      }}>

        {/* Left Section - Navbar Route */}
        <Hidden smDown>
          <Grid item xs={3} md={3} sx={{
            // border: '1px solid blue',
            pl: { xs: '10px', md: '20px' }
          }}>
            <NavBarRoute />
          </Grid>
        </Hidden>
        {/*mobile view components */}
        <Hidden smUp>
          <Box display='block' sx={{
            // border:'1px solid #fff', 
            width:"100%"}}>
            <Box display='flex'>
              <Grid item display='flex' xs={12} sm={7} md={6} lg={6} sx={{
                justifyContent: { xs: 'center' },
                // border: '1px solid blue',
              }}>
                <Box display="flex" alignItems="center"
                  sx={{
                    width: { xs: '400px', md: '340px' },
                    pr:{xs:'20px',sm:0}

                  }}>
                  <InputBase
                    onChange={handleSearchChange}
                    value={searchKey}
                    className={classes.searchBarMobile}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search..."
                    startAdornment={
                      <IconButton type="submit" sx={{ p: '10px' }}>
                        <SearchIcon />
                      </IconButton>
                    }
                  />
                </Box>
                {searchLoading ? (
                  <Card sx={{ position: "absolute", zIndex: 9999, width: "482px", left: "0px" }}>
                    <Loading appScreenPadding="search" appScreenSize='true' />
                  </Card>
                ) : searchErrorMessage ? (
                  <Card sx={{ position: "absolute", zIndex: 9999, width: "482px", left: "0px", justifyContent: "center", p: 4 }} ref={containerRef}>
                    <Typography sx={{ fontSize: "20px", color: "#d22129", fontWeight: 700 }}>
                      {searchErrorMessage}
                    </Typography>
                  </Card>
                ) : searchResult.length > 0 ? (
                  <SearchResultsDisplay searchResult={searchResult} setSearchResult={setSearchResult} setSearchKey={setSearchKey} />
                ) : null}
              </Grid>
            </Box>
            {/* Right Section - Chat Notifications & Cart */}
            <Box display='flex'>
              <Grid item xs={8}  sx={{
                // border: '1px solid green',
              }}>
                <Box
                  display="flex" alignItems="center" sx={{
                    justifyContent: 'space-between',
                    paddingRight: { md: '4px', lg: '0px', xl: '4px' },
                    // border:'1px solid #fff'
                  }}>
                  {/* Chat Notifications */}
                  <Box
                    sx={{
                      // border: '1px solid green',
                      width: { xs: '50%', sm: '50%', md: '100%', xl: '100%' },
                      display: 'flex',
                      justifyContent: { xs:'start', sm: 'end', md: 'start', lg: 'end' }
                    }}
                  >
                    <Chat_Notifications
                      roomID={roomID}
                      setRoomID={setRoomID}
                      currentChat={currentChat}
                      setCurrentChat={setCurrentChat}
                      isRoomActive={isRoomActive}
                      setIsRoomActive={setIsRoomActive}
                      list={list}
                      recepient_status={recepient_status}
                      setNotificationOpen={setNotificationOpen}
                      setRecepientId={setRecepientId}
                    />
                  </Box>
                  {/* Cart */}
                  <Box sx={{
                    display: 'flex',
                    // border: '1px solid orange',
                    justifyContent: { xs: 'start', sm: 'center', md: 'start', lg: 'center', xl: 'start' },
                    width: { xs: '30%', sm: '25%', md: '100%', xl: '50%' },
                  }}>
                    <Cart />
                  </Box>
                  {/* Profile Menu */}
                  <Box sx={{
                    width: { xs: '20%', sm: '25%', md: '100%', xl: '33.33%' },
                    display: 'flex',
                    // border:'1px solid blue',
                    justifyContent: { xs: 'end', sm: 'center', md: 'start', lg: 'center', xl: 'end' }
                  }}>
                    <AccountMenu />
                  </Box>
                </Box>
              </Grid>
              <Grid xs={4} display='flex' alignItems="center"
               sx={{
                // border: '1px solid yellow',

                paddingLeft:{sm:'0px', xs:'5px'}
              }} >
                <Box display='flex' sx={{ p: 0, marginLeft: { sm: '4px', md: 0 } }} alignItems='center' >

                  <Typography sx={{ fontSize: { xs: '12px', sm: '12px', md: '14px', xl: '16px' } }}>
                    {userLocal?.displayName.replace(/\b\w/g, (match) => match.toUpperCase())}
                  </Typography>

                </Box>
              </Grid>
            </Box>
          </Box>
        </Hidden>

        {/* Middle Section - Search Bar */}
        <Hidden xsDown>
          <Grid item display='flex' xs={6} sm={7} md={6} lg={6} sx={{
            justifyContent: { xs: 'center' },
            // border: '1px solid white',

          }}>
            <Box display="flex" alignItems="center"
              sx={{
                width: { xs: '400px', md: '340px' },

              }}>
              <InputBase
                onChange={handleSearchChange}
                value={searchKey}
                className={classes.searchBar}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                startAdornment={
                  <IconButton type="submit" sx={{ p: '10px' }}>
                    <SearchIcon />
                  </IconButton>
                }
              />
            </Box>
            {searchLoading ? (
              <Card sx={{ position: "absolute", zIndex: 9999, width: "482px", left: "0px" }}>
                <Loading appScreenPadding="search" appScreenSize='true' />
              </Card>
            ) : searchErrorMessage ? (
              <Card sx={{ position: "absolute", zIndex: 9999, width: "482px", left: "0px", justifyContent: "center", p: 4 }} ref={containerRef}>
                <Typography sx={{ fontSize: "20px", color: "#d22129", fontWeight: 700 }}>
                  {searchErrorMessage}
                </Typography>
              </Card>
            ) : searchResult.length > 0 ? (
              <SearchResultsDisplay searchResult={searchResult} setSearchResult={setSearchResult} setSearchKey={setSearchKey} />
            ) : null}
          </Grid>
          {/* Right Section - Chat Notifications & Cart */}
          <Grid item xs={4} sm={4} md={2} lg={2} sx={{
            // border: '1px solid green',
          }}>
            <Box
              display="flex" alignItems="center" sx={{
                justifyContent: 'space-between',
                paddingRight: { md: '4px', lg: '0px', xl: '4px' },
                // border:'1px solid #fff'
              }}>
              {/* Chat Notifications */}
              <Box
                sx={{
                  // border: '1px solid green',
                  width: { xs: '50%', sm: '50%', md: '100%', xl: '100%' },
                  display: 'flex',
                  justifyContent: { sm: 'end', md: 'start', lg: 'end' }
                }}
              >
                <Chat_Notifications
                  roomID={roomID}
                  setRoomID={setRoomID}
                  currentChat={currentChat}
                  setCurrentChat={setCurrentChat}
                  isRoomActive={isRoomActive}
                  setIsRoomActive={setIsRoomActive}
                  list={list}
                  recepient_status={recepient_status}
                  setNotificationOpen={setNotificationOpen}
                  setRecepientId={setRecepientId}
                />
              </Box>
              {/* Cart */}
              <Box sx={{
                display: 'flex',
                // border: '1px solid orange',
                justifyContent: { xs: 'center', sm: 'center', md: 'start', lg: 'center', xl: 'start' },
                width: { xs: '25%', sm: '25%', md: '100%', xl: '50%' },
              }}>
                <Cart />
              </Box>
              {/* Profile Menu */}
              <Box sx={{
                width: { xs: '25%', sm: '25%', md: '100%', xl: '33.33%' },
                display: 'flex',
                // border:'1px solid blue',
                justifyContent: { xs: 'center', sm: 'center', md: 'start', lg: 'center', xl: 'end' }
              }}>
                <AccountMenu />
              </Box>
            </Box>
          </Grid>
          <Grid xs={2} sm={1} md={1} sx={{
            // border: '1px solid yellow',
          }} >
            <Box display='flex' sx={{ p: 0, marginLeft: { sm: '4px', md: 0 } }} alignItems='center' >

              <Typography sx={{ fontSize: { xs: '12px', sm: '12px', md: '14px', xl: '16px' } }}>
                {userLocal?.displayName.replace(/\b\w/g, (match) => match.toUpperCase())}
              </Typography>

            </Box>
          </Grid>
        </Hidden>

      </Grid>
    </Box>
  );
}

export default Header;





// import React, { useState, useEffect, useContext, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Cart from "./Cart";
// import Chat_Notifications from "./chat_notification";
// import Context from "../../context";
// import axios from "axios";
// import { socket } from "../../socket";
// import NavBarRoute from './headerNavTitle'
// import InputBase from '@mui/material/InputBase';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountMenu from './profile'
// import { useStylesIndex } from './indexStyle'
// import { fetchSearchResult } from './api'
// import SearchResultsDisplay from './searchDisplayWindow'
// import Loading from '../loading'
// import Card from "@material-ui/core/Card";
// import { Typography } from "@mui/material";
// import Box from '@mui/material/Box';

// import Grid from '@mui/material/Grid';
// function Header() {
//   const url = process.env.REACT_APP_BASE_URL
//   const userLocal = JSON.parse(localStorage.getItem("userInfo"))
//   const [searchErrorMessage, setErrorMessage] = useState(null)
//   const [searchLoading, setSearchLoading] = useState(false)
//   const [searchResult, setSearchResult] = useState([])
//   const classes = useStylesIndex({ searchResult, searchLoading });
//   const [searchKey, setSearchKey] = useState('')
//   const [list, setList] = useState([]);
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user_login.details);
//   const [isSticky, setIsSticky] = useState(false);
//   const {
//     roomID, setRoomID,
//     currentChat, setCurrentChat,
//     isRoomActive, setIsRoomActive,
//     recepient_status,
//     notification_open, setNotificationOpen,
//     setRecepientId,
//     profileUpdate,
//     setProfileUpdate,
//     setCurrentChatAvatar,
//     setSelectedSideBarMenu,
//     setHomeSideBarActive,
//     setSelectedSideBarMenuHome,
//     setAdminSideBarActive,
//     setProfileSideBarActive,
//     setAnchorElHome,
//     setAnchorElAdmin,
//     setAnchorElProfile,
//     setSubMenuItemActiveState,
//     setBookClubMenuItem,
//     setActiveSideBar,
//     setNavBarRoute
//   } = useContext(Context);

//   const containerRef = useRef(null);
//   // Function to handle clicks outside the Card
//   function handleClickOutside(event) {
//     if (containerRef.current && !containerRef.current.contains(event.target)) {
//       setErrorMessage(null)
//     }
//   }

//   // Attach click event listener when the component mounts
//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);
//   const leaveAllRooms = async (data) => {

//     await socket.emit("leave_private_room", {
//       roomID: data.roomID,
//       userID: data.userID,
//     });
//   }
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.pageYOffset > 0);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const allUsers = () => {
//     axios.get(`${url}/users/userList`).then((response) => {
//       const allUserList = response.data;
//       setList(allUserList);
//     });
//   };
//   useEffect(() => {
//     localStorage.getItem("authorization") && allUsers();
//   }, [notification_open]);
//   const handleSearchChange = (e) => {
//     setSearchKey(e.target.value);
//     if (e.target.value !== '') {
//       fetchSearchResult(e.target.value, setSearchResult, setSearchLoading, setErrorMessage)
//     }
//     else {
//       setSearchResult([])
//       setSearchKey('')
//       setErrorMessage(null)
//     }
//   }
//   const handleChange = () => {
//     if (searchKey !== '') {
//       fetchSearchResult(searchKey, setSearchResult, setSearchLoading, setErrorMessage)
//     }
//   }

//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault(); // Prevent the default form submission behavior
//       handleChange()
//     }}
//     >   <Grid
//       className={classes.root}
//       // style={isSticky ? { position: "fixed", top: 0, width: "100%" } : {}}
//     >
//         <div className={classes.homeIconMainContainer}>
//           {" "}
//           <NavBarRoute />
//         </div>
//         <div className={classes.searchBarDiv}>
//           <div>
//             <InputBase
//               onChange={(event) => {
//                 handleSearchChange(event)
//               }}
//               value={searchKey}
//               className={classes.searchBar}
//               sx={{ ml: 1, flex: 1 }}
//               placeholder="Search..."
//               inputProps={{ 'aria-label': 'search google maps' }}
//               startAdornment={
//                 <IconButton type="submit"
//                   sx={{ p: '10px' }}
//                   aria-label="search">
//                   <SearchIcon onClick={handleChange} />
//                 </IconButton>}
//             />
//           </div>
//           <div style={{
//             display: "flex",
//             position: "absolute",
//             zIndex: 9999,
//             width: "482px",
//             left: '127px',
//             borderTopLeftRadius: searchResult.length > 0 ? "0px" : null,
//           }}>
//             {searchLoading ?
//               <Card
//                 style={{
//                   background: "#fff",
//                   display: "flex",
//                   position: "absolute",
//                   zIndex: 9999,
//                   width: "482px",
//                   left: '0px',
//                 }}>
//                 <Loading
//                   appScreenPadding="search" appScreenSize='true' />
//               </Card> :
//               searchErrorMessage != null ? <Card
//                 style={{
//                   background: "#fff",
//                   display: "flex",
//                   position: "absolute",
//                   zIndex: 9999,
//                   width: "482px",
//                   left: '0px',
//                   justifyContent: "center",
//                   padding: "65px"
//                 }}
//                 ref={containerRef}>
//                 <Typography
//                   style={{
//                     fontFamily: "Montserrat, sans-se",
//                     fontSize: "20px",
//                     color: "#d22129",
//                     fontWeight: 700
//                   }}>{searchErrorMessage}</Typography>
//               </Card> :
//                 searchResult.length > 0 ?
//                   <SearchResultsDisplay
//                     searchResult={searchResult}
//                     setSearchResult={setSearchResult}
//                     setSearchKey={setSearchKey}
//                   />
//                   : null
//             }
//           </div>
//         </div>
//         <div className={classes.headerThirdContainer}>
//           <div className={classes.chatNotificationContainer}>
//             <Chat_Notifications
//               roomID={roomID}
//               setRoomID={setRoomID}
//               currentChat={currentChat}
//               setCurrentChat={setCurrentChat}
//               setCurrentChatAvatar={setCurrentChatAvatar}
//               isRoomActive={isRoomActive}
//               setIsRoomActive={setIsRoomActive}
//               list={list}
//               recepient_status={recepient_status}
//               setNotificationOpen={setNotificationOpen}
//               setRecepientId={setRecepientId}
//             />
//           </div>
//           <div className={classes.cartContainer}>
//                 <div>
//               <Cart setSelectedSideBarMenu={setSelectedSideBarMenu}
//                 setHomeSideBarActive={setHomeSideBarActive}
//                 setSelectedSideBarMenuHome={setSelectedSideBarMenuHome}
//                 setAdminSideBarActive={setAdminSideBarActive}
//                 setProfileSideBarActive={setProfileSideBarActive}
//                 setAnchorElHome={setAnchorElHome}
//                 setAnchorElAdmin={setAnchorElAdmin}
//                 setAnchorElProfile={setAnchorElProfile}
//                 setSubMenuItemActiveState={setSubMenuItemActiveState}
//                 setBookClubMenuItem={setBookClubMenuItem}
//                 setNavBarRoute={setNavBarRoute}
//                 setActiveSideBar={setActiveSideBar}
//                 setIsRoomActive={setIsRoomActive}
//                 roomID={roomID}
//                 setCurrentChatAvatar={ setCurrentChatAvatar}
//                 setCurrentChat={ setCurrentChat}
//                 leaveAllRooms={leaveAllRooms}/>
//                 </div>
//           </div>
//           <div className={classes.profile}>
//             <AccountMenu profileUpdate={profileUpdate} setProfileUpdate={setProfileUpdate} />
//           </div>
// <div className={classes.userName}>
//   <span className={classes.userNameText}>
//     {userLocal?.displayName.replace(/\b\w/g, (match) => match.toUpperCase())}
//   </span>
// </div>
//         </div>
//       </Grid>
//     </form >
//   );
// }

// export default Header;


