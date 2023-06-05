import React, { useState } from "react";

// Create a new context
const Context = React.createContext();
export const Provider = ({ children }) => {
  // Define the state and its initial value
  const [roomID, setRoomID] = useState(null);
  const [currentChat, setCurrentChat] = useState("");
  const [isActive, setIsActive] = useState(null);
  const [list, setList] = useState([]);
const[ recepient_id, setRecepientId] = useState("")
const [recepient_status,setRecepientStatus] = useState(true)
const[notification_open, setNotificationOpen] = useState(false)


  const contextValue = {
    roomID,
    setRoomID,
    currentChat,
    setCurrentChat,
    isActive,
    setIsActive,
    list,
    setList,
    recepient_id, 
    setRecepientId,
    recepient_status,
    setRecepientStatus,
    notification_open,
    setNotificationOpen
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
// Export the context and a custom hook for consuming the context
export default Context;
