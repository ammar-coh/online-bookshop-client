import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Grid from '@mui/material/Grid';
import Button from "@material-ui/core/Button";
import Box from '@mui/material/Box';
import { useStylesRequestBook } from './requestBookStyle'

function Requestbook() {
  const dispatch = useDispatch();
  const classes = useStylesRequestBook();
  return (
    <Box className={classes.root}>
      <Grid className={classes.main}>
        <Grid className={classes.text}>
          <h3> "Can't find what
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