// ThemeContext.js
import React, { useState } from "react";

// Create a new context
const Context = React.createContext();
export const Provider = ({ children }) => {
  // Define the state and its initial value
  const [roomID, setRoomID] = useState("");
  const [currentChat, setCurrentChat] = useState("");
  const [isActive, setIsActive] = useState("");
  const [list, setList] = useState([]);
const[ recepient_id, setRecepientId] = useState("")
const [recepient_status,setRecepientStatus] = useState(true)
  // Function to toggle the theme

  // Provide the theme and toggleTheme function as the context value
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
    setRecepientStatus
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
// Export the context and a custom hook for consuming the context
export default Context;
