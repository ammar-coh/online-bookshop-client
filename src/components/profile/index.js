import React, { useEffect, useContext, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from "@material-ui/core/Button";
import Context from '../../context'
import { useStylesIndex } from './style'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import InformationForm from './updateProfileForm'
import ChangePassword from './changePassword'
import Alerts from '../alerts'
function Profile() {
  const { alertOpen } = useContext(Context);
  const [menuPersonalInformation, setMenuPersonalInformation] = useState(true)
  const [menuChangePassword, setMenuChangePassword] = useState(false)
  const classes = useStylesIndex({ menuPersonalInformation, menuChangePassword })


  const handlePersonalInformationButton = () => {
    setMenuPersonalInformation(true)
    setMenuChangePassword(false)
  
  }
  const handleChangePassword = () => {
    setMenuChangePassword(true)
    setMenuPersonalInformation(false)
  
  }


 
  return (
    <>      {alertOpen ? <Alerts /> : null}
      <Box style={{ padding: "90px 40px 200px 40px", height: "100vh" }}>
        <Box className={classes.mainBox}>
          <Paper elevation={3} style={{
            height: "auto", 
          }} >
            <Divider />
            <Box className={classes.box4}>
              <Button
                className={classes.button1}
                onClick={handlePersonalInformationButton}>
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "50%",
                    padding: "20px"
                  }}>
                  <Typography>
                    <span
                      style={{
                        fontFamily: "Montserrat, sans-se",
                      }}>
                      Personal Information
                    </span>
                  </Typography>
                </Grid>
              </Button>
              <Button
                className={classes.button2}
                onClick={handleChangePassword}
                disableHoverListener
              >
                <Grid
                  style={{
                    padding: "20px",
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                  }}>
                  <Typography>
                    <span
                      style={{
                        fontFamily: "Montserrat, sans-se",
                      }}>
                      Change Password
                    </span>
                  </Typography>
                </Grid>
              </Button>
            </Box>
            {menuPersonalInformation  ? (
              <InformationForm
              />
            ) :
              <ChangePassword />}
          </Paper>
        </Box>
      </Box>
    </>

  )
}

export default Profile




