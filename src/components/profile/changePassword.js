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
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function ChangePassword() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const classes = useStylesChangePassword()
  const { register, handleSubmit, control, formState: { errors }, } = useForm({
    criteriaMode: "all"
  });
  const handleCurrentPasswordToggle = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  const handleNewPasswordToggle = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleConfirmedPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <Box className={classes.mainBox}>
      <Grid className={classes.informationSection1} style={{ display: "block" }}>
        <Grid style={{ display: "block", width: "100%" }}>
          <Typography>Current Password:</Typography>
          <TextField
            type={showCurrentPassword ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            required
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleCurrentPasswordToggle} edge="end">
                    {showCurrentPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            style={{ width: "100%" }} />
        </Grid>
        <Grid>
          <Typography>New Password:</Typography>
          <TextField
            style={{ width: "100%" }}
            type={showNewPassword ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleNewPasswordToggle} edge="end">
                    {showNewPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }} />
        </Grid>
        <Grid style={{ display: "block", width: "100%" }}>
          <Typography>Confirm Password:</Typography>
          <TextField
            style={{ width: "100%" }}
            type={showConfirmPassword ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleConfirmedPasswordToggle} edge="end">
                    {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ChangePassword