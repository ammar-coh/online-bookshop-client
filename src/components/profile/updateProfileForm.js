import React, { useEffect, useContext, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import Context from '../../context'
import { useForm, Controller } from "react-hook-form";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { useStylesInformation } from './style'
import Radio from '@mui/material/Radio';
import Autocomplete from './country';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ErrorMessage } from "@hookform/error-message";
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Avatar from '@mui/material/Avatar';
import { userUpdated } from './api'
import sample from '../../Assets/867d7f81-d66f-465c-8bb2-17a212dd9919.jpg'
import {updateUserProfile} from '../../redux/actions/index'
function InformationForm({ setLoading}) {
    const { alertContent, setAlertContent, setAlertOpen, setProfileUpdate } = useContext(Context);

    const dispatch = useDispatch();
    const [userProfileImg, setUserProfileImg] = useState();
    const user = useSelector((state) => state.user_login.details);
    const [isUserImgSelected, setIsUserImgSelected] = useState(false);
    const userDetailsStorage = JSON.parse(localStorage.getItem("userInfo"))
    const { register, handleSubmit, control, formState: { errors }, reset, setValue } = useForm({
        criteriaMode: "all",
        defaultValues: {
            firstName: userDetailsStorage.firstName ? userDetailsStorage.firstName : userDetailsStorage.displayName,
            lastName: userDetailsStorage.lastName ? userDetailsStorage.lastName : null,
            userName: userDetailsStorage.displayName,
            email: userDetailsStorage.email,
            gender: userDetailsStorage.gender ? userDetailsStorage.gender : "male",
            age: userDetailsStorage.age ? userDetailsStorage.age : "26-40",
        },
    });
    useEffect(() => {
            setValue("country", 'Pakistan')
    }, [])
    const classes = useStylesInformation()
    const changeHandler = (event) => {
        const image = event.target.files[0];
        if (!image) {
            return false;
        }
        // if (!image.name.match(/\.(jpg|png)$/)) {
        //   message.error("Photo should be png or jpg format.");
        //   return false;
        // }
        // if (image.size > 5120000) {
        //   message.error("Photo size should be less than 5MB.");
        //   return false;
        // }
        setUserProfileImg(event.target.files[0]);
        // handleChange("profile_pic", event.target.files[0]);
        setIsUserImgSelected(true);
    };
    const onSubmit = data => {
        const fd = new FormData()
        if (isUserImgSelected && userProfileImg) {
            data.imageFile = userProfileImg
        }
        for (const [key, value] of Object.entries(data)) {
            if (value !== null && value !== undefined) {
                fd.append(key, value);
            }
        }
        const id = user.user.id
        userUpdated(id, fd, setProfileUpdate, alertContent, setAlertContent, setAlertOpen, setLoading,dispatch,updateUserProfile)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <Grid style={{ width: "100%", display: "block", }}>
                <Grid style={{ height: "auto" }}>
                    <Box className={classes.box2}>
                        <Grid className={classes.photoDiv}>
                            <Grid className={classes.photoHeading}>
                                <Typography align='center'>
                                    Photo
                                </Typography>
                            </Grid>
                            <Paper className={classes.photoPaper} variant="outlined" elevation={6} sx={{
                                width: "100%",
                                padding: "5px 5px 0px 5px",
                                //  border:""
                            }}>
                                <Grid className={classes.photo} >
                                    <Avatar
                                        alt="Selected"
                                        src={isUserImgSelected ? URL.createObjectURL(userProfileImg) :
                                            !isUserImgSelected && userDetailsStorage.imageURL ?
                                                userDetailsStorage.imageURL : sample}
                                        sx={{ width: "100%", height: "90%" }}
                                    />
                                    <Controller
                                        name="imageFile"
                                        control={control}
                                        {...register('imageFile', {
                                            pattern: {
                                                message: 'required',
                                            },
                                        })}
                                        render={({ field }) => (
                                            <div>
                                                <Input
                                                    {...field}
                                                    type='file'
                                                    name='profileImg'
                                                    accept='image/*'
                                                    style={{ display: "none" }}
                                                    onChange={changeHandler}
                                                    id="profileImg"
                                                />
                                                <InputLabel htmlFor="profileImg" style={{
                                                    fontSize: "20px",
                                                    width: "100%",
                                                    padding: "0px 0px 0px 65px",
                                                    marginTop: "-15px",
                                                }}>
                                                    <CloudUploadIcon
                                                        className={classes.uploadIcon}
                                                        style={{
                                                            fontSize: "20px",
                                                            borderRadius: "50%",
                                                            // color:"#d22129",
                                                        }}
                                                    />
                                                </InputLabel>
                                            </div>
                                        )}

                                    />
                                </Grid>
                            </Paper>
                        </Grid>
                    </Box>
                </Grid>
                <Grid style={{ display: "flex" }}>
                    <Grid className={classes.informationSection1} style={{ display: "block" }}>
                        <Grid style={{ display: "block", width: "100%" }}>
                            <Typography style={{
                                padding: "0px 0px 5px 0px",
                            }}>First Name</Typography>
                            <Controller
                                name=" firstName"
                                control={control}
                                {...register('firstName', {
                                    required: 'required',
                                    pattern: {
                                        message: 'required',
                                    },
                                })}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        className={classes.textField}
                                        fullWidth
                                        onChange={(e) => {
                                            field.onChange(e);
                                        }}
                                    />
                                )}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="firstName"
                                render={({ messages }) => {
                                    console.log("messages", messages);
                                    return messages
                                        ? Object.entries(messages).map(([type, message]) => (
                                            <p className={classes.error_message} key={type}>{message}</p>
                                        ))
                                        : null;
                                }}
                            />

                        </Grid>
                        <Grid>
                            <Typography style={{ padding: "15px 0px 5px 0px" }}>User name</Typography>
                            <Controller
                                name=" userName"
                                control={control}
                                {...register('userName', {
                                    required: 'required',
                                    pattern: {
                                        message: 'required',
                                    },
                                })}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        className={classes.textField}
                                        fullWidth
                                        onChange={(e) => {
                                            field.onChange(e);
                                        }}
                                    />
                                )}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="userName"
                                render={({ messages }) => {
                                    console.log("messages", messages);
                                    return messages
                                        ? Object.entries(messages).map(([type, message]) => (
                                            <p className={classes.error_message} key={type}>{message}</p>
                                        ))
                                        : null;
                                }}
                            />
                        </Grid>
                        <Grid style={{ display: "block", width: "100%" }}>
                            <Typography style={{ padding: "15px 0px 5px 0px" }}>Email</Typography>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                {...register('email', {
                                    required: 'required',
                                    pattern: {
                                        message: 'required',
                                    },
                                })}
                                render={({ field }) => (
                                    < TextField
                                        type="email"
                                        {...field}
                                        autoFocus={false}
                                        className={classes.textField}
                                        fullWidth
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
                        </Grid>
                        <Grid style={{ display: "block", width: "100%" }}>
                            <Typography style={{ padding: "15px 0px 5px 0px" }}>Gender:</Typography>
                            <Controller
                                name=" gender"
                                control={control}
                                defaultValue="male"
                                {...register('gender', {
                                    pattern: {
                                        message: 'required',
                                    },
                                })}
                                render={({ field }) => (
                                    <Grid
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            padding: "0px"
                                        }}>
                                        <RadioGroup aria-label="gender" {...field}>
                                            <FormControlLabel
                                                value="female"
                                                control={<Radio />}
                                                label="Female"
                                            />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        </RadioGroup>
                                    </Grid>
                                )}
                            />

                        </Grid>
                    </Grid>
                    <Grid className={classes.informationSection2}>
                        <Grid style={{ display: "block", width: "100%" }}>
                            <Typography style={{ padding: "0px 0px 5px 0px" }}>Last Name</Typography>
                            <Controller
                                name=" lastName"
                                control={control}
                                {...register('lastName', {
                                    required: 'require',
                                    pattern: {
                                        message: 'required',
                                    },
                                })}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        className={classes.textField}
                                        fullWidth
                                        onChange={(e) => {
                                            field.onChange(e);
                                        }}
                                    />
                                )}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="lastName"
                                render={({ messages }) => {
                                    console.log("messages", messages);
                                    return messages
                                        ? Object.entries(messages).map(([type, message]) => (
                                            <p className={classes.error_message} key={type}>{message}</p>
                                        ))
                                        : null;
                                }}
                            />
                        </Grid>
                        <Grid style={{ display: "block", width: "100%" }}>
                            <Typography style={{ padding: "15px 0px 5px 0px" }}>Country:</Typography>
                            <Autocomplete Controller={Controller} register={register} control={control} errors={errors} classes={classes} setValue={setValue} />
                        </Grid>
                        <Grid style={{ display: "block", width: "100%" }}>
                            <Typography style={{ padding: "15px 0px 5px 0px" }}>Age:</Typography>
                            <Controller
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        fullWidth
                                        sx={{
                                            '& .MuiSelect-select': {
                                                borderColor: 'rgba(0, 0, 0, 0.08)',
                                                borderStyle: "solid",
                                            },
                                            '& fieldset': {
                                                borderColor: 'rgba(0, 0, 0, 0.08)',
                                                borderStyle: "solid",
                                            },
                                            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#d22129" },
                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#d22129" }
                                        }}
                                    >
                                        <MenuItem value={'12-18'}>12-18</MenuItem>
                                        <MenuItem value={'19-25'}>19-25</MenuItem>
                                        <MenuItem value={'26-40'}>26-40</MenuItem>
                                        <MenuItem value={'41-60'}>41-60</MenuItem>
                                        <MenuItem value={'61>'}>61 &gt;</MenuItem>
                                    </Select>
                                )}
                                name="age"
                                control={control}
                            />
                        </Grid>

                    </Grid>
                </Grid>
                <Box className={classes.box5}>
                    <Grid style={{
                        padding: "0px 0px 10px 70px",
                        width: "16%",
                        // border:"1px solid blue"
                    }}>
                        <Button type="submit" className={classes.submitButton}>
                            Submit
                        </Button>
                    </Grid>
                    <Grid style={{ padding: "0px 0px 10px 50px", width: "15%" }}>
                        <Button className={classes.cancelButton}>
                            Cancel
                        </Button>
                    </Grid>
                </Box>
            </Grid>


        </form>
    )
}

export default InformationForm