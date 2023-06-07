import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Cart from "./Cart";
import Sign_in from "./sign_in";
import {
  sign_in_reducer,
  resetCart,
} from "../../redux/actions";
import { AiOutlineHome } from "react-icons/ai";
import { clearChat } from "../../redux/actions/index"; //"../src/redux/actions/index";
import Chat_Notifications from "./chat_notification";
import Context from "../../context";
import axios from "axios";
import { socket } from "../../socket";

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
    display: "flex",
    padding: "14px 0px 13px 0px",
    width: "100%",
    justifyContent: "center"
  },
  notificationMailIcon: { color: "white" },
  sign_in_container: {
    width: "100%",
    display:"flex",
    justifyContent:"center"

  },
  signOutButtonContainer: {
    justifyContent: "flex-start",
    width: "100%",
    padding: "20px",
    display: "flex",
  },
  homeIconMainContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    padding: "20px",
  },
  cart_icon: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },

});

function Header() {
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
    notification_open,
    setNotificationOpen,
    setRecepientId
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
        <Button
          onClick={() => {
            dispatch(clearChat());
            setIsActive(false);
            setCurrentChat("");
            leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
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
      <div className={classes.sign_in_container}>
        <Sign_in />
      </div>
      <div className={classes.cart_icon}>
        <Button
          onClick={() => {
            dispatch(clearChat());
            setIsActive(false);
            setCurrentChat("");
            leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
          }}>
          <Cart />
        </Button>
      </div>

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
          setNotificationOpen={setNotificationOpen}
          setRecepientId={setRecepientId}
        />
      </div>

      <div className={classes.signOutButtonContainer}>
        {Object.keys(user).length > 0 ? (
          <Button
            className={classes.sign_out}
            size="small"
            onClick={() => {
              leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
              dispatch(sign_in_reducer({}));
              dispatch(resetCart());
              localStorage.removeItem("authorization");
              localStorage.removeItem("cart");
              localStorage.removeItem("for_reducer");
              localStorage.removeItem("roomID")
              dispatch(clearChat());
              setIsActive(null)
              dispatch(clearChat());
              setCurrentChat("")
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
