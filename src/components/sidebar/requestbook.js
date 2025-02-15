import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Grid from '@mui/material/Grid';
import Button from "@material-ui/core/Button";
import Box from '@mui/material/Box';
import { useStylesRequestBook } from './requestBookStyle'
import { Typography } from '@mui/material';


function Requestbook() {
  const dispatch = useDispatch();
  const classes = useStylesRequestBook();
  return (
    <Box sx={{
      display: 'flex',
      // border: '1px solid red',
      // height:
      alignItems: 'center',
      height: { xs: '432px' }
    }}>
      <Grid display='block' sx={{
        // border: '1px solid black',
        width: '100%'
      }} >
        <Box className={classes.text}
          sx={{
            display: 'flex',
            justifyContent: 'start',
            paddingLeft :'10px'
          }}

        >
          <Typography variant='h5'
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontOpticalSizing: 'auto',
              fontWeight: 600,
              fontStyle: 'normal',
            }}
          > "Can't Find What
            <br></br>You Are Looking<br></br> For?"
          </Typography>
        </Box>
        <Box sx={{
          px: '18px',
          display: 'flex',
          justifyContent: 'center',
          // border: '1px solid red'
        }} >
          <Button
          >
            <span className={classes.button_1}>Request Now</span>
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default Requestbook