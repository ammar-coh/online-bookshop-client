import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedAllRoute = ({
  userAvailble,
  setUserAvailable,
  component: Component,
  socket:socket,
  user,
  loading,
  ...rest
}) => {
 



  // let paramId = rest.computedMatch.params.id;
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    // loading ? (
    //   <LoaderComponent />
    // ) : (
    <Route
      {...rest}
      render={(props) =>
        user?.user   ? (
          <Component {...props} setUserAvailable={setUserAvailable} socket={socket} />
        ) : (
          <Redirect to="/login_page" />
        )
      }
    />
    // )
  );
};

export default ProtectedAllRoute;
// Object.keys(user).length > 0
