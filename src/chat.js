import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MessageIcon from "@mui/icons-material/Message";
import {  Link } from "react-router-dom";
import axios from "axios";
import Context from "./context";
const useStyles = makeStyles({
  root: {  position: "absolute", right: "135px", color: "#ffffff" },
  link: { textDecoration: "none", color: "#ffffff" },
});

function Chat({}) {
  const { setList } = useContext(Context);
  const classes = useStyles();
  const allUsers = () => {
    axios.get(`http://localhost:8081/users/userList`).then((response) => {
      const allUserList = response.data;
      setList(allUserList);
    });
  };
  useEffect(() => {
    localStorage.getItem("authorization") && allUsers();
  }, []);
  return (
    <div className={classes.root}>
      <Link
        className={classes.link}
        to={{
          pathname: "/chatroom",
        }}
      >
        {" "}
        <MessageIcon />
      </Link>
    </div>
  );
}

export default Chat;
