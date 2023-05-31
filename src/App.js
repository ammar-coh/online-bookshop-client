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

// import { FaWindows } from 'react-icons/fa';

function App() {
  const dispatch = useDispatch();
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);
  const [userAvailble, setUserAvailable] = useState(false);
  const counts = useSelector((state) => state.checkout);
  const uname = useSelector((state) => state.user_login.details);
  const user = useSelector((state) => state.user_login.details);
  useEffect(() => {
    user?.user ? setUserAvailable(true) : setUserAvailable(false);
  }, [user?.user]);

  useEffect(() => {
    localStorage.getItem("authorization") && dispatch(getUser());
  }, [uname?.user?.displayName]);

  useEffect(() => {
    localStorage.getItem("authorization") &&
      dispatch(
        sign_in_reducer(JSON.parse(localStorage.getItem("for_reducer")))
      );
  }, []);
  useEffect(() => {
    localStorage.getItem("authorization") && dispatch(getProductsToCartSaga());
  }, [uname?.user?.displayName]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    socket.on("notification_message", async (data) => {
      console.log("notification messge received", data);
      // await dispatch(notification(data));
    });
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
