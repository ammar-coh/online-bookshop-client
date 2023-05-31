import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { sign_in_saga, getUser, setUser } from "./redux/actions";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    width: "450px",
    border: " 1px solid black",
    marginLeft: "500px",
    marginTop: "100px",
    height: "300px",
    borderColor: "#D3D3D3",
    borderRadius: "4px",
  },
  sign_in: {
    width: "180px",
    paddingLeft: "50px",
    marginLeft: "47px",
  },
  email_heading: {
    marginLeft: "100px",

    width: "60px",
    marginBottom: "1px",
  },
  email: {
    marginLeft: "100px",
  },

  password_heading: {
    marginLeft: "100px",

    width: "60px",
    marginBottom: "1px",
  },
  password: {
    marginLeft: "100px",
  },
  sign_up: {
    marginLeft: "100px",

    width: "60px",
    marginBottom: "1px",
  },
  new_user: {
    marginLeft: "100px",
  },

  signInButton: {
    backgroundColor: "#FF9900",
    color: "#000000",
    marginLeft: 12,
    fontSize: "10px",
    marginTop: "10px",
    marginLeft: "150px",
  },
  container: {
    width: "300px",
    marginLeft: "40px",
  },
  link_signup: {
    textDecoration: "none",
  },
  signUpButton: {
    backgroundColor: "#FF9900",
    color: "#000000",
    marginLeft: 12,
    fontSize: "10px",
    marginTop: "30px",
    marginLeft: "150px",
  },
});

function Login_page() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user_login.details);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const current_user_email = email;
  const current_user_password = password;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.sign_in}>Sign in</h1>
        <h4 className={classes.email_heading}>Email</h4>
        <input className={classes.email} onChange={getEmail} type="text" />
        <h4 className={classes.password_heading}>Password</h4>
        <input
          className={classes.password}
          onChange={getPassword}
          type="password"
        />
        <br />
        <Button
          onClick={() => {
            dispatch(
              sign_in_saga({
                email: current_user_email,
                password: current_user_password,
                history,
              })
            );
          }}
          className={classes.signInButton}
          size="small"
        >
          Sign in
        </Button>
        <Link className={classes.link_signup} to="/Sign_up">
          <Button className={classes.signUpButton} size="small">
            Sign up
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Login_page;
