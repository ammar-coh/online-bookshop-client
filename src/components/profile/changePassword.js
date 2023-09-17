import React, { useEffect, useContext, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import Context from '../../context'
import { useStylesChangePassword } from './style'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useForm, Controller } from "react-hook-form";


function ChangePassword() {
  const dispatch = useDispatch();
  const classes = useStylesChangePassword()
  const { register, handleSubmit, control, formState: { errors }, } = useForm({
    criteriaMode: "all"
  });
  return (
    <Box className={classes.mainBox}>
      <Grid className={classes.informationSection1} style={{ display: "block" }}>
        <Grid style={{ display: "block", width: "100%" }}>
          <Typography>First Name</Typography>
          <TextField
            label="Outlined"
            style={{ width: "100%" }} />
        </Grid>
        <Grid>
          <Typography>User name</Typography>
          <TextField
            label="Outlined"
            style={{ width: "100%" }} />
        </Grid>
        <Grid style={{ display: "block", width: "100%" }}>
          <Typography>Email</Typography>
          <TextField
            label="Outlined"
            style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ChangePassword