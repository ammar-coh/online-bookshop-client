import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const useStyles = makeStyles({
    profile_button: {
        textTransform: 'none',
        backgroundColor: "transparent",
        width: "100%",
        justifyContent: "start",
        "& .MuiButton-text": {
            padding: "6px 0px"
        },
        "& .MuiButton-label": {
            fontFamily: "Montserrat, sans-se",
            color: "#fff",
        },
    },
    KeyboardArrowDownIcon: {
        display: "flex",
        width: "100%",
        justifyContent: "end",
    },
    profile_text: {
        width: "100%",
        height: '34px',
        padding: "2px 80px 0px 0px",
    },

})
function Profile() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button
                className={classes.profile_button}
                onClick={handleClick}
            >
                <div className={classes.user_icon}>
                    <PersonOutlinedIcon />

                </div>
                <div className={classes.profile_text}>
                    My profile
                </div>
                <div className={classes.KeyboardArrowDownIcon}>
                    <KeyboardArrowDownIcon />
                </div>
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                elevation={0}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose} disableRipple>
                    < LibraryBooksOutlinedIcon />
                 <span>Profile</span> 
                </MenuItem>

            </Menu>
        </div>
    )
}

export default Profile