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
import { useForm, Controller } from "react-hook-form";
import Error_Message from './reusable_components/ErrorMessage'
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
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
            outline: "0 0 0 0  !important",
            boxShadow: "0 0 0 0 !important",
            width: "86%",
            border: "1px solid #e5e5e5",
            borderColor: "#bbb!important",

        },
        "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: "5px 4px"
        },
        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            top: 0, borderRadius: "none",
            borderStyle: "none"
        }
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
        width: "100%",
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




function Sign_up() {
    const history = useHistory()
    const classes = useStyles();
    const dispatch = useDispatch();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
    const { register, handleSubmit, control, formState: { errors }, setError, } = useForm({
        criteriaMode: "all"
    });
    const [error400, setError400] = useState(null)
    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const getUserName = (e) => {
        setUsername(e.target.value)
    }
    const onSubmit = data => {
        console.log(data);
        dispatch(sign_up_saga({
            email: data.email,
            password: data.password,
            userName: data.userName,
            displayName: data.displayName,
            setError: setError,
            history
        }))
    }
    console.log("errormess", errors.username)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.login_container}>
                <div className={classes.root}>
                    <div className={classes.container_header}>
                        <h3 className={classes.container_header_signIn}>Sign Up</h3>
                    </div>
                    <div className={classes.form}>
                        <div className={classes.input_group}>
                            <div className={classes.input_pre_icon}>
                                <span className={classes.input_icon}>
                                    <BadgeIcon size="small" />
                                </span>
                            </div>
                            <Controller name="userName"
                                control={control}
                                defaultValue=""
                                {...register('userName', {
                                    required: 'required',
                                })}
                                render={({ field }) => (
                                    < TextField
                                        {...field}
                                        autoFocus={false}
                                        placeholder="user name"
                                        className={classes.email}
                                        onChange={(e) => {
                                            field.onChange(e);
                                        }}
                                    />
                                )}
                            />
                            {errors.userName && errors.userName.type == 'custom'? <p className={classes.error_message}>{errors.userName.message}</p>:null}

                            <Error_Message
                                errors={errors}
                                name="userName"
                                render={({ messages }) => {
                                    console.log("messages", messages);
                                    return messages
                                        ? Object.entries(messages).map(([type, message]) => (
                                            <p className={classes.error_message} key={type}>{message}</p>
                                        ))
                                        : null;
                                }} />


                        </div>
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
                                        value: /^\S+@\S+$/i,
                                        message: `Invalid Email =>  example "dave@gmail.com"`,
                                    },
                                })}
                                render={({ field }) => (
                                    < TextField
                                        {...field}
                                        // error={!!errors.email}
                                        // helperText={errors.email ? errors.email.message : ''}
                                        autoFocus={false}
                                        placeholder="email"
                                        className={classes.email}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            getEmail(e);
                                        }}
                                    // onChange={getEmail} 
                                    />
                                )} />
                            <Error_Message errors={errors} name="email" />
                        </div>
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
                            <Error_Message errors={errors} name="password" />
                        </div>
                        <div className={classes.input_group}>
                            <div className={classes.input_pre_icon}>
                                <span className={classes.input_icon}>
                                    <BadgeIcon size="small" />
                                </span>
                            </div>
                            <Controller name="displayName"
                                control={control}
                                defaultValue=""
                                {...register('displayName', {
                                    required: 'required',
                                    pattern: {
                                        message: 'required',
                                    },
                                })}
                                render={({ field }) => (
                                    < TextField
                                        {...field}
                                        autoFocus={false}
                                        placeholder="name"
                                        className={classes.email}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            getUserName(e);
                                        }}
                                    />
                                )} />
                            <Error_Message errors={errors} name="displayName" />
                        </div>
                        <div className={classes.signInButton_container}>
                            <Button
                                type='submit'
                                className={classes.signInButton}
                                size="large"
                            >
                                Register
                            </Button>
                        </div>
                    </div>


                </div>
            </div>
        </form>
    )
}

export default Sign_up
