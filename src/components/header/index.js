import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Route, Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Cart from "./Cart";
import Sign_in from "./sign_in";
import {
  sign_in_reducer,
  addToCartReducer,
  resetCart,
} from "../../redux/actions";
import { AiOutlineHome } from "react-icons/ai";
import { clearChat } from "../../redux/actions/index"; //"../src/redux/actions/index";
import Chat_Notifications from "./chat_notification";
import Context from "../../context";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#131921",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    zIndex: 3,
    height: "65px",
  },

  home_link: {
    textDecoration: "none",
    display: "flex",
  },
  sign_out: {
    backgroundColor: "#FF9900",
    fontSize: "10px",
    height: "25px",
  },
  icon: {
    fontSize: "20px",
    color: "white",
    width: "20px",
    margin: "auto",
  },
  chatNotificationContainer: {
    padding: "13px",
    // border: "1px solid white",
  },
  // chatNotification:{color:"red"},
  notificationMailIcon: { color: "white" },

  signOutButtonContainer: {
    justifyContent: "center",
    width: "100%",
    padding: "20px",
    display: "flex",
  },
  homeIconMainContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
});

function Header({ setUserAvailable }) {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user_login.details);
  const [isSticky, setIsSticky] = useState(false);
  const {
    roomID,
    setRoomID,
    currentChat,
    setCurrentChat,
    isActive,
    setIsActive,
    recepient_status,
  } = useContext(Context);
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
  }, []);
  return (
    <div
      className={classes.root}
      style={isSticky ? { position: "fixed", top: 0, width: "100%" } : {}}
    >
      <div className={classes.homeIconMainContainer}>
        {" "}
        <Button
          onClick={() => {
            dispatch(clearChat());
            setIsActive(false);
            setCurrentChat("");
          }}
        >
          <Link className={classes.home_link} to="/">
            <div className={classes.icon}>
              {" "}
              <AiOutlineHome />
            </div>
          </Link>
        </Button>
      </div>
      <Sign_in />
      <Cart />
      <div className={classes.chatNotificationContainer}>
        <Chat_Notifications
          roomID={roomID}
          setRoomID={setRoomID}
          currentChat={currentChat}
          setCurrentChat={setCurrentChat}
          isActive={isActive}
          setIsActive={setIsActive}
          list={list}
          recepient_status={recepient_status}
        />
      </div>

      <div className={classes.signOutButtonContainer}>
        {Object.keys(user).length > 0 ? (
          <Button
            className={classes.sign_out}
            size="small"
            onClick={() => {
              dispatch(sign_in_reducer({}));
              dispatch(resetCart());
              localStorage.removeItem("authorization");
              localStorage.removeItem("cart");
              localStorage.removeItem("for_reducer");
              dispatch(clearChat());
              history.push("/login_page");
            }}
          >
            {" "}
            Sign out{" "}
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
