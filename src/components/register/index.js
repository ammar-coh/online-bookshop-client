import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { sign_up_saga } from "../../redux/actions/index";
import TextField from '@mui/material/TextField'
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import BadgeIcon from '@mui/icons-material/Badge';
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
    form: { padding: "20px" },
    input_group: {
        display: "flex",
        flexWrap: "wrap",
        position: "relative",
        alignItems: "stretch",
        width: "100%",
        margin: "0px 0px 20px 0px",
        '& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root': {
            height: '36px',
            backgroundColor: "white",
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px',
            outline: "0 0 0 0  !important",
            boxShadow: "0 0 0 0 !important",
            width: "86%",
        },
        "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: "5px 4px"
        },
        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": { top: 0 , borderRadius:"none"}
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
        width: "86%",
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
        justifyContent: "center"
    },
    signInButton: {
        width: "50%",
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
    sign_in: {

        width: "180px",
        // paddingLeft:"50px",
        marginLeft: "117px",
    },
    email_heading: {
        marginLeft: "100px",

        width: "60px",
        marginBottom: "1px",
        marginTop: "-10px",

    },
    email: {
        marginLeft: "100px",
        marginTop: "-30px",


    },



});




function Sign_up() {
    const history = useHistory()
    const classes = useStyles();
    const dispatch = useDispatch();

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()

    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const getUserName = (e) => {
        setUsername(e.target.value)
    }

    const current_user_email = email
    const current_user_password = password
    const current_user_name = username


    return (
        <div className={classes.login_container}>
            <div className={classes.root}>
                <div className={classes.container_header}>
                    <h3 className={classes.container_header_signIn}>Sign Up</h3>
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
                    <div className={classes.input_group}>
                        <div className={classes.input_pre_icon}>
                            <span className={classes.input_icon}>
                                <BadgeIcon size="small" />
                            </span>
                        </div>
                        <TextField placeholder="user name" className={classes.email} onChange={getUserName} />
                    </div>
                    <div className={classes.signInButton_container}>
                        <Button
                            onClick={
                                () => {
                                    dispatch(sign_up_saga({
                                        email: current_user_email,
                                        password: current_user_password,
                                        user_name: current_user_name,
                                        history
                                    }))
                                }

                            }
                            className={classes.signInButton}
                            size="large"
                        >
                            Register
                        </Button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Sign_up
