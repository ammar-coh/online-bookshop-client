import React, { useEffect, useContext, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import Context from '../../context'
import { useStylesIndex } from './style'
import { useForm, Controller } from "react-hook-form";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import sample from '../../Assets/867d7f81-d66f-465c-8bb2-17a212dd9919.jpg';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Avatar from '@mui/material/Avatar';
function Profile() {
  const [isUserImgSelected, setIsUserImgSelected] = useState(false);
  const dispatch = useDispatch();
  const [userProfileImg, setUserProfileImg] = useState();
  const [updateProfileLoading, setUpdateProfileLoading] = useState(false);
  const classes = useStylesIndex()
  const { register, handleSubmit, control, formState: { errors }, } = useForm({
    criteriaMode: "all"
  });
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
    // console.log(data);
    // dispatch(

    // );
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box style={{ padding: "90px 40px 200px 40px", height: "100vh" }}>
        <Box className={classes.mainBox}>
          <Paper elevation={3} style={{ height: "100%" }} >
            <Box className={classes.titleBox}>
              <Typography variant="h5" className={classes.titleText}>
                <span
                  style={{
                    fontFamily: "Montserrat, sans-se",
                  }}>
                  Profile
                </span>
              </Typography>
            </Box>
            <Divider />
            <Box className={classes.mainBox2}>
              <Grid className={classes.informationSectionDiv} style={{ display: "block" }}>
                <Grid style={{ display: "block" }}>
                  <Typography>Email</Typography>
                  <TextField label="Outlined" variant="outlined" />
                </Grid>
                <Grid>
                  <Typography>User name</Typography>
                  <TextField label="Filled" variant="filled" />
                </Grid>

              </Grid>
              <Grid className={classes.photoDiv}>
                <Grid className={classes.photoHeading}>
                  <Typography>
                    Photo
                  </Typography>
                </Grid>
                <Paper className={classes.photoPaper} variant="outlined" elevation={6} sx={{
                  width: "100%",
                  padding: "5px 5px 0px 5px",
                  //  border:"1px solid blue"
                }}>
                  <Grid className={classes.photo} >
                    <Avatar
                      alt="Selected"
                      src={isUserImgSelected ?
                        URL.createObjectURL(userProfileImg) :
                        sample}
                      sx={{ width: "100%", height: "90%" }}
                      // style={{ border: "1px solid green" }}
                    />
                    <Input
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
                      marginTop:"-15px"
                    }}>
                      <CloudUploadIcon style={{
                        fontSize: "20px",
                        borderRadius: "50%"
                      }}
                      />
                    </InputLabel>
                    {/* <img
                      style={{ borderRadius: "70px", objectFit: "contain" }}
                      src={isUserImgSelected ?
                        URL.createObjectURL(userProfileImg) :
                        sample}
                      alt="Selected"
                      width="100%"
                      height="100%"
                    /> */}
                  </Grid>

                </Paper>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Box>
    </form>
  )
}

export default Profile