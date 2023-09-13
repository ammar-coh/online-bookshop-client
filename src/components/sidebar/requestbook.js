import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import Grid from '@mui/material/Grid';
import Button from "@material-ui/core/Button";
import { clearChat } from '../../redux/actions/index'
import { socket } from '../../socket'
import Context from '../../context'
import Box from '@mui/material/Box';

const useStyles = makeStyles({
  root: {
    display: "block",
    height: "100%",
    padding: "150px 60px",
    justifyContent: "center",
    overflowWrap: "break-word"
  },
  main: {
    height: "auto",
    padding: "0px 7.5px 50px",
    backgroundColor: "#F6F6F6",
    overflowWrap: "break-word",
    width: "100%"
  },
  text: {
    width: "100%",
    justifyContent: "center",
    overflowWrap: "break-word",
    height: "auto",
    padding:"40px 0px 0px"
  },
  request: {
    width: "100%",
    justifyContent: "center",
    padding: "0px 0px 0px 0px",
    fontFamily: 'Playfair Display ,serif',
    lineHeight: "35px",
    fontSize:"30px"
  },
  button_1: {
    fontFamily: "Montserrat, sans-se",
    justifyContent: "center",
    border: "1px solid #d22129",
    width: "100%",
    backgroundColor: "#d22129",
    color: "#ffffff",
    textTransform: 'none',
    padding: "16px 49px",
    fontSize: "16px",
    fontWeight: 600,
    borderRadius: "5px",
    minWidth:"130px",
    '&:hover': {
      // Define the styles for hover state
      backgroundColor: '#D22129',
    },
  }

})
function Requestbook() {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid className={classes.main}>
        <Grid className={classes.text}>
          <h3 style={{
            width: "100%", fontSize: "30px",
            textAlign: "center", fontFamily: 'Playfair Display ,serif',fontWeight:"bolder",
            lineHeight: "35px",
            
          }}
          > "Can't find what
            <br></br>you are looking<br></br> for?"</h3>
        </Grid>
        <Grid className={classes.request}>
          <Button className={classes.button_1}>
            <span>Request A Book</span>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Requestbook