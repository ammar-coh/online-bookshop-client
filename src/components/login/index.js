import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { sign_in_saga } from "../../redux/actions/index";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TextField from '@mui/material/TextField'
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import Checkbox from '@mui/material/Checkbox';
const useStyles = makeStyles({
    login_container: {
        backgroundImage: "url('https://img.freepik.com/free-psd/3d-render-sale-background-design_23-2149879177.jpg?w=1380&t=st=1686157808~exp=1686158408~hmac=ab2870a3778a8eb37831ee82e7bc1b1358fa2e4550e4a22c9dc26493a3331fa0')",
        backgroundSize: "100% 100vh",
        backgroundRepeat: "no-repeat",
        fontFamily: 'Numans sans-serif',
        height: "100vh",
        alignContent: "center",
        display: "flex",
        justifyContent: "center",
    },
    root: {
        width: "450px",
        backgroundColor: "rgba(0,0,0,0.5)",
        height: "370px",
        marginTop: "auto",
        marginBottom: "auto",
        borderRadius: "4px",
    },
    container_header: {
        position: "relative",
        padding: "20px 20px 20px 20px"
    },
    container_header_signIn: {
        color: "white",
        fontSize: "28px !important",
        fontFamily: 'Numans sans-serif',
        margin: "0px 0px"
    },
    container_header_social_icon: {
        // border:"1px solid red",
        display: "flex",
        justifyContent: "flex-end",
        position: "absolute",
        right: "20px",
        top: "-30px",

    },
    social_icon_span: {
        marginLeft: "10px",
        color: "#FFC312",
    },
    sm_icons: {
        fontSize: "60px !important",
        "&:hover": {
            color: "#ffffff",
            cursor: "pointer"
        }
    },
    form: { padding: "20px" },
    input_group: {
        display: "flex",
        flexWrap: "wrap",
        position: "relative",
        alignItems: "stretch",
        width: "100%",
        margin: "0px 0px 20px 0px",
    },
    input_pre_icon: {
        width: "50px",
        backgroundColor: "#FFC312",
        color: "black",
        border: "0 !important",
        display: "flex",
        justifyContent: "center",
        padding: "5px 0px 0px 0px !important",
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px'
    },
    input_icon: {
        backgroundColor: "#FFC312",
        color: "black",
        border: "0 !important",
        fontSize: "20px"
    },
    email: {
        width: "86%",// Adjust the height value as per your requirement
        borderTopLeftRadius: "20px",
        '& .MuiInputBase-root': {
            height: '36px',
            backgroundColor: "white",
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px',
            outline: "0 0 0 0  !important",
            boxShadow: "0 0 0 0 !important",
        },
        "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: "5px 4px"
        }
    },
    input_checkbox: {
        display: "flex",
        justifyContent: "flex-start",

        "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-disabled": {
            color: "#ffffff",
            width: "20px",
            height: "20px",
            marginLeft: "0px",
            marginRight: "5px",
        },
    },
    checkbox: {
        color: "green"

    },
    remember: {
        color: "#FFFFFF",
        fontSize: "16px",
        padding: "2px 0px"
    },
    signInButton_container: {
        display: "flex",
        justifyContent: "flex-end"
    },
    signInButton: {
        width: "100px",
        height: "40px",
        backgroundColor: "#FFC312",
        color: "#000000",
        cursor: "pointer",
        padding: "6px 12px",
        fontSize: "16px !important",
        fontFamily: ' sans-serif',
        textTransform: 'capitalize',
        "&:hover": {
            color: "black",
            backgroundColor: "white"
        }

    },
    footer: {
        padding: "12px 20px"
    },
    signUpButton_container: {
        display: "flex",
        justifyContent: "center"
    },
    spanOneSignUpbutton: {
        color: "white"
    },
    spanSigTwonUpbutton: {
        padding: "0px 0px 0px 7px"
    },
    link_signup: {
        textDecoration: "none",
        color: "#007bff"
    },

});

function Login_page() {
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
        <div className={classes.login_container}>
            <div className={classes.root}>
                <div className={classes.container_header}>
                    <h3 className={classes.container_header_signIn}>Sign In</h3>
                    <div className={classes.container_header_social_icon}>
                        <span className={classes.social_icon_span}>< FacebookIcon className={classes.sm_icons} /></span>
                        <span className={classes.social_icon_span}>< TwitterIcon className={classes.sm_icons} /></span>
                        <span className={classes.social_icon_span}><InstagramIcon className={classes.sm_icons} /></span>
                    </div>
                </div>
                <div className={classes.form}>
                    <div className={classes.input_group}>
                        <div className={classes.input_pre_icon}>
                            <span className={classes.input_icon}>
                                <PersonIcon size="small" />
                            </span>
                        </div>
                        <TextField autoFocus={false} placeholder="email" className={classes.email} onChange={getEmail} />
                    </div>
                    <div className={classes.input_group}>
                        <div className={classes.input_pre_icon}>
                            <span className={classes.input_icon}>
                                <KeyIcon size="small" />
                            </span>
                        </div>
                        <TextField placeholder="password" className={classes.email} onChange={getPassword} />
                    </div>

                    <div class={classes.input_checkbox}>
                        <Checkbox {...label} disabled className={classes.checkbox} />
                        <span className={classes.remember}>Remember</span>
                    </div>

                    <div className={classes.signInButton_container}>
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

                        >
                            Login
                        </Button>
                    </div>
                </div>
                <div className={classes.footer}>
                    <div className={classes.signUpButton_container}>
                        <span className={classes.spanOneSignUpbutton}> Don't have an account?</span>
                        <span className={classes.spanSigTwonUpbutton}><Link className={classes.link_signup} to="/Sign_up">Sign Up</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login_page;
