import React  from 'react'
import { makeStyles } from "@material-ui/core/styles";
import  SideBar from './drawer'

const useStyles = makeStyles({
    root: {
        backgroundColor: "#ffffff",
        width: "100%",
        height: "100%",
    },
    libertyBooks_logo: {},
    home:{
        padding: " 15px 20px",

    },
  
  
   
})

function Sidebar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            < SideBar/>
        </div>
    )
}

export default Sidebar