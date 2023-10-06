import React, { useState } from "react";
const Context = React.createContext();
export const Provider = ({ children }) => {
  const[loader,setLoader] = useState(false)
  const [roomID, setRoomID] = useState("");
  const [currentChat, setCurrentChat] = useState("");
  const [currentChatAvatar, setCurrentChatAvatar] = useState("");
  const [isRoomActive, setIsRoomActive] = useState(null);
  const [list, setList] = useState([]);
  const [recepient_id, setRecepientId] = useState("")
  const [recepient_status, setRecepientStatus] = useState(true)
  const [notification_open, setNotificationOpen] = useState(false)
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false)
  const [selectedSideBarMenu, setSelectedSideBarMenu] = useState(null);
  const [homeSideBarActive, setHomeSideBarActive] = useState(null)
  const [adminSideBarActive, setAdminSideBarActive] = useState(null)
  const [profileSideBarActive, setProfileSideBarActive] = useState(null)
  const [anchorElHome, setAnchorElHome] = React.useState(false);
  const [anchorElAdmin, setAnchorElAdmin] = useState(false);
  const [anchorElProfile, setAnchorElProfile] = useState(false);
  const [subMenuItemActiveState, setSubMenuItemActiveState] = useState("")
  const [navBarRoute, setNavBarRoute] = useState("Home")
  const [allBooks, setAllBooks] = useState([])
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertContent, setAlertContent] = useState({
    type: "",
    message: ","
  })
  const [cover, setCover] = useState([])
  const [profileUpdate, setProfileUpdate] = useState({})
  const[receieveMessage, setReceiveMessage] =useState(false)
  const contextValue = {
    loader,setLoader,
    roomID, setRoomID,
    currentChat, setCurrentChat,
    isRoomActive, setIsRoomActive,
    list, setList,
    recepient_id, setRecepientId,
    recepient_status, setRecepientStatus,
    notification_open, setNotificationOpen,
    sideBarCollapsed, setSideBarCollapsed,
    selectedSideBarMenu, setSelectedSideBarMenu,
    homeSideBarActive, setHomeSideBarActive,
    adminSideBarActive, setAdminSideBarActive,
    profileSideBarActive, setProfileSideBarActive,
    anchorElHome, setAnchorElHome,
    anchorElAdmin, setAnchorElAdmin,
    anchorElProfile, setAnchorElProfile,
    subMenuItemActiveState, setSubMenuItemActiveState,
    navBarRoute, setNavBarRoute,
    allBooks, setAllBooks,
    alertOpen, setAlertOpen,
    alertContent, setAlertContent,
    cover, setCover,
    profileUpdate, setProfileUpdate,
    currentChatAvatar, setCurrentChatAvatar,
    receieveMessage, setReceiveMessage
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
export default Context;
