import React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles({
    root: {
      width: "100%",
    display:"flex",
    justifyContent:"center",
    padding:"340px"
    },
  
  });
function Loading() {
const classes = useStyles()
    return (
        <Stack spacing={2} direction="row"  className={classes.root}>

            <CircularProgress color="error" size={100} />

        </Stack>
    )
}

export default Loading