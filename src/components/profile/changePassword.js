import React, { useEffect, useContext, useState,useRef } from "react";
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
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ErrorMessage } from "@hookform/error-message";
import { changeUserPassword } from './api'
function ChangePassword({setLoading}) {
  const {  alertContent, setAlertContent, setAlertOpen} = useContext(Context);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const user = useSelector((state) => state.user_login.details);
  const classes = useStylesChangePassword()
  const { register, handleSubmit, control, formState: { errors },watch } = useForm({
    criteriaMode: "all"
  });
  const newPassword = useRef({});
  newPassword.current = watch("newPassword", "");
  const handleCurrentPasswordToggle = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  const handleNewPasswordToggle = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleConfirmedPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const onSubmit = data => {
   const id = user.user.id
    changeUserPassword(id,data, alertContent, setAlertContent, setAlertOpen,setLoading)

   
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className={classes.mainBox}>
        <Grid className={classes.informationSection1} style={{ display: "block" }}>
          <Grid style={{ display: "block", width: "100%" }}>
            <Typography style={{
              padding: "0px 0px 5px 0px",
            }}>Current Password:</Typography>
            <Controller
              name=" currentPassword"
              control={control}
              {...register('currentPassword', {
                required: 'required',
                pattern: {
                  message: 'required',
                },
              })}
              render={({ field }) => (
                <TextField
                  {...field}
                  type={showCurrentPassword ? 'text' : 'password'}
                  variant="outlined"
                  fullWidth

                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleCurrentPasswordToggle} edge="end">
                          {showCurrentPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  className={classes.textField}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                />
              )}
            />
            <ErrorMessage
              errors={errors}
              name="currentPassword"
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
            <Typography style={{ padding: "15px 0px 5px 0px" }}>New Password:</Typography>
            <Controller
              name=" newPassword"
              control={control}
              {...register('newPassword', {
                required: 'required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
              render={({ field }) => (
                <TextField
                  {...field}
                  type={showNewPassword ? 'text' : 'password'}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleNewPasswordToggle} edge="end">
                          {showNewPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  className={classes.textField}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                />
              )}
            />
            <ErrorMessage
              errors={errors}
              name="newPassword"
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
            <Typography style={{ padding: "15px 0px 5px 0px" }}>Confirm Password:</Typography>
            <Controller
              name=" confirmPassword"
              control={control}
              {...register('confirmPassword', {
                required: 'required',
                validate: (value) =>
                value === newPassword.current || 'New Password and Cofirm Password  do not match',
              })}
              render={({ field }) => (
                <TextField
                  {...field}
                  type={showConfirmPassword ? 'text' : 'password'}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={ handleConfirmedPasswordToggle} edge="end">
                          {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  className={classes.textField}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                />
              )}
            />
            <ErrorMessage
              errors={errors}
              name="confirmPassword"
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
      </Box>
      <Box className={classes.box5}>
        <Grid style={{
          padding: "0px 0px 10px 70px",
          width: "16%",
        }}>
          <Button type="submit" className={classes.submitButton} >
            Submit
          </Button>
        </Grid>
        <Grid style={{ padding: "0px 0px 10px 50px", width: "15%" }}>
          <Button className={classes.cancelButton}>
            Cancel
          </Button>
        </Grid>
      </Box>
    </form>
  )
}

export default ChangePassword