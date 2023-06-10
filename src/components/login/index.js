import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
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
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const useStyles = makeStyles({
    login_container: {
        fontFamily: 'Numans sans-serif',
        height: "100vh",
        alignContent: "center",
        display: "flex",
        justifyContent: "center",
    },
    root: {
        width: "450px",
        backgroundColor: "#ffffff",
        borderWidth: 0,
        boxShadow: "rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0",
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
        color: "#333533",
        fontSize: "28px !important",
        fontFamily: 'Numans sans-serif',
        margin: "0px 0px"
    },
    container_header_social_icon: {
        display: "flex",
        justifyContent: "flex-end",
        position: "absolute",
        right: "30px",
        top: "15px",

    },
    social_icon_span_twitter: {
        marginLeft: "10px",
        color: "rgb(29, 155, 240)",
    },
    social_icon_span_facebook: {
        marginLeft: "10px",
        color: "#1877f2",

    },
    social_icon_span_instagram: {
        marginLeft: "10px",
        color: "#fff",
        borderRadius: "0.3em",
        background: "#d6249f",
        background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
        "&:hover": {
            color: "#d22129",
            background: "#ffffff",
            cursor: "pointer"
        }
    },
    sm_icons: {
        fontSize: "45px !important",
        "&:hover": {
            color: "#d22129",
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
        backgroundColor: "#d22129",
        color: "#ffffff",
        border: "0 !important",
        display: "flex",
        justifyContent: "center",
        padding: "5px 0px 0px 0px !important",
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px'
    },
    input_icon: {
        backgroundColor: "#d22129",
        color: "#ffffff",
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
        backgroundColor: "#d22129",
        color: "#ffffff",
        cursor: "pointer",
        padding: "6px 12px",
        fontSize: "16px !important",
        fontFamily: ' sans-serif',
        textTransform: 'capitalize',
        "&:hover": {
            color: "#ffffff",
            backgroundColor: "#333533"
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
        color: "#000000"
    },
    spanSigTwonUpbutton: {
        padding: "0px 0px 0px 7px"
    },
    link_signup: {
        textDecoration: "none",
        color: "#007bff"
    },
    error_message: {
        color: "#d22129",
        margin: "0px",
        '&::before': {
            content: '"⚠ "',
            display: 'inline',
            color: "#d22129",
        },
    }
});

function Login_page() {
    const history = useHistory();
    const classes = useStyles();
    const user = useSelector((state) => state.user_login.details);
    const dispatch = useDispatch();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { register, handleSubmit, control, formState: { errors }, } = useForm({
        criteriaMode: "all"
    });
    const getEmail = (e) => {
        setEmail(e.target.value);
    };

    const getPassword = (e) => {
        setPassword(e.target.value);
    };

    const current_user_email = email;
    const current_user_password = password;
    const onSubmit = data => {
        console.log(data);
        dispatch(
            sign_in_saga({
                email: data.email,
                password: data.password,
                history,
            })
        );
    }

    console.log("user login status", user?.status)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.login_container}>
                <div className={classes.root}>
                    <div className={classes.container_header}>
                        <h3 className={classes.container_header_signIn}>Sign In</h3>
                        <div className={classes.container_header_social_icon}>
                            <span className={classes.social_icon_span_facebook}>< FacebookIcon className={classes.sm_icons} /></span>
                            <span className={classes.social_icon_span_twitter}>< TwitterIcon className={classes.sm_icons} /></span>
                            <span className={classes.social_icon_span_instagram}><InstagramIcon className={classes.sm_icons} /></span>
                        </div>
                    </div>
                    {user.status == false && user.message == "Please enter a correct email or create account first." ?
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <span className={classes.error_message}>
                                {user.message}
                            </span>
                        </div> : null}
                    <div className={classes.form}>
                        <div className={classes.input_group}>
                            <div className={classes.input_pre_icon}>
                                <span className={classes.input_icon}>
                                    <PersonIcon size="small" />
                                </span>
                            </div>
                            <Controller name="email"
                                control={control}
                                defaultValue=""
                                {...register('email', {
                                    required: 'Please enter your email address',
                                    pattern: {
                                        message: 'Invalid Email',
                                    },
                                })}
                                render={({ field }) => (
                                    < TextField
                                        {...field}
                                        autoFocus={false}
                                        placeholder="email"
                                        className={classes.email}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            getEmail(e);
                                        }}
                                    />
                                )} />
                            <ErrorMessage
                                errors={errors}
                                name="email"
                                render={({ messages }) => {
                                    console.log("messages", messages);
                                    return messages
                                        ? Object.entries(messages).map(([type, message]) => (
                                            <p className={classes.error_message} key={type}>{message}</p>
                                        ))
                                        : null;
                                }}
                            />
                        </div>
                        {user.status == false && user.message == "Please enter a correct password" ?
                            <div style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                <span className={classes.error_message}>
                                    {user.message}
                                </span>
                            </div> : null}

                        <div className={classes.input_group}>
                            <div className={classes.input_pre_icon}>
                                <span className={classes.input_icon}>
                                    <KeyIcon size="small" />
                                </span>
                            </div>
                            <Controller name="password"
                                control={control}
                                defaultValue=""
                                {...register('password', {
                                    required: 'Please enter your password',
                                    minLength: {
                                        value: 8,
                                        message: 'Password should be at least 8 characters long',
                                    },
                                })}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        type="password"
                                        // error={!!errors.password}
                                        // helperText={errors.password && errors.password.message}
                                        placeholder="password"
                                        className={classes.email}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            getPassword(e);
                                        }}
                                    />
                                )}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="password"
                                render={({ messages }) => {
                                    console.log("messages", messages);
                                    return messages
                                        ? Object.entries(messages).map(([type, message]) => (
                                            <p className={classes.error_message} key={type}>{message}</p>
                                        ))
                                        : null;
                                }}
                            />
                        </div>

                        <div class={classes.input_checkbox}>
                            <Checkbox {...label} disabled className={classes.checkbox} />
                            <span className={classes.remember}>Remember</span>
                        </div>

                        <div className={classes.signInButton_container}>
                            <Button type="submit" className={classes.signInButton} >
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
        </form>
    );
}

export default Login_page;
