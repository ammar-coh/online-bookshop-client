import "./App.css";
import Product from "./product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getUser,
  sign_in_reducer,
  getProductsToCartSaga,
} from "./redux/actions";
import Login_page from "./login_page";
import Sign_up from "./sign_up";
import ProtectedAllRoute from "./routes/protected";
import ScrollToTop from "./scrollToTop";
import { socket } from "./socket";
import { Provider } from "./context";
import { notification_real_time, get_my_notifications_saga } from './redux/actions/index'
import { delete_notification } from './redux/actions/index'

function App() {
  const dispatch = useDispatch();
  const [userAvailble, setUserAvailable] = useState(false);
  const uname = useSelector((state) => state.user_login.details);
  const user = useSelector((state) => state.user_login.details);
  const messages = useSelector((state) => state.chat);

  useEffect(() => {
    user?.user ? setUserAvailable(true) : setUserAvailable(false);
  }, [user?.user]);

  //
  useEffect(() => {
    localStorage.getItem("authorization") && dispatch(getUser());
  }, [uname?.user?.displayName]);

  //
  useEffect(() => {
    localStorage.getItem("authorization") &&
      dispatch(
        sign_in_reducer(JSON.parse(localStorage.getItem("for_reducer")))
      );
  }, []);

  //
  useEffect(async () => {
    let user_id = await JSON.parse(localStorage.getItem("for_reducer"))
    socket.on('connect', () => {
    });
    socket.emit('setUserId', { userId: await user_id?.user?.id });
    return () => {
      socket.disconnect();
    };
  }, []);

  //
  useEffect(() => {
    localStorage.getItem("authorization") && dispatch(getProductsToCartSaga());
  }, [uname?.user?.displayName]);

  //
  useEffect(() => {
    socket.on("notification_message", async (data) => {
      dispatch(notification_real_time(data))
    });
  }, [uname, messages?.messages]);

  //
  useEffect(() => {
    socket.on("notification_delete", async (data) => {
      console.log("notification_delete", data)
      dispatch(delete_notification(data))
    });
  }, []);

  //
  useEffect(async () => {
    let id = JSON.parse(localStorage.getItem("for_reducer"))
    localStorage.getItem("authorization") && dispatch(get_my_notifications_saga(id?.user?.id))
  }, [uname]);


  //
  useEffect(() => {
    let roomID = localStorage.getItem("roomID")
    let userID = JSON.parse(localStorage.getItem("for_reducer"))
    socket.emit("leave_private_room", { roomID, userID: userID?.user?.id });
  }, []);


  return (
    <div className="app">
      {
        <Provider>
          <Router>
            <Switch>
              <Route path="/login_page" exact component={Login_page} />
              <Route path="/sign_up" exact component={Sign_up} />

              {user.user && (
                <ProtectedAllRoute
                  user={user}
                  setUserAvailable={setUserAvailable}
                  userAvailble={userAvailble}
                  component={Product}
                  socket={socket}
                  path="/"
                />
              )}

              <Route path="*" component={Login_page} />
              <ScrollToTop />
            </Switch>
            <ScrollToTop />
          </Router>
        </Provider>
      }
    </div>
  );
}

export default App;
