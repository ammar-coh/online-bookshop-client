import React, { useEffect, useContext, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import Context from '../../../context'
import { useStylesAddBook } from '../style'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import sampleBookCover from '../../../Assets/realistic-book-cover-mockup_125540-2173.avif'
import { ErrorMessage } from "@hookform/error-message";

function AddBookField({isUserImgSelected, setIsUserImgSelected, userProfileImg, setUserProfileImg, Controller, control, register, errors }) {
    const dispatch = useDispatch();
    const classes = useStylesAddBook()
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
    return (
        <Grid>
            <Grid className={classes.addBookForm}>
                <Grid style={{ display: "block", width: "100%" }}>
                    <Typography style={{ padding: "15px 0px 5px 0px" }}>Rating</Typography>
                    <Controller
                        name="rating"
                        control={control}
                        {...register('rating', {
                           required:"required"
                        })}
                        render={({ field }) => (
                            <Rating
                                {...field}

                                onChange={(e) => {
                                    field.onChange(e);
                                }}
                            />
                        )}
                    />
                       <ErrorMessage
                           errors={errors}
                           name="rating"
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
                <Grid className={classes.bookCover}>
                    <Grid className={classes.photoDiv}>
                        <Grid className={classes.photoHeading}>
                            <Typography>
                                Cover Image
                            </Typography>
                        </Grid>
                        <Grid className={classes.photo} >
                            <img
                                alt="Selected"
                                src={isUserImgSelected ?
                                    URL.createObjectURL(userProfileImg) :
                                    sampleBookCover}
                                style={{
                                    width: "100%",
                                    height: "90%",
                                    padding: "12px 0px 12px 0px"
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid className={classes.uploadImage}>
                        <Grid>
                            <Controller
                                name="image"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <div>
                                        <Input
                                            {...field}
                                            type='file'
                                            name='coverImg'
                                            accept='image/*'
                                            style={{ display: "none", }}
                                            onChange={changeHandler}
                                            id="coverImg"
                                        />
                                        <InputLabel htmlFor="coverImg" style={{
                                            width: "100%",
                                            padding: "15px 0px 0px 0px",
                                        }}>
                                            <CloudUploadIcon style={{
                                                fontSize: "80px",
                                                borderRadius: "10%",
                                                padding: "0px",
                                                color: "#d22129",
                                                cursor: "pointer"
                                            }}
                                            />
                                        </InputLabel>
                                    </div>
                                )}
                            />

                        </Grid>
                    </Grid>
                </Grid>
                <Grid style={{ width: "100%" }}>
                    <Typography style={{ padding: "0px 0px 5px 0px" }}>Description</Typography>
                    <Controller
                        name="description"
                        control={control}
                        {...register('description', {
                            required:"required"
                         })}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                multiline
                                rows={4}
                                placeholder="What is this book about?"
                                className={classes.textField}
                                fullWidth
                            />
                        )}
                    />
                     <ErrorMessage
                           errors={errors}
                           name="description"
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
                    <Typography style={{ padding: "15px 0px 5px 0px" }}>Stock</Typography>
                    <Controller
                        name="stock"
                        control={control}
                        defaultValue=""
                        {...register('stock', {
                            required:"required",
                            pattern: {
                                value: /^\d+$/,
                                message: 'field requires number',
                            },
                        })}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                className={classes.textField}
                                fullWidth
                            />
                        )}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="stock"
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
            </Grid>
        </Grid>
    )
}

export default AddBookField