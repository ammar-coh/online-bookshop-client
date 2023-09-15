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
function Profile() {
  const dispatch = useDispatch();
  const classes = useStylesIndex()
  const { register, handleSubmit, control, formState: { errors }, } = useForm({
    criteriaMode: "all"
  });
  const onSubmit = data => {
    // console.log(data);
    // dispatch(

    // );
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box style={{ padding: "60px 40px", height:"100vh" }}>
        <Box className={classes.mainBox}>
          <Paper elevation={3}  style={{ height:"100%" }} >
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

              </Grid>
            </Box>
          </Paper>
        </Box>
      </Box>
    </form>
  )
}

export default Profile