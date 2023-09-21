import React, { useEffect, useContext, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import Context from '../../context'
import { useStylesAddBook } from './style'
import { useForm, Controller } from "react-hook-form";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import sampleBookCover from '../../Assets/realistic-book-cover-mockup_125540-2173.avif'

function AddBook() {
    const dispatch = useDispatch();
    const classes = useStylesAddBook()
    const [isUserImgSelected, setIsUserImgSelected] = useState(false);
    const [userProfileImg, setUserProfileImg] = useState();
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
        <Box className={classes.mainBox}>
            <Grid className={classes.headingAddBook}>
                <Typography style={{ fontFamily: "Montserrat, sans-se" }}>
                    Add New Book
                </Typography>
            </Grid>
            <Divider light />
            <Grid className={classes.addBookForm}>
                <Grid style={{ display: "block", width: "100%" }}>
                    <Typography style={{
                        padding: "0px 0px 5px 0px",
                    }}>Title</Typography>
                    <TextField
                        className={classes.textField}
                        fullWidth
                    />
                </Grid>
                <Grid>
                    <Typography style={{ padding: "15px 0px 5px 0px" }}>Author</Typography>
                    <TextField
                        className={classes.textField}
                        fullWidth
                    />
                </Grid>
                <Grid>
                    <Typography style={{ padding: "15px 0px 5px 0px" }}>Description</Typography>
                    <TextField
                        className={classes.textField}
                        fullWidth
                    />
                </Grid>
                <Grid style={{ display: "block", width: "100%" }}>
                    <Typography style={{ padding: "15px 0px 5px 0px" }}>Rating</Typography>
                    <Rating
                        name="simple-controlled"
                    // value={value}
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    />
                </Grid>
                <Grid>
                    <Typography style={{ padding: "15px 0px 5px 0px" }}>Price</Typography>
                    <TextField
                        className={classes.textField}
                        fullWidth
                    />
                </Grid>
                <Grid style={{ display: "block", width: "100%" }}>
                    <Typography style={{ padding: "15px 0px 5px 0px" }}>Stock</Typography>
                    <TextField
                        className={classes.textField}
                        fullWidth
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
                                style={{ width: "100%", height: "90%",padding:"12px" }}
                            />
                        </Grid>
                    </Grid>
                    <Grid className={classes.uploadImage}>
                        <Grid>
                            <Input
                                type='file'
                                name='coverImg'
                                accept='image/*'
                                style={{ display: "none" , }}
                                onChange={changeHandler}
                                id="coverImg"
                            />
                            <InputLabel htmlFor="coverImg" style={{
                                width: "100%",
                                padding: "15px 0px 0px 0px",
                            }}>
                                <CloudUploadIcon style={{
                                    fontSize: "50px",
                                    borderRadius: "10%",
                                    padding:"0px"
                                }}
                                />
                            </InputLabel>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AddBook