import React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: (props) => (
      props.appScreenPadding && props.appScreenPadding == 'on' ? "200px" :
        props.appScreenPadding && props.appScreenPadding == 'search' ? "100px"
          : "340px")
  },

});
function Loading(props) {
  const { appScreenPadding, appScreenSize } = props
  const classes = useStyles({ appScreenPadding })
  return (
    <Stack spacing={2} direction="row" className={classes.root}>
      <CircularProgress color="error" size={appScreenSize && appScreenSize == 'true' ? 60 : 100} />
    </Stack>
  )
}

export default Loading