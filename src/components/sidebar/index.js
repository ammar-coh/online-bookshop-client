import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#d22129",
        // backgroundColor:"#0dd6b8",
        width: "100%",
        height:"100%",
    },



})

function Sidebar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>index</div>
    )
}

export default Sidebar