import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
//import { mergeClasses } from '@material-ui/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    border: "none",
    "&:hover": {
      border: " none",
    },
  },
  user: {
    textDecoration: "none",
    color: "white",
    border: "1px solid blue",
  },
  hello: {
    color: "white",
  },
  login_link: {
    textDecoration: "none",
    color: "white",
  },
  current_user: {
    color: "white",
    paddingLeft: "5px",
  },
});

function Sign_in() {
  const classes = useStyles();
  const user = useSelector((state) => state.user_login.details);
  return (
    <div className={classes.root}>
      <p className={classes.hello}>Hello,</p>

      {user?.user?.displayName && user?.user?.displayName?.length > 0 ? (
        <p className={classes.current_user}>{user?.user?.displayName}</p>
      ) : (
        <div>
          <p className={classes.user}>
            {" "}
            <Link className={classes.login_link} to="/login_page">
              Sign_in
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default Sign_in;
