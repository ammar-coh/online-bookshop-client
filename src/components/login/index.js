import React, { useState } from "react";
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
import { useStylesIndex } from './style'


function Login_page() {
    const history = useHistory();
    const classes = useStylesIndex();
    const user = useSelector((state) => state.user_login.details);
    const dispatch = useDispatch();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const { register, handleSubmit, control, formState: { errors }, } = useForm({
        criteriaMode: "all"
    });
    const onSubmit = data => {
        dispatch(
            sign_in_saga({
                email: data.email,
                password: data.password,
                history,
            })
        );
    }

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
                            <Controller
                                name="email"
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
